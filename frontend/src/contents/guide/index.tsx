import React from 'react';



const GuideForChecking = () => {

  const sampleGetBalanceApiResponse = `
  {
    "message": "Data fetched successfully!",
    "data": {
        "id": 1,
        "username": "Air4s",
        "balance": 59501
    }
  }`;

  const sampleCashInApiResponse = `
  {
    "message": "Cash-in processed successfully!",
    "data": {
        "id": 1,
        "username": "Air4s",
        "balance": 54000
    }
   }`;

  const sampleDebitApiResponse = `
   {
    "message": "Debit processed successfully!",
    "data": {
        "id": 1,
        "username": "Air4s",
        "balance": 60000
    }
  }`;

  return (
    <div className='h-screen'>
      <div className='mt-12 mx-12 p-4 bg-gray-200 rounded-lg shadow-lg'>

        <p className='my-4 text-lg'> Guides for scanning: <b> FE </b> </p>
        <p className='my-4'>
          First, the <b> GET </b> api will be utilized upon loading the page. It gets the current balance of the user.
        </p>
        <p className='my-4'>
          Second, the <b> POST </b> method for cash in is located on the &rdquo;<b>+</b>&rdquo; sign button.
        </p>
        <p className='my-4'>
          Lastly, another <b> POST </b> method for debit is on the <b> Bank </b> icon / logo. It is the only icon that has border.
        </p>

        <p className='mt-12 mb-4 text-lg'> <b> API Endpoints: </b> </p>

        <p className='my-1.5'>
          <i><b> GET </b></i> http://localhost:8080/wallet/balance
        </p>
        <p className='mb-8'>
          <i> JSON: </i> {sampleGetBalanceApiResponse}
        </p>

        <p className='my-1.5'>
          <i><b> POST </b></i> http://localhost:8080/wallet/cash-in?<b>userId=&#123;userIdValue&#125;</b>&<b>cashInAmount=&#123;cashInAmountValue&#125;</b>
        </p>
        <p className='mb-8'>
          <i> JSON: </i> {sampleCashInApiResponse}
        </p>

        <p className='my-1.5'>
          <i><b> POST </b></i> http://localhost:8080/wallet/debit?<b>userId=&#123;userIdValue&#125;</b>&<b>debitAmount=&#123;debitAmountValue&#125;</b>
        </p>
        <p className='mb-8'>
          <i> JSON: </i> {sampleDebitApiResponse}
        </p>

        <p className='mt-12 mb-4 text-lg'> Guides for scanning: <b> BE </b> </p>
        <p className='my-4'>
          You can check the <i><b> database.go </b></i> to check the initial set up, so it can be replicated easily on other devices.
        </p>
        <p className='my-4'>
          A <i><b> docker-compose.yml </b></i> is created on the root folder, so that the local database can be set up (build using docker) whoever has the file.
        </p>
        <p className='my-4'>
          Optional to use the <i><b> makefile </b></i>, for convenience purposes (all of the needed commands are in the makefile).
        </p>
        <p className='my-4'>
          If the makefile is not utilized, there is a file <i><b> init_wallet.sql </b></i> that can be paste and query to a database app for testing purposes.
        </p>


      </div>
    </div>
  );
};

export default GuideForChecking;