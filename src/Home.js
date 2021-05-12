import React from 'react';
import picture from './images/p1.jpg';
import "./Home.css";
import Product from './Product';
import pic1 from './products/p3.jpg';
import pic2 from './products/p4.jpg';
import pic3 from './products/p5.jpg';
import pic4 from './products/p6.jpg';
import pic5 from './products/p7.jpg';
import pic6 from './products/p9.jpg';
import Rating from './Rating';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                 src={picture} alt=""/>
            </div>

            <div className="home__row">
                <Product id="1234" title ="Sony alpha r7 iii" price={999.00}
                image={pic1}
                rating ={Rating}/>
                
                <Product id="1324" title=" Gucci Jacket" price={158.86}
                image={pic2}
                rating ={Rating}/>
                
                

            </div>

            <div className="home__row">
               <Product id="1432" title ="Luxury Luci Watch" price={10000}
               image={pic3}
               rating ={Rating}/>
               <Product title="MacBook Air Pro M14 1TB 16GB RAM" price={2000}
               image={pic4}
               rating={Rating}/>
               <Product id="1423" title ="Dr Martens Boots High quality boots for men" price={239.99}
               image={pic5}
               rating ={Rating}/>
               
            </div>

            <div className="home__row">
               <Product id="1235" title ="3840 x 1080 resolution 32:9 aspect ratio 
               1 ms response time 144 Hz refresh rate Mini DisplayPort 
               & 2 HDMI inputs 178° horizontal and vertical viewing ...
                Check website for latest pricing and availability. Images may be subject to copyright. 
                Learn More" price={858.99}
               image={pic6}
               rating ={Rating}/>

            </div>
            
        </div>
    );
}

export default Home
