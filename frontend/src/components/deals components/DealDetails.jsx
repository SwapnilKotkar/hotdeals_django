import { useState } from 'react';
import StarRating from './StarRating';
import Navbar from '../Navbar';
import Footer from "../Footer";
import DealsData from "./DealsData";
import ReviewData from './UserReviewData';
import { NavLink } from 'react-router-dom';

const DealDetails = () =>{

    let link = "https://www.amazon.in/Fire-Boltt-Display-Smartwatch-Tracking-Resistance/dp/B09PRGXJJF/ref=sr_1_1_sspa?crid=2EGCC99O9UFGR&keywords=Fire-Boltt+Ninja+2+Max+1.5%2C+Full+Touch+Display+Smartwatch+with+SpO2&qid=1644770004&sprefix=fire-boltt+ninja+2+max+1.5%2C+full+touch+display+smartwatch+with+spo2%2Caps%2C165&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExV1ZCM0pQMEMxMzdSJmVuY3J5cHRlZElkPUEwMTU3NDU0MjVBTEhSR0VUVzA0WSZlbmNyeXB0ZWRBZElkPUEwODg1NDI1MlNJUUdOS01COFpKWSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=";

    const [reviews, setReviews] =useState(ReviewData);


    return(
        <>
        <Navbar/>
        
        <div className='container-lg p-3'>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-12 col-sm-5 d-flex justify-content-center align-items-center">
                        <img src={DealsData[5].image} className="img-fluid rounded-5" alt="..." style={{maxHeight:"50%", maxWidth:"50%"}}/>
                    </div>
                    <div className="col-12 col-sm-7">
                        <div className="card-body d-flex flex-column p-4">
                            <h5 className="card-title text-body">{DealsData[5].name}</h5>
                            <p className="card-text text-body">{DealsData[5].info}</p>
                            <div className="pb-2"><StarRating className="mb-2" size = "40"/></div>
                            <div className="container mb-3">
                            <div className='col-12'>
                                <NavLink to="/dealdetails">
                                        <button className="col-12 btn btn-success deal-button"><span>{DealsData[5].price}</span></button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>       
        <div className="bg-white rounded shadow-sm p-4 mb-4">
            <h5 className="mb-4">Customer Reviews</h5>
            <div className='container'>
                {reviews.map((val, index) => {
                    return (
                        <div className='mb-2 p-2'>
                            <h4>{val.cust_name}</h4>
                            <h6>{val.date}</h6>
                            <StarRating className="mb-2" size = "30" key = {index} ratingValue = {val.cust_rating}/>
                            {/* <h5>{val.cust_rating}</h5> */}
                            <p>{val.cust_review}</p>
                        </div>
                    )
                })}                   
            </div>
        </div>
        <div className="bg-white rounded shadow-sm p-4 mb-3 rating-review-select-page">
            <h5 className="mb-4">Give product rating</h5>
            <form method='POST' className='m-2'>
                <div className="form-group mb-2">
                    <StarRating className="mb-2" size = "40" ratingValue = "" />
                </div>
                <div className="form-group mb-2">
                    <label>Your Comment</label>
                    <textarea className="form-control"></textarea>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-md" type="submit"> Submit</button>
                </div>
            </form>
        </div>
    </div>
    <Footer/>
    </>
);
}

export default DealDetails;