import React from 'react';
import UsersList from './UsersList';
import DealsList from './DealsList';

const UsersandDealsList = () => {
  return(
      <>
        <div class="accordion accordion-flush container-lg rounded shadow-5 p-0 mb-3" id="accordionFlushExample">
            <UsersList/>
            <DealsList/>            
        </div>
      </>
  );
};

export default UsersandDealsList;
