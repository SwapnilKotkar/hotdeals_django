import React from 'react';
import {MdDelete} from 'react-icons/md';
import {MdUpload} from 'react-icons/md';

const DealsList = () => {
    const userList = [
        {
            no:1,
            dealname:"Samsung Mobile",
            uploadedby:"sam@gmail.com",
            degree:"200"
        },
        {
            no:2,
            dealname:"ASUS PC",
            uploadedby:"reena@gmail.com",
            degree:"169"
        },
        {
            no:3,
            dealname:"Cricket Set",
            uploadedby:"tim@gmail.com",
            degree:"488"
        },
        {
            no:4,
            dealname:"Cosmetics",
            uploadedby:"rock@gmail.com",
            degree:"765"
        }
    ]

return (
  <>
            <div className=''>
                <div className='col-12 d-flex justify-content-center p-3'><div className='col-12'><span className='fs-5 fw-bold text-body'>All Deals</span></div></div>  
                <div className='table-responsive'>
                    <table className="table align-middle table-striped table-hover">
                        <thead className='table-dark'>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">Dealname</th>
                                <th scope="col">Uploaded by</th>
                                <th scope="col">Degree</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userList.map((val, index)  => {
                                return(
                                    <tr key={index}>
                                        <th scope="row">{val.no}</th>
                                        <td>{val.dealname}</td>
                                        <td>{val.uploadedby}</td>
                                        <td><span className='text-success fw-bold'>{val.degree}</span></td>
                                        <td>
                                            <button type="button" className="btn btn-danger btn-sm px-3 m-1">
                                                <MdDelete size="20px"/>
                                            </button>
                                            <button type="button" className="btn btn-success btn-sm px-3 m-1">
                                                <MdUpload size="20px" color='white'/>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
      </>
  );
};

export default DealsList;
