import React from 'react';
// import { FaRegTrashAlt } from 'react-icons/fa';

const UsersList = () => {

        const userList = [
            {
                no:1,
                username:"sam",
                email:"sam@gmail.com",
                deals:"2"
            },
            {
                no:2,
                username:"reena",
                email:"reena@gmail.com",
                deals:"4"
            },
            {
                no:3,
                username:"tim",
                email:"tim@gmail.com",
                deals:"1"
            },
            {
                no:4,
                username:"rock",
                email:"rock@gmail.com",
                deals:"6"
            },
            {
                no:5,
                username:"rock",
                email:"rock@gmail.com",
                deals:"6"
            }
        ]

  return (
            <>
                <div className=''>
                    <div className='col-12 d-flex justify-content-center p-3'><div className='col-12'><span className='fs-5 fw-bold text-body'>User List</span></div></div>  
                    <div className='table-responsive'>
                        <table className="table align-middle table-striped table-hover">
                            <thead className='table-dark'>
                                <tr>
                                    <th scope="col">No.</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Email ID</th>
                                    <th scope="col">Deal Submitted</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userList.map((val, index)  => {
                                    return(
                                        <tr key={index}>
                                            <th scope="row">{val.no}</th>
                                            <td>{val.username}</td>
                                            <td>{val.email}</td>
                                            <td>{val.deals}</td>
                                            <td>
                                                <button type="button" className="btn btn-danger btn-sm px-3">
                                                    <i className="fas fa-times"></i>
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

export default UsersList;
