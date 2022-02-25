import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import DealsCard from '../deals components/DealsCard';
import UserDealsData from './UserDealsData';

const UserSubmittedDeals = () => {

    const [deals, setDeals] = useState(UserDealsData);

    return (
        <>
            <div className="container-fluid col-12 p-0">
                <div className='col-12 d-flex justify-content-center p-3'><div className='col-12'><span className='fs-5 fw-bold text-body'>Submitted Deals</span></div></div>  
                <div className="container-fluid row d-flex justify-content-center py-3 m-0"> 
                    {deals.map((val, index) => {
                        return (
                            <div className="container-fluid d-flex justify-content-center p-0">
                                <div className="w-100 card mb-3 list-card border shadow-none" key={index}>
                                    <div className="row h-100">
                                        <div className="col-4 h-100 p-0 d-flex justify-content-center align-items-center">
                                            <div style={{maxHeight:"100%", maxWidth:"50%"}}>
                                            <NavLink to="/dealdetails">
                                                <img src={val.image} className="card-img" alt="dealpictures"/>
                                            </NavLink>
                                            </div>
                                        </div>
                                        <div className=" col-8 p-0 list-card-body card-body d-flex justify-content-between flex-column justify-content-evenly">
                                            <div style={{padding:"10px 10px 0 0"}}>    
                                                <NavLink to="/dealdetails"><h5 className="list-card-title card-title m-1 text-uppercase text-body">{val.name}</h5></NavLink>
                                                <NavLink to="/dealdetails"><p className="list-card-text card-text text-body m-1">{val.info}</p></NavLink>
                                            </div>
                                            <div className="w-100 row justify-content-end align-items-center mb-2">
                                                <div className="col-6 d-flex justify-content-end px-2">
                                                    <div className='col-12 col-sm-8'>
                                                        <button className="w-100 btn btn-outline-danger border-1 border-danger rounded-3 text-danger" style={{backgroundColor:"#ffcccb"}}><span className='list-deal-button'>delete</span></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                    })}
                </div>
            </div>   
        </>
    )
}

export default UserSubmittedDeals;