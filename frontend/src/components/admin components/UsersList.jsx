import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

const UsersList = () => {
  return (
      <>
          <div class="accordion-item p-2">
                <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                <span className="fs-5">Users list</span>
                </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-mdb-parent="#accordionFlushExample">
                    <div class="accordion-body p-0">
                        <div className='container-lg col-12 col-sm-4 p-2'>
                            <form className="d-flex">
                                <input className="form-control me-2 rounded-3" type="search" placeholder="Search a user" aria-label="Search" />
                                <button className="btn btn-primary rounded-3" type="submit"><span className="text-capitalize" style={{fontSize:"14px"}}>Search</span></button>
                            </form>
                        </div>
                        <table class="table table-hover table-striped align-middle text-center mb-0">
                            <thead className="table-dark">
                                <tr>
                                    <th className="col-1 col-md-2" scope="col">No.</th>
                                    <th className="col-7 col-md-7" scope="col">Customers names</th>
                                    <th className="col-4 col-md-3" scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>
                                <button className="btn btn-danger mx-1"><FaRegTrashAlt size={15}/></button>
                                </td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>
                                <button className="btn btn-danger mx-1"><FaRegTrashAlt size={15}/></button>
                                </td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>
                                <button className="btn btn-danger mx-1"><FaRegTrashAlt size={15}/></button>
                                </td>

                                
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
      </>
  );
};

export default UsersList;
