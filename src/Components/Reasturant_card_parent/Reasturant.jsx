import React, { useEffect, useState } from 'react'
import "./Reasturant.css"
import Card from '../Card/Card'

let fetchUrl = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
function Reasturant() {
    let [product, setProduct] = useState([])
    useEffect(() => {
        let fetchData = async () => {

            try {
                let data = await fetch(fetchUrl);
                let response = await data.json()

                let responseData = response.data.cards[4].card.card.gridElements.infoWithStyle.restaurants

                let allProductArray = []
                for (let i = 0; i < responseData.length; i++) {
                    allProductArray.push(responseData[i].info);
                }
                setProduct(allProductArray)
            }
             catch (error) {
                console.log(error);

            }

        }
        fetchData()

        console.log(product);
    })
    return (
        <div className='reasturant_parent'>

            {
                product.map((singleProduct)=>{
                    return <Card singleProduct={singleProduct}/>
                })
            }

        </div>
    )
}

export default Reasturant
