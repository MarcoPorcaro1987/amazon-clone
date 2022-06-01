import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className='home_image' src="https://m.media-amazon.com/images/I/61C8fu9LeoL._SX3000_.jpg" alt="amazon-banner" />

                <div className='home_row'>
                    <Product title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses" price={29.99} image="https://m.media-amazon.com/images/P/0670921602.01._SCLZZZZZZZ_SX500_.jpg" rating={5} />
                    <Product id="49538094" title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-Beater" price={228.65} image="https://m.media-amazon.com/images/I/61etD4-IrPL._AC_SL1200_.jpg" rating={4} />
                </div>
                <div className='home_row'>
                    <Product id="49538234" title="Samsung Galaxy Watch4 Classic Smart Watch, Rotating Bezel, Health Monitoring" price={369} image="https://m.media-amazon.com/images/I/71utJNpMCsL._AC_SL1500_.jpg" rating={4} />
                    <Product id="42338094" title="Echo Dot (4th generation) | Smart speaker with Alexa | Charcoal" price={49.99} image="https://m.media-amazon.com/images/I/61lcSzk1dgS._AC_SL1000_.jpg" rating={3} />
                    <Product id="4957094" title="2021 Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Space Grey (5th Generation)" price={999} image="https://m.media-amazon.com/images/I/71lhr4YtLtS._AC_SL1500_.jpg" rating={5} />

                </div>
                <div className='home_row'>
                    <Product id="75338094" title="Diablo Eternal Collection (Nintendo Switch)" price={49.99} image="https://m.media-amazon.com/images/I/91a18rDbilL._AC_SL1500_.jpg" rating={3} />
                </div>
            </div>
        </div>
    )
}

export default Home
