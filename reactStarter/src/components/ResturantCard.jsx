import { Link } from "react-router-dom";

const ResturantCard = (props) => {
    console.log(props.data);
    const data = props.data || [];
    
    return (
        <div className="cardContainer d-flex">
            {
                data.map((cardData,index) => (
                <Link key={cardData.info.id || index} to={"/restaurant/" + cardData.info.id} style={{textDecoration:"none"}}>
                <div className="card card-row" style={{cursor:"pointer"}}>
                <div width="100%" height="100%" className="sc-dtInlm eNZkiz">
                        <img className="sc-bXCLTC jRHowI" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cardData.info.cloudinaryImageId} alt="" width="273" height="182"/>
                        <div className="sc-dtBdUo gzvYBM sc-kOPcWz fFPUzA">
                            <div className="sc-aXZVg jJrxcx sc-kOHTFB jKfDUb"></div>
                            <div className="sc-aXZVg kUePhA sc-kOHTFB jKfDUb">{cardData?.info?.aggregatedDiscountInfoV3?.header} {cardData?.info?.aggregatedDiscountInfoV3?.subHeader}</div>
                            <div className="sc-aXZVg frdsPz sc-kOHTFB jKfDUb"></div>
                        </div>
                </div>
                    
                    <div className="card-body pl-0 pr-0">
                        <h5 className="card-title">{cardData.info.name}</h5>
                        <p className="card-text mb-1"><b>⭐️ {cardData.info.avgRating} <strong>.</strong> {cardData.info.sla.slaString}</b></p>
                        <p className="card-text mb-0">{cardData.info.cuisines.join(",")}</p>
                        <p className="card-text">{cardData.info.areaName}</p>
                    </div>
                </div>
                </Link>
                
                ))
            }
        </div>
        
    )
};
export default ResturantCard;