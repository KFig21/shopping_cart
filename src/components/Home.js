import '../App.css';
import logo from '../images/logo_white.png'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import background_1 from '../images/slides/background_1.jpg';
import background_2 from '../images/slides/background_2.jpg';
import background_3 from '../images/slides/background_3.jpg';
import background_4 from '../images/slides/background_4.jpg';
import background_5 from '../images/slides/background_5.jpg';
import background_6 from '../images/slides/background_6.jpg';

function Home() {

  useEffect(() => {
    newSlider();
  })

  const newSlider = () => {
    var homeContainer = document.getElementById('home-container');
    var backgroundimage = window.getComputedStyle(homeContainer).backgroundImage;
    var regex1 = /_1/i;
    var regex2 = /_2/i;
    var regex3 = /_3/i;
    var regex4 = /_4/i;
    var regex5 = /_5/i;
    var regex6 = /_6/i;
    setTimeout(() => {
      if(!document.getElementById('home-container')) return
      if (regex6.test(backgroundimage)){
        document.getElementById('home-container').style.backgroundImage = `url(${background_1})`
        newSlider();
      } else if (regex1.test(backgroundimage)){
        document.getElementById('home-container').style.backgroundImage = `url(${background_2})`
        newSlider();
      } else if (regex2.test(backgroundimage)){
        document.getElementById('home-container').style.backgroundImage = `url(${background_3})`
        newSlider();
      } else if (regex3.test(backgroundimage)){
        document.getElementById('home-container').style.backgroundImage = `url(${background_4})`
        newSlider();
      } else if (regex4.test(backgroundimage)){
        document.getElementById('home-container').style.backgroundImage = `url(${background_5})`
        newSlider();
      } else if (regex5.test(backgroundimage)){
        document.getElementById('home-container').style.backgroundImage = `url(${background_6})`
        newSlider();
      } 
    }, 3200)
  }

  return (
    <div className="home-container" id="home-container">
        <img className="home-logo" src={logo} alt="hoopShop"></img>
        
        <Link to='/shop'><button className="home-page-button">Shop Now</button></Link>
    </div>
  );
}

export default Home;
