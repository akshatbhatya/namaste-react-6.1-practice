import React, { useEffect, useState } from 'react'
import "./Reasturant.css"
import Card from '../Card/Card'
import Shemmer from '../Shemmer/Shemmer'

let fetchUrl = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
function Reasturant() {
    let [product, setProduct] = useState([])
    let [search, setSearch] = useState("")
    let [searchState,setSearchState]=useState([])
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
                setSearchState(allProductArray)
            }
            catch (error) {
                console.log(error);

            }

        }
        fetchData()
    })

    if(product.length<=0){
        return <Shemmer/>
        
    }
    
   let topRated=()=>{
    product.filter((data)=>data.avgRating>4.4)
   }
    
    let searchFilter=()=>{
        if(search==""){
            setSearchState(product)
            return

        }
        let sortedSerch=product.filter((product)=>product.name.toLowerCase().includes(search.toLowerCase()));
        setSearchState(sortedSerch)
    }
    return (

        <>
            <input type="text" placeholder='search here...' onChange={(e)=>setSearch(e.currentTarget.value)}/>
            <button onClick={searchFilter}>search</button>

            <button onClick={topRated}>topRated</button>
            <div className='reasturant_parent'>

                {
                    searchState.map((singleProduct) => {
                        return <Card singleProduct={singleProduct} key={singleProduct.id} />
                    })
                }

            </div>
        </>
    )
}

export default Reasturant
