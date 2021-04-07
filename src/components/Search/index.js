import React from 'react'
import './main.css'

export default function Search({send, name, changeName}) {

    return (
        <div className='firstsection'>
            <form
            className='searchblock'
            onSubmit={send}>
                <input
                    className='inputSearch'
                    placeholder='enter'
                    value = {name}
                    onChange = {(e)=>changeName(e.target.value)}
                />
            </form>
        </div>
    )
}