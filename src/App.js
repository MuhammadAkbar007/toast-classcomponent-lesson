import React, {Component} from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const CustomToast=({closeToast})=>{
    return(
        <div>
            Bonus for you !
            <button className={'btn btn-danger'} onClick={closeToast}>Close</button>
        </div>
    )
}

toast.configure()

class App extends Component {
    render() {

        const notify = () => {
            toast('Default ReactToast !', {position: toast.POSITION.TOP_LEFT})
            toast.success('Success ReactToast !', {position: toast.POSITION.TOP_CENTER, autoClose: false})
            toast.info('Info ReactToast !', {position: toast.POSITION.TOP_RIGHT, autoClose: 8000})
            toast.warn('Warn ReactToast !', {position: toast.POSITION.BOTTOM_LEFT, autoClose: 4000})
            toast.error('Error ReactToast !', {position: toast.POSITION.BOTTOM_CENTER, autoClose: 7000})
            toast(<CustomToast/>, {position: toast.POSITION.BOTTOM_RIGHT, autoClose: 5000})
        }

        return (
            <div>
                <div className="container py-5 mt-5">
                    <div className="row mt-5 py-5">
                        <div className="col-md-12 text-center mt-5 py-5">
                            <button className={'btn btn-dark mt-5'} onClick={notify}>Notify!</button>
                            <ToastContainer/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;