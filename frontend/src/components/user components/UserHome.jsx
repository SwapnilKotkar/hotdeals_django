import Navbar from '../Navbar';
import Footer from "../Footer";
import UserEditInfo from './UserEditInfo';
import UserSubmittedDeals from './UserSubmittedDeals';
import UserVotedDeals from './UserVotedDeals';
import { useState } from 'react';

const UserHome = () => {

    const [value, setValue] = useState({
        editInfo:true,
        submitedDeals:false,
        votedDeals:false
    })

    const handleChange = (e) => {
        if(e === "editInfo"){
            setValue({
                editInfo:true,
                submitedDeals:false,
                votedDeals:false
            })
        }
        else if(e === "submitedDeals"){
            setValue({
                editInfo:false,
                submitedDeals:true,
                votedDeals:false
            })
        }
        else if(e === "votedDeals"){
            setValue({
                editInfo:false,
                submitedDeals:false,
                votedDeals:true
            })
        }
    }

    return(
        <>
            <Navbar />
            <div className='container-lg my-4 p-0'>
                <div className='bg-white shadow shadow-3 rounded-3 p-3 my-3 '>
                    <div>
                        <span className='fs-3 fw-bold'>Welcome <span className='text-success'>User</span></span>
                    </div>
                </div>
                <div className='col-12 d-flex flex-column flex-lg-row justify-content-between rounded-3 p-0'>
                    <div className='col-12 col-lg-3 col-md-12 col-sm-12'>
                        <div className='col-12 col-md-12 col-lg-11 bg-white h-100 shadow shadow-3'>
                        <div className="col-12 d-flex flex-row flex-lg-column flex-md-row flex-sm-row rounded-0">
                            <div className='col-4 col-lg-12 col-md-4 col-sm-4 d-flex justify-content-center align-items-center text-center border-bottom p-3 usermenu' onClick={()=> handleChange("editInfo")} style={{cursor:"pointer"}}>Edit Info</div>
                            <div className='col-4 col-lg-12 col-md-4 col-sm-4 d-flex justify-content-center align-items-center text-center border-bottom p-3 usermenu' onClick={()=> handleChange("submitedDeals")} style={{cursor:"pointer"}}>Submitted deals</div>
                            <div className='col-4 col-lg-12 col-md-4 col-sm-4 d-flex justify-content-center align-items-center text-center border-bottom p-3 usermenu' onClick={()=> handleChange("votedDeals")} style={{cursor:"pointer"}}>Voted deals</div>
                        </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-9 col-md-12 col-sm-12 d-flex flex-column justify-content-center bg-white shadow shadow-3 py-4 px-3'>
                        <div style={{display: value.editInfo ? "block": "none"}}>
                            <UserEditInfo/>
                        </div>
                        <div style={{display: value.submitedDeals ? "block": "none"}}>
                            <UserSubmittedDeals/>
                        </div>
                        <div style={{display: value.votedDeals ? "block": "none"}}>
                            <UserVotedDeals/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );

}

export default UserHome;