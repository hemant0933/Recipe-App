import React from 'react';
import { useEffect,useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Searched = () => {
    let params = useParams();

    const [searchedRecipes,setSearchedRecipes] = useState([]);

    const getSearched = async (name) => {
        const data = await fetch(
            ` https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=10&query=${name}`
        );
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);
        console.log(recipes.results)
    }

    useEffect(() => {
        getSearched(params.search);
        // console.log(params.search)
    },[params.search])

  return (
    <div className='cuisine-Wrapper'>
        {
            searchedRecipes.map((item)=>(
                <div className='cuisineInner'>
                    <Link to={'/recipe/'+item.id}>
                        <img src={item.image} alt="searchImg"/>
                        <h4>{item.title}</h4>
                    </Link>
                </div>
            ))
        }
    </div>
  );
}

export default Searched;
