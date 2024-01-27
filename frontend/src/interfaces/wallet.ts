
export interface IGetWalletResponse {
  data: {
    id: number;
    username: string;
    balance: number;
  }
  message: string
}