import React, { useState, useEffect } from "react";
// https://fortnite-api.theapinetwork.com/upcoming/get
// https://fortnite-api.theapinetwork.com/items/list
const ItemDetail = ({ match }) => {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({
    images: {},
    ratings: {},
  });
  const fetchItem = async () => {
    const data = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    ).catch((err) => console.log(err));
    const dataList = await data.json();
    setItem(dataList.data.item);
    console.log(item);
  };

  return (
    <div className="itemdetail">
      <h1>{item.name}</h1>
      <img src={item.images.information} alt="hero" />
      <h4>{item.description}</h4>
      <p>
        <span>
          <strong>ratings:</strong> {item.ratings.avgStars}
        </span>
        ,
        <span>
          <b> series:</b> {item.series}
        </span>
      </p>
    </div>
  );
};
export default ItemDetail;
