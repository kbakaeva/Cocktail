import React from 'react'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import './main.css'
export default function Output({cocktails}) {
    return (
        <div className='cards'>
            {
            cocktails && cocktails.map(el=>{
            return(
            <Link className='style' to={'/detail/' + el.idDrink} key={el.idDrink}>  
            <img className='cocktailImage' src={el.strDrinkThumb} alt={el.strDrink}/>
            <p className='cocktailName'>{el.strDrink}</p>
            </Link>
            )
            })
            }
            {/* <div  style={{ padding: 70 }}>
      <Grid className="grid1" container spacing={4}>
        {
            cocktails && cocktails.map(el=>{
            return(
            <Link to={'/detail/' + el.idDrink} key={el.idDrink}> 
            <div className='card'> 
            <img src={el.strDrinkThumb} alt={el.strDrink}/>
            <h5>{el.strDrink}</h5>
            </div>
            </Link>
            )
            })
            }
      </Grid>
    </div> */}
        </div>
    )
}