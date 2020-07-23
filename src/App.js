import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://www.maangchi.com/wp-content/uploads/2015/07/tongbaechu-kimchi.jpg",
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "http://pds.joins.com/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg",
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "https://img.huffingtonpost.com/asset/5727ef362200003600255394.jpeg?cache=XowoERt6W4&ops=1910_1000",
  },
  {
    id: 4,
    name: "Doncasu",
    image: "p-content/uploads/2017/07/donkasu-036.jpg?x61413",
  },
  {
    id: 5,
    name: "kimbap",
    image: "https://i.ytimg.com/vi/Y-Y9CXGRJPU/maxresdefault.jpg",
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
