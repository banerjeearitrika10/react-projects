import { useEffect, useState } from "react";
import "./RestaurantMenu.css";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const {resId} = useParams();
  console.log(resId);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(MENU_API + resId);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const json = await response.json();
      setResMenu(json);
    } catch (error) {
      console.error("Failed to fetch menu:", error);
    }
  };

  if (!resMenu) return <Shimmer />;

  // Safely extract the array for mapping
  const items =
    resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards || resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards || [];
  const resDetails = resMenu?.data?.cards[2]?.card?.card?.info;

  return (
    <div className="menu">
      <div className="menuCardContent row">
        <span className="subHeader pb-4">{resDetails.name}</span>
        <div className="detailCardOuter mb-5">
          <div className="detailCardInner p-3">
            <p>
              <b>
                ⭐️ {resDetails?.avgRating} - {resDetails?.totalRatingsString} .{" "}
                {resDetails?.costForTwoMessage}
              </b>
            </p>
            <p className="mb-1">
              <b> Outlet: </b>
              {resDetails?.areaName}{" "}
            </p>
            <p style={{ fontSize: "14px" }}>
              {" "}
              <b>{resDetails?.sla?.slaString}</b>{" "}
            </p>
          </div>
        </div>
        {/* <span className="subHeader">Menu Details</span> */}
        {items.map((cardData, index) => (
          <div
            className="menuCard col-12"
            key={cardData?.card?.info?.id || index}
          >
            <div className="row">
              <div className="col-10">
                <p className="menuCardTitle">{cardData?.card?.info?.name}</p>
                <div className="gwiDoh">
                    <div>{cardData?.card?.info?.price / 100 || cardData?.card?.info?.defaultPrice / 100}</div>
                </div>
                <span
                  style={{
                    color: "rgb(17, 102, 73)",
                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                >
                {cardData?.card?.info?.ratings?.aggregatedRating?.rating ? (
                    <>
                        {cardData.card.info.ratings.aggregatedRating.rating}
                        {" ("}
                        {cardData.card.info.ratings.aggregatedRating.ratingCountV2}
                        {")"}
                    </>
                ) : null}
                </span>

                <p className="pt-1">{cardData?.card?.info?.description}</p>
              </div>
              <div className="col-2 align-content-center">
                <img
                  className="menuCardImage"
                  height="144"
                  width="160"
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                    cardData?.card?.info?.imageId
                  }
                  alt={cardData?.card?.info?.name}
                />
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
