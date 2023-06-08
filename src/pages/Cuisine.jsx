import React, { useEffect, useState } from "react";
// import {motion} from 'framer-motion';
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const getCuisine = async (name) => {
    setIsLoading(true);
    const data = await fetch(
      ` https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=10&cuisine=${name}`
    );
    const recipes = await data.json();
    setIsLoading(false);
    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type);
    // console.log(params.type);
  }, [params.type]);

  return (

      <>
      {
      isLoading ? 
      (
      <div className="dot-spinner">
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
      </div>
      )
      :
      ( <div
        className="cuisine-Wrapper"
      >
        {cuisine.map((item) => (
          <div key={item.id} className="cuisineInner">
            <Link to={"/recipe/" + item.id}>
              <img className="cuisineImg" src={item.image} alt="dish" />
              <h4 className="cuisineTitle">{item.title}</h4>
            </Link>
          </div>
        ))}
      </div>)
    }
      </>

   
  );
};

export default Cuisine;
