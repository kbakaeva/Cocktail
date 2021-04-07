import React from 'react'
import { Link} from 'react-router-dom'
import './main.css'

export default function Header() {
    return (
        <Link className='naming' to={'/'} key={''}>
          <header>
            <h1>Cocktails</h1>
        </header>
          </Link>
    )
}
