import { NavLink } from "react-router-dom";
import DealListview from "./DealListview";
import DealGridview from "./DealGridview";


const DealsCard = (props) =>{
const {index, dealName, dealImage, dealPrice, dealInfo, dealLink} = props;
    if(props.view === "list"){
    return( 
         <DealListview index={index} dealName={dealName} dealImage={dealImage} dealPrice={dealPrice} dealInfo={dealInfo} dealLink={dealLink} handleDegree={props.handleDegree} degree={props.degree}/>
    );
    }else if(props.view === "grid"){
        return(
            <DealGridview index={index} dealName={dealName} dealImage={dealImage} dealPrice={dealPrice} dealInfo={dealInfo} dealLink={dealLink} handleDegree={props.handleDegree} degree={props.degree}/>
        );
    }
}

export default DealsCard;