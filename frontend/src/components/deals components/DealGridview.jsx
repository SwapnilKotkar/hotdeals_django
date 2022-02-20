import React from 'react';
import { BsArrowUpSquareFill, BsArrowDownSquareFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';


const DealGridview = (props) => {
  return (
    <>
                <div className="col">                
                    <div className="card h-100 w-100">
                        <div className="d-flex align-items-center justify-content-center" style={{height:"60%"}}>
                            <img
                                src={props.dealImage}
                                style={{height:"80%", width:"80%"}}
                                className="card-img-top"
                                alt="Palm Springs Road"
                            />
                        </div>
                        <div className="card-body p-3" style={{boxSizing:"border-box"}}>
                  <div className="col-12 mb-2">
                      <div className="col-6 d-flex border border-1 rounded-2">
                          <div className="degree-icons col-3 d-flex justify-content-center" style={{color: "red", cursor:"pointer", fontWeight:"bold"}}>-</div>
                          <div className="degree-icons col-6 d-flex justify-content-center">1</div>
                          <div className="degree-icons col-3 d-flex justify-content-center" style={{color: "green", cursor:"pointer", fontWeight:"bold"}}>+</div>
                      </div>
                  </div>
                  <h5 className="grid-card-title card-title text-body">{props.dealName}</h5>
                  <p className="grid-card-text card-text">{props.dealInfo}</p>
                </div>
                <div className="card-footer col-12 d-flex justify-content-end p-2">
                    <div className="col-12">
                  <button className="w-100 btn btn-success fs-6">{props.dealPrice}</button>
                </div>
                </div>
                        
                    </div>
                </div>

                {/* <div className="col">
              <div className="grid-card card">
              <div style={{height:"50%"}}>
                <img src={props.dealImage} className="card-img-top" alt="Skyscrapers" style={{maxWidth:"100%", maxHeight:"100%"}}/>
                </div>
                <div className="card-body p-3" style={{boxSizing:"border-box"}}>
                  <div className="col-12 mb-2">
                      <div className="col-6 d-flex border border-1 rounded-2">
                          <div className="degree-icons col-3 d-flex justify-content-center" style={{color: "red", cursor:"pointer", fontWeight:"bold"}}>-</div>
                          <div className="degree-icons col-6 d-flex justify-content-center">1</div>
                          <div className="degree-icons col-3 d-flex justify-content-center" style={{color: "green", cursor:"pointer", fontWeight:"bold"}}>+</div>
                      </div>
                  </div>
                  <h5 className="gird-card-title card-title text-body">Card title supporting text below as a natural lead-in to additional content. supporting text below as a natural lead-in to additional content.</h5>
                  <p className="gird-card-text card-text">
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.This card has supporting text below as a natural lead-in to additional content.This card has supporting text below as a natural lead-in to additional content.
                  </p>
                </div>
                <div className="card-footer col-12 d-flex justify-content-end p-2">
                    <div className="col-4">
                  <button className="w-100 btn btn-success">499$</button>
                </div>
                </div>
              </div>
            </div> */}

            </>
  );
};

export default DealGridview;
