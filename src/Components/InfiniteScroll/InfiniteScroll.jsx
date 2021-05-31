import React, { useState, useEffect, useRef}from 'react'
import './InfiniteScroll.css'
import {v4 as uuidv4} from 'uuid'

export default function InfiniteScroll() {

    {/*image stockpile + infinite scroll down + research */}
    const [dataImg, setDataImg] = useState([[], [],[]]) 
    const [pageIndex, setPageIndex] = useState(1)
    const [searchState, setSearchState] = useState('random')
 
    const handleSearch = e => {
        e.preventDefault()
    }

    const inpRef = useRef()

    return (
        <div className='container'>
            <form onSubmit={handleSearch}>
                <label htmlFor="search">Your research</label>
                <input type="text" id="search" ref={inpRef}/>
            </form>
            <div className="card-list">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
