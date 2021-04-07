import React from 'react'
import { Link} from 'react-router-dom'
import { GET_DETAIL_BY_ID, } from '../../config'
import './main.css'

export default function Detail(props) {
    const [cocktail, setCocktail] = React.useState()

    React.useEffect(()=>{
      let id = props?.match.params.id
      getDetail(id)
    },[])

    const getDetail = async (id)=>{
        const req = await fetch(GET_DETAIL_BY_ID+id)
        const res = await req.json()
        setCocktail(res.drinks[0])
    }

    return (
        <div>
          <p className='cocktailName'>{cocktail?.strDrink}</p>
          <div className ='sides'>
          <div className='side'>
          <img 
          className='cocktailImage'
          src = {cocktail?.strDrinkThumb}/>
          </div>
          <div className='side'>
          <p className='cocktailPoints'> Glass: </p>
          <p className='cocktailInformation'>{cocktail?.strGlass}</p>
          <p className='cocktailPoints'>Instruction: </p>
          <p className='cocktailInformation'>{cocktail?.strInstructions}</p>
          <p className='cocktailPoints'>Ingredients:</p>
          <Link className='cocktailInformation' to={'/ingredients/'+ cocktail?.strIngredient1} key={cocktail?.strIngredient1}>
          <p>{cocktail?.strIngredient1}</p> 
          </Link>
          <Link className='cocktailInformation' to={'/ingredients/'+ cocktail?.strIngredient2} key={cocktail?.strIngredient2}>
          <p>{cocktail?.strIngredient2}</p> 
          </Link>
          <Link className='cocktailInformation' to={'/ingredients/'+ cocktail?.strIngredient3} key={cocktail?.strIngredient3}>
          <p>{cocktail?.strIngredient3}</p> 
          </Link>
          <Link className='cocktailInformation' to={'/ingredients/'+ cocktail?.strIngredient4} key={cocktail?.strIngredient4}>
          <p>{cocktail?.strIngredient4}</p> 
          </Link>
          <Link className='cocktailInformation' to={'/ingredients/'+ cocktail?.strIngredient5} key={cocktail?.strIngredient5}>
          <p>{cocktail?.strIngredient5}</p> 
          </Link>
          </div>
          </div>
        </div>
    )
}
