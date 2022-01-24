import DealsCard from "./DealsCard";
// import DealsData from "./DealsData";

//row-cols-1 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 
const Deals = ({deals}) =>{
    return(
        <>            
            <div className="container-lg p-4">
                <div className="row g-2"> 
                    {deals.map((val, index) => {
                        return (
                                    <DealsCard key={index} index={index} dealName={val.name} dealImage={val.image} dealPrice={val.price} dealInfo={val.info} dealLink ={val.link} />
                               )
                    })}
                </div>
            </div>                
        </>
    );
}

export default Deals;