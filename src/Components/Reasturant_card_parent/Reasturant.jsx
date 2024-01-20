import React, { useEffect, useState } from 'react'
import "./Reasturant.css"

let fetchUrl = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
function Reasturant() {

    useEffect(() => {
        let fetchData = async () => {

            try {
                let data = await fetch(fetchUrl);
                let response = await data.json()
                console.log(response.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
            } catch (error) {
                console.log(error);

            }

        }
        fetchData()
    })
    return (
        <div className='reasturant_parent'>

        </div>
    )
}

export default Reasturant
