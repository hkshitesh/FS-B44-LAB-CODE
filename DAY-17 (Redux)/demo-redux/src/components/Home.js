import React from 'react'

function Home(props)
{
    return(
        <div>
            <h1>Home Componenet</h1>
            <div>
                <div>
                    <img src="https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_1.png"/>
                </div>
            
            <div>
                <span>
                    Toy Car
                </span>
                <span>
                    Price : $100
                </span>
            </div>
            <div>
                <button onClick={()=>{}}>Add to Cart</button>
            </div>
            </div>
        </div>
    )
}