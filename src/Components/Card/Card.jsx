import React from 'react'
import "./Card.css"

let image_url="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_360/"

function Card({ singleProduct }) {
    let { name, cloudinaryImageId, locality, areaName, costForTwo, cuisines ,avgRating} = singleProduct
    return (
        <div className='card_parent'>

            <div className="image">
                <img src={image_url+cloudinaryImageId} alt="" />
            </div>
            <div className="content">
                <hr />
                <h4>{name}</h4>
                <h4>{locality}</h4>
                <h4>{areaName}</h4>
                <h4>{costForTwo}</h4>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating}</h4>
            </div>

        </div>
    )
}

export default Card
