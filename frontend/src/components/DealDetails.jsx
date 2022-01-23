import { useState } from 'react';
import StarRating from './StarRating';
import Navbar from './Navbar';
import Footer from "./Footer";
import DealsData from "./DealsData";
import ReviewData from './ReviewData';

const DealDetails = () =>{

    const [reviews, setReviews] =useState(ReviewData);


    return(
        <>
        <Navbar/>
        
        <div className='container-lg p-3'>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-12 d-flex justify-content-center align-items-center p-2 border-bottom border-grey border-2">
                        <img src={DealsData[0].image} className="img-fluid rounded-5" alt="..." style={{maxHeight:"70%", maxWidth:"70%"}}/>
                    </div>
                    <div className="col-12">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div className="container mb-3">
                        <div className="row">
                            <div className="col-6 d-flex justify-content-start align-items-center fw-bolder fs-5" style={{color:"#4E9F3D"}}>price</div>
                                <div className="col-6 d-flex justify-content-end align-items-center">
                                    <a href="#"><span className="text-capitalize fs-6" style={{fontWeight: "500"}}>Get Deal</span> <hr className="m-0 p-0 h-80"/></a>
                                </div>
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
                            <StarRating className="mb-2" size = "30" ratingValue = {val.cust_rating}/>
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