import React, {useEffect, useState} from 'react'
import Search from '../Search'
import Output from '../Output'
import { GET_ALL_COCKTAILS, GET_COCKTAILS_BY_NAME } from '../../config'

export default function Home() {
    const [name, setName] = useState('')
    const [cocktails, setCocktails] = useState()
    
    useEffect(()=>{
        getAllCocktails()
    },[])

    const getAllCocktails = async()=>{
        const req = await fetch(GET_ALL_COCKTAILS)
        const res = await req.json()
        setCocktails(res.drinks)
    }

    const getCocktailByName = async(event)=>{
        event.preventDefault()
        const req = await fetch(GET_COCKTAILS_BY_NAME + name)
        const res = await req.json()
        setCocktails(res.drinks)
    }

    return (
        <div>
            <Search
                name = {name}
                changeName = {setName}
                send = {getCocktailByName}
            />
            <Output
                cocktails={cocktails}
            />
        </div>
    )
}
