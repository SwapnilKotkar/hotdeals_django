import DealsCard from "./DealsCard";
// import DealsData from "./DealsData";

//row-cols-1 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 
const Deals = ({deals,handleDegree, degree, view}) =>{

    if(view === "list"){
        return(
            <>
                 <div className="container p-4">
                <div className="row  d-flex justify-content-center"> 
                    {deals.map((val, index) => {
                        return (
                                    <DealsCard key={index} index={index} view={view} dealName={val.name} dealImage={val.image} dealPrice={val.price} dealInfo={val.info} dealLink ={val.link} handleDegree={handleDegree} degree={degree} />
                               )
                    })}
                </div>
            </div>   
            </>
        )
    }else if(view === "grid"){
        return(
            <>            
                <div className="container-lg p-4 px-0">
                    <div className="row row-cols-1 row-cols-md-5 g-4"> 
                        {deals.map((val, index) => {
                            return (
                                <DealsCard key={index} index={index} view={view} dealName={val.name} dealImage={val.image} dealPrice={val.price} dealInfo={val.info} dealLink ={val.link} handleDegree={handleDegree} degree={degree} />
                                    )
                        })}
                    </div>
                </div>                        
            </>
        );
    }
}

export default Deals;