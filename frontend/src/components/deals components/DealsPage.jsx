import React, { useState } from 'react'
import DealsSearchBar from './DealsSearchBar';
import Deals from './Deals';
import DealsData from './DealsData';

const categories = ["all", ...new Set(DealsData.map((curElem) => curElem.category ))];

const DealsPage = () => {

    const [deals, setDeals] =useState(DealsData);

    const [catItems, setCatItems] = useState(categories);

    const [view, setView] = useState("list");

    const filterItem = (itemCategory) =>{

      if(itemCategory === "all"){
        setDeals(DealsData);
        return;
      }

      const updatedCategory = DealsData.filter((curElem) => {
        return curElem.category === itemCategory;
      });
      setDeals(updatedCategory);
    }

    const viewEvent = (view) => {
      setView(view);
      return;
    }


    return (
        <>
            <DealsSearchBar filterItem = {filterItem} catItems={catItems} viewEvent={viewEvent}/>
            <Deals deals={deals} view={view} />
        </>
    )
}

export default DealsPage