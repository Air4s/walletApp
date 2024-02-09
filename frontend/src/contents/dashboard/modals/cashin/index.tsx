import React, { useEffect, useState } from "react";
import Button from "../../../../components/button";
import Modal from "../../../../components/modal";
import Input from "../../../../components/textbox";
import { useDispatch } from "react-redux";
import * as actions from "../../../../redux/wallet/action";
import * as pageActions from "../../../../redux/page-redux/dashboard/action";
import toast from "react-hot-toast";
import { Action } from "redux";
import { AxiosError } from "axios";

interface IProps {
  isOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  width?: string;
}

const CashInModal: React.FC<IProps> = ({ isOpen, onClose, width = "sm" }) => {
  const dispatch = useDispatch();

  const [cashInAmountState, setCashInAmountState] = useState<string>("");

  useEffect(() => {
    if (!isOpen) {
      setCashInAmountState("");
    }
  }, [isOpen]);

  const onChangeInputAmount = (value: string) => {
    setCashInAmountState(value);
  };

  const onSuccessCashIn = () => {
    toast.success("Successfully cash in!");
    dispatch(pageActions.displayCashInModal(false) as Action);

    dispatch(
      actions.getWallet({
        userId: 1,
      })
    );
    setCashInAmountState("");
  };

  const onFailedCashIn = (error: AxiosError) => {
    const errResponse = error.response?.data as { error: string };
    const errorMessage: string | undefined = errResponse?.error;

    toast.error(`Failed transaction: ${errorMessage}`);
  };

  const onCashIn = () => {
    const cashInAmountNumber = parseFloat(cashInAmountState);

    if (!isNaN(cashInAmountNumber)) {
      dispatch(
        actions.walletCashIn({
          cashInAmount: cashInAmountNumber,
          userId: 1,
          onSuccess: onSuccessCashIn,
          onFailed: onFailedCashIn,
        })
      );
    } else {
      console.error("Invalid cashInAmount value:", cashInAmountState);
      toast.error("Invalid cash in amount value");
    }
  };

  const renderModalContent = (): JSX.Element => {
    return (
      <div className="p-5 rounded-xl w-full h-full bg-white text-[#0A1D56]">
        <div>
          <p className="text-xl font-semibold"> Cash In </p>
        </div>
        <div className="mt-8 text-base font-extralight">
          <p> Enter your desired amount: </p>
        </div>
        <div className="shadow-none mt-4">
          <Input
            inputType="number"
            value={cashInAmountState}
            onChange={(e) => onChangeInputAmount(e.target.value)}
          />
        </div>
        <div className="mt-10 mb-2 flex justify-center">
          <Button
            variant="secondary"
            customClassName="w-1/3 border-[1px] border-[#0A1D56]"
            onClick={onCashIn}
          >
            <span> Confirm </span>
          </Button>
        </div>
      </div>
    );
  };

  return (
    <Modal {...{ open: isOpen, onClose, width }} close>
      {renderModalContent()}
    </Modal>
  );
};

export default CashInModal;
