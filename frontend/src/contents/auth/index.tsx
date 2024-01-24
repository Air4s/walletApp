import { useForm } from "react-hook-form";
import Input from "../../components/textbox";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";


interface IField {
  username: string
  password: string
}

const initialValues: IField = {
  username:'',
  password:''
};

const AuthLogin: React.FC = () => {

    const { register, watch, handleSubmit, formState: { isDirty } } = useForm<IField>({
        defaultValues: initialValues
      });

      const navigate = useNavigate();

      const loginFunc = () => {
        console.log('sample func')
        navigate('/dashboard');
      }

      const renderLoginContainer = () => {
        return (
          <div className="h-[500px] w-[400px] bg-[#F2F597] rounded-md shadow-xl flex items-center">
            <div className="bg-[#37B5B6] w-full h-4/5 mx-10 rounded-sm flex items-end">
              <div className="m-4 h-4/5 w-full">
                <Input label="Username" type="text" name="username" />
                <Input label="Password" type="password" name="password" />
                <div className="mt-12 flex justify-center">
                  <Button
                    onClick={loginFunc}
                    customClassName="w-3/4 font-semibold"
                    variant="secondary"
                  >
                    Login
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
      }

    return (
      //  <div className='w-1/2 h-1/2 bg-orange-200'>
      //    <form onSubmit={handleSubmit(loginFunc)}>
      //     <div className=''>
      //       {/* {renderHeader()} */}
      //       A sample header
      //     </div>
      //     <div className='mt-4'>
      //       {/* {renderBody()} */}
      //       A sample body
      //     </div>
      //     <div className='my-12 pb-5'>
      //       {/* {renderFooter()} */}
      //       A sample footer
      //     </div>
      //   </form>
      //  </div>
      <div className="w-full h-screen bg-authBackground bg-no-repeat bg-left bg-cover block">
        <div className="mr-48 h-full flex justify-end items-center">
          {renderLoginContainer()}
        </div>
      </div>
      );
};
export default AuthLogin;