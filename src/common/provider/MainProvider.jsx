/* eslint-disable no-unused-vars */
import React from 'react'
import MainRouter from '../routers/MainRouter'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



function MainProvider() {
  return (
    <><ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark" /><MainRouter /></>
  )
}

export default MainProvider