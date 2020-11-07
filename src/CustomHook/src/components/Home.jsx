import React from 'react';
import Banner from '../Banner.jpg'
import book1 from '../products/Book(1).webp'
import book2 from '../products/Book(2).webp'
import book3 from '../products/Book(3).webp'
import book4 from '../products/Book(4).webp'
import img1 from '../products/MiWatch.webp'
import img2 from '../products/smartWatch.webp'
import img3 from '../products/speaker.webp'
import Product from './Product';

import '../product.css'
import Grid from '@material-ui/core/Grid';


function Home() {
    
    return (
        <div className="home">
            
            <img src={Banner} alt="Banner_img" className="Home_img" />
            <div className="afterbackground"></div>
             <div  className="product_row row mt-4 mb-3 shadow-sm py-4 bg-light ">
                <div className="col-sm-3">
                    <Product
                        id={1234}
                        title = "Sapiens: A Brief History of Humankind"
                        Price={11.96}
                        rating={5}
                        image={book1}
                    />
                    </div>
                    <div className="col-sm-3">
                        <Product
                            id={123421}
                            title = "Fairy and Fantasy Line Art Coloring Book"
                            Price={10.76}
                            rating={4}
                            image={book2}
                        />
                  </div>
                    <div className="col-sm-3">
                        <Product
                            id={123423}
                            title = "Rough Book"
                            Price={12.76}
                            rating={4}
                            image={book3}
                        />
                  </div>
                    <div className="col-sm-3">
                        <Product
                            id={123423}
                            title = "Rough Book"
                            Price={12.76}
                            rating={4}
                            image={book4}
                        />
                  </div>
             </div>
      
             <div className="row mt-5 shadow-sm bg-white py-3">
                    <div className="col-sm-3">
                      <Product
                            id={1234223}
                            title = "Xiaomi MiBand Bracelet 4 (Global Version) Fitness Tracker 095"
                            Price={26.99}
                            rating={4}
                            image={img1}
                        />
                    </div>
                    <div className="col-sm-3">
                      <Product
                            id={123421112}
                            title = "Xiaomi Amazfit Bip Lite Montre conectee Résistant à l'eau 30 mètres Moniteur de fréquence Cardiaque Modes Sportifs iOS et Android"
                            Price={26.99}
                            rating={4}
                            image={img2}
                        />
                    </div>
                    <div className="col-sm-3">
                      <Product
                            id={12423423}
                            title = "Bose SoundLink Revolve Enceinte Bluetooth - Noir"
                            Price={168.00}
                            rating={4}
                            image={img3}
                        />
                    </div>
                    <div className="col-sm-3">
                      <Product
                            id={66281}
                            title = "Nouveau Apple iPad Pro (12,9 pouces, Wi-Fi, 256 Go) - Gris sidéral (4e génération"
                            Price={1229.00}
                            rating={4}
                            image="https://m.media-amazon.com/images/I/81WhK5+gf2L._AC_UY327_FMwebp_QL65_.jpg"
                        />
                    </div>
             </div>
           
        </div>
    )
}

export default Home;
