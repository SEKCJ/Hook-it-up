import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'

let Endpoint = () => {

    
    useEffect(() => {
        const getInfo = async () => {
            let response = await fetch('https://jsonplaceholder.typicode.com/comments');
            let json = await response.json();
            // setComments(json)
            makeCards(json)
        }
        
        getInfo()
    }, [])

    // const [comments, setComments] = useState([])
    const [cards, setCards] = useState([])

    const makeCards = (state) => {
        let CardArray = state.map((element, index) => {
            return <Card property1={element.email} property2={<h4 className="card-text">{element.body}</h4>}
                property3={<Link className="btn btn-primary"
                    to={`/${element.id}/details`}>Learn More!</Link>} key={index} />
        })
        setCards(CardArray)
    }

    console.log()
    return (
        <div>
            <h1 className="text-center mt-3">Comments:</h1>
            {cards}
        </div>
    )
}

export default Endpoint