import React from 'react';
import { BsArrowUpSquareFill, BsArrowDownSquareFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';


const DealGridview = (props) => {
  return (
    <>
                <div className="col">                
                    <div className="card h-100">
                        <img
                            src={props.dealImage}
                            className="card-img-top"
                            alt="Palm Springs Road"
                        />
                        <div className="card-body p-1 p-sm-3">
                        <div className="col-12 h-25 d-flex justify-content-end align-items-center">
                                {/* <div className="col-5 col-sm-8 d-flex justify-content-start align-items-center">{props.dealName}</div> */}
                                <div className="col-12 col-sm-12 d-flex justify-content-end align-items-end p-2 px-0">
                                    <div className="d-flex justify-content-center align-items-center rounded-3 degree" style={{border:"2px solid lightgrey"}}>
                                        <a style={{cursor:"pointer"}} onClick={() => { props.handleDegree("minus") }}><BsArrowDownSquareFill size = "30px" color="red" /></a>
                                        <div className="px-3">{props.degree}</div>
                                        <a style={{cursor:"pointer"}} onClick={() => {props.handleDegree("add")}}><BsArrowUpSquareFill size = "30px" color="green" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 h-50 d-flex justify-content-start align-items-start p-2" style={{overflow:"hidden", boxSizing:"border-box", width:"100%"}}><span className="deal-name">{props.dealName}</span></div>
                        </div>
                        <div className="container mb-3">
                            <div className="row">
                                <div className="col-6 d-flex justify-content-start align-items-center fw-bolder fs-5" style={{color:"#4E9F3D"}}>{props.dealPrice}</div>
                                <div className="col-6 d-flex justify-content-end align-items-center">
                                <NavLink to="/dealdetails">
                                        <span className="text-capitalize fs-6" style={{fontWeight: "500"}}>Get Deal</span> <hr className="m-0 p-0 h-80"/>
                                </NavLink>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
  );
};

export default DealGridview;
