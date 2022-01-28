import React from "react";
import './ToastrMessage.css';
import { ToastContainer, toast } from 'react-toastify';
class ToastrMessage extends React.Component {

    static notify = (message, pos, messageType) => {
        switch (messageType) {
            case 'success':
                toast.success(message, {
                    position: pos,
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                });
                break;
            case 'error':
                toast.error(message, {
                    position: pos,
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                });
                break;
            case 'warning':
                toast.warn(message, {
                    position: pos,
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                });
                break;

            default:
                toast(message, {
                    position: pos,
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                });
                break;
        }
    }





    render() {
        return (
            <div>
                <ToastContainer className={"toastWidth"}/>
            </div>
        )
    }
}

export default ToastrMessage;