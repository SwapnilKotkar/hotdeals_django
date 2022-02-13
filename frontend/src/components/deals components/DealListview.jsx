import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsArrowUpSquareFill, BsArrowDownSquareFill } from "react-icons/bs";


const DealListview = (props) => {
  return(
   <>
    <div className="list-deal-card card mb-3 p-0" style={{height:"200px"}}>
                <div className="row h-100">
                    <div className="col-5 col-sm-3 h-100">
                        <div className="h-100 d-flex justify-content-center align-items-center">
                            <img
                            src={props.dealImage}
                            style={{maxHeight:"70%", maxWidth:"auto"}}
                            alt="Trendy Pants and Shoes"
                            className="img-fluid rounded"
                            />
                        </div>
                    </div>
                    <div className="col-7 col-sm-9 h-100 p-2">
                        <div className="row h-100">
                            <div className="col-12 h-25 d-flex justify-content-end align-items-center px-sm-4">
                                {/* <div className="col-5 col-sm-8 d-flex justify-content-start align-items-center">{props.dealName}</div> */}
                                <div className="col-12 col-sm-12 d-flex justify-content-end align-items-end">
                                    <div className="d-flex justify-content-center align-items-center rounded-3 degree" style={{border:"2px solid lightgrey"}}>
                                        <a style={{cursor:"pointer"}} onClick={() => { props.handleDegree("minus") }}><BsArrowDownSquareFill size = "30px" color="red" /></a>
                                        <div className="px-3">{props.degree}</div>
                                        <a style={{cursor:"pointer"}} onClick={() => {props.handleDegree("add")}}><BsArrowUpSquareFill size = "30px" color="green" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 h-40 d-flex justify-content-start align-items-center px-3" style={{overflow:"hidden", boxSizing:"border-box", width:"90%"}}>
                                <span className="deal-name" style={{whiteSpace:"nowrap", textOverflow:"hidden", overflow:"hidden"}}>{props.dealName}</span>
                            </div>
                            <div className="col-12 h-35 d-flex justify-content-between align-items-center">
                                    <div className="col-4 d-flex justify-content-start align-items-center fw-bolder fs-6" style={{color:"#4E9F3D"}}>{props.dealPrice}</div>
                                    <div className="col-8 d-flex justify-content-end align-items-center px-3">
                                        <NavLink to="/dealdetails">
                                        <button className="btn-success border-1 deal-btn">
                                            <span className="text-capitalize" style={{fontWeight: "500", fontSize:"13px"}}>Get Deal</span>
                                        </button>
                                        </NavLink>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  </>
  );
};

export default DealListview;
