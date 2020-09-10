import React from 'react';
import './Home.css';
import Product from './Product';
import { Fade } from "react-awesome-reveal";


function Home() {
  const productRender = (
    <Fade
      cascade
      fraction={0.2}
      duration={500}
      damping={0.1}
      className="home__productWrapper"
    >
      <Product
        id="1356886"
        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
        price={29.99}
        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
        rating={5}
      />
      <Product
        id="49538094"
        title="Aucma Stand Mixer,6.5-QT 660W 6-Speed Tilt-Head Food Mixer, Kitchen Electric Mixer with Dough Hook, Wire Whip & Beater (6.5QT, Blue)"
        price={150.00}
        image="https://m.media-amazon.com/images/I/61aT8jl8THL._AC_UY218_.jpg"
        rating={4}
      />
      <Product
        id="49538062"
        title="Samsung 32in Full HD Curved Screen LED TFT LCD Monitor Glossy White MagicBright FreeSync Technology Eco Saving Plus Eye Saver DisplayPort HDMI"
        price={249.00}
        image="https://m.media-amazon.com/images/I/81sWu6u-CEL._AC_UY218_.jpg"
        rating={4}
      />
      <Product
        id="7939876"
        title="Echo Dot (3rd Gen) - Charcoal Fabric Bundle with Honeywell RTH9585WF1004/W Wi-Fi Smart Color Programmable Thermostat"
        price={169.00}
        image="https://m.media-amazon.com/images/I/61chg3ekFSL._AC_UY218_.jpg"
        rating={3}
      />
      <Product
        id="8445563"
        title="New Apple iPad Pro (11-inch, Wi-Fi + Cellular, 256GB) - Space Gray (2nd Generation) with AppleCare+ Bundle"
        price={1178.99}
        image="https://m.media-amazon.com/images/I/61Qhkzxsb-L._AC_UY218_.jpg"
        rating={5}
      />       
      <Product
        id="5339366"
        title="Skytech Archangel Gaming Computer PC Desktop – RYZEN 5 2600 6-Core 3.4 GHz, GTX 1660 6G, 500GB SSD, 16GB DDR4 3000MHz, RGB Fans, Windows 10 Home"
        price={879.59}
        image="https://m.media-amazon.com/images/I/71XvDKfQxjL._AC_UY218_.jpg"
        rating={4}
      />
      <Product
        id="3553476"
        title="Samsung Galaxy Z Flip SM-F700F/DS 256GB (GSM Only | No CDMA) Factory Unlocked Android 4G/LTE Smartphone - International Version (Mirror Purple)"
        price={1128.00}
        image="https://m.media-amazon.com/images/I/716r3n03ZdL._AC_UY218_.jpg"
        rating={5}
      />
      <Product
        id="3455463"
        title="SAMSUNG QN32Q50RAFXZA Flat 32 QLED 4K 32Q50 Series Smart TV"
        price={497.99}
        image="https://m.media-amazon.com/images/I/51NKhnjhpGL._AC_UY218_.jpg"
        rating={4}
      />       
      <Product
        id="654463"
        title="JavaScript - The Definitive Guide: Master the World's Most-Used Programming Language"
        price={52.99}
        image="https://m.media-amazon.com/images/I/91hUer84PpL._AC_UY218_.jpg"
        rating={4}
      /> 
      <Product
        id="84455563"
        title="Learning React: Modern Patterns for Developing React Apps"
        price={39.21}
        image="https://m.media-amazon.com/images/I/91uFdkCJmAL._AC_UY218_.jpg"
        rating={5}
      />       
      <Product
        id="5259366"
        title="Blackmagic Design DaVinci Resolve Editor Keyboard"
        price={995}
        image="https://m.media-amazon.com/images/I/81mn8JJW9-L._AC_UY218_.jpg"
        rating={4}
      />
    </Fade>
  );

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Amazon Home"
        />
        
        <div className="home__row">
          {productRender}
        </div>
      </div>
    </div>
  );
}


export default Home;
