import React, { useState } from 'react';
import { FaThList } from "react-icons/fa";
import {BsGridFill} from 'react-icons/bs';

const DealsSearchBar = ({filterItem, catItems, viewEvent}) => {

  const [view , setView] = useState("");

  const productView = (x) => {
    setView(x);
    viewEvent(x);
  }

    return (
        <>
            <div className="bg-dark d-flex justify-content-center">
              <div className="container-lg p-0 m-2 row d-flex justify-content-center ">  
                <div className="w-100 col-12 col-sm-10 col d-flex flex-wrap justify-content-between p-0">
                  <div className="col-lg-2 col-6 pt-2 pt-sm-0 d-flex justify-content-start order-2 order-sm-2">
                    <div className="col-5 d-flex justify-content-start align-items-center"><button className='btn btn-outline-primary bg-primary text-light text-capitalize rounded-3 border-1 d-flex justify-content-center align-items-center'>Hot</button></div>
                    <div className="col-5 d-flex  justify-content-start align-items-center"><button className='btn btn-outline-primary bg-primary text-light text-capitalize rounded-3 border-1 d-flex justify-content-center align-items-center'>New</button></div>
                  </div>
                  <div className="dropdown col-lg-1 col-md-2 col-sm-2 col-3 order-2 order-sm-2 d-flex justify-content-center pt-2 pt-sm-0">
                    <button className="btn btn-outline-primary bg-light text-primary rounded-3 border-light border-1 d-flex justify-content-center align-items-center"  type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="text-capitalize" style={{fontSize:"12px"}}>Category</span>
                    </button>
                    <ul className="dropdown-menu mt-2" aria-labelledby="dropdownMenuButton1">
                    {
                      catItems.map((curElem, index) => {
                        return  <li key={index}><button className="dropdown-item" onClick={() => {filterItem(curElem)}}>{curElem}</button></li>     
                      })
                    }
                    </ul>
                  </div>
                  <div className="col-lg-7 col-12 p-0 d-flex justify-content-center align-items-center order-1 order-sm-2">
                    <form className="d-flex w-100">
                      <div className="input-group rounded">
                        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                        <span className="input-group-text border-0 bg-primary" id="search-addon">
                          <i className="fas fa-search" style={{cursor:"pointer", color:"white"}}></i>
                        </span>
                    </div>
                    </form>
                  </div>
                <div className="view-btn col-lg-1 col-6 d-flex justify-content-center align-items-center order-2 order-sm-2 mt-2 mt-sm-0 p-0">
                  <div className="dropdown">
                    <button
                      className="btn btn-outline-primary bg-primary text-light rounded-3 border-1 dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-mdb-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="text-capitalize" style={{fontSize:"14px"}}>{view === "list" ? <FaThList/> : <BsGridFill/>}</span>
                    </button>
                    <ul className="dropdown-menu mt-3" aria-labelledby="dropdownMenuButton">
                      <li><button className="dropdown-item m-0 p-2" style={{cursor:"pointer"}} onClick={() => productView("list")}><FaThList fontSize="18px" color='grey'/></button></li>
                      <li><button className="dropdown-item m-0 p-2" style={{cursor:"pointer"}} onClick={() => productView("grid")}><BsGridFill fontSize="18px" color='grey'/></button></li>
                    </ul>
                  </div>
                  {/* <div className="col-2 d-flex justify-content-center"><FaThList fontSize="22px" color='white' onClick={() => viewEvent("list")}/></div>
                  <div className="col-2 d-flex justify-content-center"><BsGridFill fontSize="22px" color='white' onClick={() => viewEvent("grid")}/></div> */}
                </div>
                </div>
              </div>
          </div> 
        </>
    )
}

export default DealsSearchBar
