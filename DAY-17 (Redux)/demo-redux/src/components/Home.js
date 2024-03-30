import React from 'react'

function Home(props)
{
    return(
        <div>
            <h1>Home Componenet</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_1.png"/>
                </div>
            
            <div className="text-wrapper item">
                <span>
                    Toy Car
                </span>
                <span>
                    Price : $100
                </span>
            </div>
            <div className="btn-wrapper item">
                <button onClick={()=>{props.addToCartHandler({price:100, name:'Toy Car'})}}>Add to Cart</button>
            </div>
            </div>
        </div>
    )
}
export default Home;