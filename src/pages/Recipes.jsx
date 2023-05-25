import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';

const Recipes = () => {

    let params = useParams();
    const [details,setDetails] = useState({});
    const [activeTab,setActiveTab] = useState("instructions")

    const fetchDetails = async () => {
        const data = await fetch(`
        https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)

        const detailData = await data.json();
        setDetails(detailData);
        
    };

    useEffect(() => {
        fetchDetails();
    },[params.name])

  return (
    <div className='detailWrapper'>
        {
            details.title && (
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt=''/>
            </div>
            )
        }
        <div className='Info'>
            <button 
             className={activeTab === 'instructions' ? 'active':''}
             onClick={() => setActiveTab('instructions')}>Instructions</button>
            <button 
             className={activeTab === 'ingredients' ? 'active':''}
             onClick={() => setActiveTab('ingredients')}>Ingredients</button>
             
             {
                activeTab === 'instructions' && (
                        details.summary && (
                            <div>
                                <h3 dangerouslySetInnerHTML={{ __html:details.summary}}></h3>
                                <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
                            </div>
                        )
                )
             }
            { activeTab === 'ingredients' && (
                    Array.isArray(details.extendedIngredients) && (
                        <ul>
                        {details.extendedIngredients.map((ingredient,index) => (
                            <li key={index}>{ingredient.name}</li>
                        ))}
                        </ul>
                    )
            ) }
           
        </div>

    </div>
  );
}

export default Recipes;
