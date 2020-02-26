import React, { } from 'react';

const Card = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="card col-sm-12 bg-dark my-2">
                    <div className="card-body">
                        <h1 className="card-title pb-1 border-bottom border-light"
                            style={{ "borderBottom": "3px solid" }}>{props.property1}</h1>
                        {props.property2}
                        <h4 className="card-text">{props.property3}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card