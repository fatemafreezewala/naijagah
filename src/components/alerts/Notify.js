import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

function NotifyContainer() {
  return (
    <ToastContainer></ToastContainer>
  )
}
const notifyFunc = ({message}) => toast.info(message,{});

export default {notifyFunc,NotifyContainer}
