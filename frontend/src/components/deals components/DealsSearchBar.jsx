import React from 'react'

const DealsSearchBar = ({filterItem, catItems, viewEvent}) => {

    return (
        <>
            <div className="bg-light d-flex justify-content-center">
              <div className="container-lg p-0 m-2 row d-flex justify-content-center  px-3">  
                <div className="col-12 col-sm-10 col d-flex justify-content-center p-0">
                  <div className="dropdown col-lg-1 col-md-2 col-sm-2 col-3 d-flex justify-content-center">
                    <button className="btn btn-outline-primary p-2 m-0 rounded-3 border-1"  type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="text-capitalize" style={{fontSize:"13px"}}>Category</span>
                    </button>
                    <ul className="dropdown-menu mt-2" aria-labelledby="dropdownMenuButton1">
                    {
                      catItems.map((curElem, index) => {
                        return  <li key={index}><button className="dropdown-item" onClick={() => {filterItem(curElem)}}>{curElem}</button></li>     
                      })
                    }
                    </ul>
                  </div>
                  <div className="col-lg-6 col-9 p-0 ">
                    <form className="d-flex">
                      <input className="form-control me-2 rounded-3" type="search" placeholder="Search" aria-label="Search" />
                      <button className="btn btn-primary rounded-3" type="submit"><span className="text-capitalize" style={{fontSize:"14px"}}>Search</span></button>
                    </form>
                  </div>
                </div>
                <div className="col-lg-2 d-flex justify-content-end mt-2 mt-sm-0 p-0">
                <div className="dropdown">
                  <button
                    className="btn btn-outline-primary rounded-3 border-1 dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="text-capitalize" style={{fontSize:"14px"}}>view</span>
                  </button>
                  <ul className="dropdown-menu mt-3" aria-labelledby="dropdownMenuButton">
                    <li><button className="dropdown-item m-0" style={{cursor:"pointer"}} onClick={() => viewEvent("list")}>List view</button></li>
                    <li><button className="dropdown-item m-0" style={{cursor:"pointer"}} onClick={() => viewEvent("grid")}>Grid view</button></li>
                  </ul>
                </div>
                </div>
              </div>
          </div> 
        </>
    )
}

export default DealsSearchBar
