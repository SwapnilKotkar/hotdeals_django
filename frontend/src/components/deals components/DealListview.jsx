import React from 'react';
import { NavLink } from 'react-router-dom';
import StarRating from './StarRating';

const DealListview = (props) => {
  return(
   <>
      <div className="list-card card mb-3 list-card">
        <div className="row h-100">
          <div className="col-3 h-100 p-0 d-flex justify-content-center align-items-center">
            <div style={{maxHeight:"100%", maxWidth:"50%"}}>
              <NavLink to="/dealdetails">
                <img src={props.dealImage} className="card-img" alt="dealpictures"/>
              </NavLink>
            </div>
          </div>
          <div className="col-9 p-0 list-card-body card-body d-flex justify-content-between flex-column justify-content-evenly">
              <div style={{padding:"10px 10px 0 0"}}>
                <div className="col-12 mb-2">
                    <div className="col-sm-3 col-5 d-flex border border-2 rounded-2">
                        <div className="degree-icons col-3 d-flex justify-content-center" style={{color: "red", cursor:"pointer", fontWeight:"bold"}}>-</div>
                        <div className="degree-icons col-6 d-flex justify-content-center">1</div>
                        <div className="degree-icons col-3 d-flex justify-content-center" style={{color: "green", cursor:"pointer", fontWeight:"bold"}}>+</div>
                    </div>
                </div>          
                <NavLink to="/dealdetails"><h5 className="list-card-title card-title m-1 text-uppercase text-body">{props.dealName}</h5></NavLink>
                <NavLink to="/dealdetails"><p className="list-card-text card-text text-body m-1">{props.dealInfo}</p></NavLink>
              </div>
              <div className="w-100 row justify-content-end align-items-center mb-2">
              <div className='col-6'>
                <div className='col-12 d-flex justify-content-start align-items-center'>
                <span className="list-rating-size"><StarRating/></span>
                </div>
              </div>
                <div className="col-6 d-flex justify-content-end p-0">
                  <div className='col-12 col-sm-8'>
                  <NavLink to="/dealdetails">
                    <button className="w-100 btn btn-outline-success border-1 border-success rounded-3 text-success" style={{backgroundColor:"#CFF6CF"}}><span className='list-deal-button'>{props.dealPrice}</span></button>
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
