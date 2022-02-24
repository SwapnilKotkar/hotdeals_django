import React, { useState } from 'react';
import DealsCard from '../deals components/DealsCard';
import UserDealsData from './UserDealsData';

const UserVotedDeals = () => {
  const [deals, setDeals] = useState(UserDealsData);

    return (
        <>
            <div className="container">
              <div className='col-12 d-flex justify-content-center'><div className='col-11 col-sm-9'><span className='fs-5 fw-bold text-body'>Voted Deals</span></div></div>
              <div className="row d-flex justify-content-center"> 
                  {deals.map((val, index) => {
                      return (
                              <DealsCard key={index} index={index} view={"list"} dealName={val.name} dealImage={val.image} dealPrice={val.price} dealInfo={val.info} dealLink ={val.link} />
                          )
                  })}
              </div>
            </div>   
        </>
    )
}

export default UserVotedDeals