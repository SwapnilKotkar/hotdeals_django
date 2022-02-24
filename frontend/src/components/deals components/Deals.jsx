import DealsCard from "./DealsCard";

const Deals = ({deals, view}) =>{

    if(view === "list"){
        return(
            <>
                <div className="container-lg p-4">
                    <div className="row d-flex justify-content-center"> 
                        {deals.map((val, index) => {
                            return (
                                    <DealsCard key={index} index={index} view={view} dealName={val.name} dealImage={val.image} dealPrice={val.price} dealInfo={val.info} dealLink ={val.link} />
                                )
                        })}
                    </div>
                </div>   
            </>
        )
    }else if(view === "grid"){
        return(
            <>            
                <div className="container-lg p-4 px-4">
                    <div className="row row-cols-1 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 g-4"> 
                        {deals.map((val, index) => {
                            return (
                                    <DealsCard key={index} index={index} view={view} dealName={val.name} dealImage={val.image} dealPrice={val.price} dealInfo={val.info} />
                                )
                        })}
                    </div>
                </div>                        
            </>
        );
    }
}

export default Deals;