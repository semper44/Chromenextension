/* eslint-disable no-unused-vars */
import React from 'react'
import MainRouter from '../routers/MainRouter'
import 'react-toastify/dist/ReactToastify.css';
  import { ToastContainer} from 'react-toastify';


function MainProvider() {
    return (
      <div>
        <MainRouter />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    );
}

export default MainProvider