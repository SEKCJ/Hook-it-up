import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'

let Detail = (props) => {

    const [card, getCard] = useState([])

    const getSpecific = async (id) => {
        let response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
        let json = await response.json();
        const makeCard = (json) => {
            getCard(<Card property1={`${json.email}, Id: ${json.id}`}
                property2={
                    <div className="card-text">
                        <h4 >{json.name}</h4>
                        <p>{json.body}</p>
                        <p>{json.email}</p>
                    </div>}
                property3={<Link className="btn btn-danger" to="/">Go Back</Link>} />)
        }
        makeCard(json)
    }


    useEffect(() => {
        getSpecific(props.match.params.id)
    }, [props.match.params.id])

    return (
        <div>
            <div style={{ "height": "40em", "width": "100%" }}
                className="d-flex align-items-center">
                {card}
            </div>
        </div>

    )
}

export default Detail