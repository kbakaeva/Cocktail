import React from 'react'
import { GET_INGREDIENTS } from '../../config'
import './main.css'

export default function Ingredients (props) {
    const [ingredients, setIngredient] = React.useState();

    React.useEffect(()=>{
        let name = props?.match.params.id
        getIngredient(name)
    },[]);

    const getIngredient = async(name)=>{
        const req = await fetch(GET_INGREDIENTS + name)
        const res = await req.json();
        setIngredient(res.ingredients[0]);
    }

    return (
        <div>
        <h5 className='cocktailName'>About ingredient</h5>
        <div className='sides'>
        <div className='side'>
        <p className='cocktailPoints'>Type: </p>
        <p className='cocktailInformation'>{ingredients?.strType}</p>
        <p className='cocktailPoints'>Ingredient: </p>
        <p className='cocktailInformation'>{ingredients?.strIngredient}</p>
        <p className='cocktailPoints'>Strength: </p>
        <p className='cocktailInformation'>{ingredients?.strABV}</p>
        </div>
        <div className='side'>
        <p className='cocktailPoints'>Description: </p>
        <p className='cocktailInformation'>{ingredients?.strDescription}</p>
        </div>
        </div>
        </div>
    );
}