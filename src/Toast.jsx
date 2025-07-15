import React from 'react';

  import { ToastContainer, toast } from 'react-toastify';
  
  function Toast(){
    const notify = () => toast.warning("Wow so easy!",{
        autoClose:10000, //miliseconds
        hideProgressBar:true,
        pauseOnHover:true,
        draggable:true

    });

    return (
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    );
  }
  export default Toast