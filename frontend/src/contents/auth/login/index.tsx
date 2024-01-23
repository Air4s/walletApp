import { useForm } from "react-hook-form";


const AuthLogin: React.FC = () => {

    interface IField {
        username: string
        password: string
      }

    const initialValues: IField = {
        username:'',
        password:''
      };

    const { register, watch, handleSubmit, formState: { isDirty } } = useForm<IField>({
        defaultValues: initialValues
      });

      const loginFunc = () => {
        console.log('sample func')
      }

    return (
       <div className='w-1/2 h-1/2 bg-orange-200'>
         <form onSubmit={handleSubmit(loginFunc)}>
          <div className=''>
            {/* {renderHeader()} */}
            A sample header
          </div>
          <div className='mt-4'>
            {/* {renderBody()} */}
            A sample body
          </div>
          <div className='my-12 pb-5'>
            {/* {renderFooter()} */}
            A sample footer
          </div>
        </form>
       </div>
      );
};
export default AuthLogin;