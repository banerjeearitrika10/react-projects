import ResturantCard from "./ResturantCard";
import ResturantCardSlider from "./ResturantCardSlider";
import data from "../../assets/jsons/mockData";
import { useEffect, useState } from "react"; // named import
import Shimmer from "./Shimmer"; //default import

const Body = () => {
  //local State variable
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [listOfRestaurantContent, setListOfRestaurantContent] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [subHeader1, setSubHeader1] = useState("");
  const [subHeader2, setSubHeader2] = useState("");


  //whenever State variable update ,React triggers a reconiliation cycle(re-renders the component ,
  //check the diff between previous virtual DOM and current Virtual DOM ,
  // and update only the changed element in Real DOM)

  //useEffects - first argument is a callback and 2nd is a dependency array
  //if no dependency array => useEffects is called in every render
  //if dependency array is empty = [] => useEffect is callled on initial render(just Once)
  //if dependency array has some state variable , it get called when the state of the variable is changed
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setSubHeader1(json?.data?.cards[1]?.card?.card?.header?.title);
    setSubHeader2(json?.data?.cards[2]?.card?.card?.title)
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfRestaurantContent( json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setSearchData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  inputEventHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setSearchText(lowerCase);
    console.log(lowerCase);
    const searchData = listOfRestaurantContent.filter((el) => {
      if (lowerCase === "") {
        return el;
      } else {
        return el.info.name.toLowerCase().includes(lowerCase);
      }
    });
    setSearchData(searchData);
  };
  onClickFilter = () => {
    const filteredData = searchData.filter((res) => res.info.avgRating > 4.5);
    setSearchData(filteredData);
  };

  //Conditional Rendering

  return searchData.length == 0 ? (
    <div>
      <div className="d-flex justify-content-between mb-5">
        <div className="search">
          <input
            className="inputSearch form-control"
            type="search"
            placeholder="Search...."
            value={searchText}
            onChange={inputEventHandler}
          />
        </div>
      </div>
      <Shimmer />;
    </div>
  ) : (
    <div>
      <div className="d-flex justify-content-between mb-3">
        <div className="search">
          <input
            className="inputSearch form-control"
            type="search"
            placeholder="Search...."
            value={searchText}
            onChange={inputEventHandler}
          />
        </div>
        
      </div>
      
      {searchText ? null :
      <><span className="subHeader pb-2">{subHeader1}</span>
      <ResturantCardSlider data={listOfRestaurant} />
      <hr /></>
      }
      
      
      <div className="d-flex  justify-content-between mt-5 mb-3">
      <span className="subHeader">{subHeader2}</span>
      <button className="filter-btn btn" onClick={onClickFilter}>
          Top Rated Restaurants
        </button>
      </div>
     
      <ResturantCard data={searchData} />
    </div>
  );
};

export default Body;
