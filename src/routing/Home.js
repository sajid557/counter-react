import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// https://fortnite-api.theapinetwork.com/upcoming/get
// https://fortnite-api.theapinetwork.com/items/list
const Home = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/upcoming/get"
    ).catch((err) => console.log(err));
    const dataList = await data.json();

    setItems(dataList.data);
    console.log(dataList.data);
  };

  return (
    <div className="home">
      <h1>this is home page </h1>
      <div className="card-container">
        <div className="card-container">
          {items.map((items) => {
            return (
              <Link to={`${items.itemId}`}>
                <div className="card" key={items.itemId}>
                  <div className="cardhead">
                    <h3>{items.item.name}</h3>
                  </div>
                  <div className="card-body">
                    <div className="card-img">
                      <img
                        src={items.item.images.icon}
                        width={150}
                        height={150}
                        alt="example"
                      />
                    </div>
                    <div className="card-text">
                      <p>{items.item.description}</p>
                    </div>
                  </div>
                  <div className="card-footer">
                    <p>stars: {items.item.ratings.avgStars}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      {/* <ul>
        {items.map((items) => {
          return (
            <li key={items.itemId}>
              <Link to={`${items.itemId}`}>
                <h5>{items.item.name}</h5>
                <img
                  src={items.item.images.icon}
                  width={150}
                  height={150}
                  alt="icon"
                />
              </Link>
            </li>
          );
        })}
      </ul> */}
    </div>
  );
};
export default Home;
