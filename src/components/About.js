import '../App.css';
import logo from '../images/logo_black.png'
import githubLogo from '../images/GitHub-Mark-32px.png';
import background_1 from '../images/slides/background_1.jpg';
import background_2 from '../images/slides/background_2.jpg';
import background_3 from '../images/slides/background_3.jpg';
import background_4 from '../images/slides/background_4.jpg';
import background_5 from '../images/slides/background_5.jpg';
import background_6 from '../images/slides/background_6.jpg';

function About() {

  return (
    <div className="about">
        <img className="checkout-message-logo" src={logo} alt="HoopShop" />
        <p className="about-p">This project was made by <a href="https://github.com/KFig21" target="_blank" rel="noopener noreferrer"><img class="github-logo" src={githubLogo} alt="github"></img></a> KFig21 </p>
        <p>(No items can be purchased from this site)</p>
        <p><strong>Image Credits</strong></p>
        <span style={{marginBottom: "10px"}}>Product images - <a className="about-page-links" href="//www.Eastbay.com" target="_blank" rel="noreferrer"><strong>Eastbay.com</strong></a></span>
        <span>Home page slider images - <a className="about-page-links" href="//www.ludwigfavre.com/portfolio_page/new-york-basketball-courts/" target="_blank" rel="noreferrer">LudwidFavre.com</a></span>
        <div className="about-page-gallery">
          <a href={background_2} target="_blank" rel="noreferrer"><img className="about-page-gallery-image" src={background_2} alt="LudwidFavre.com" /></a>
          <a href={background_4} target="_blank" rel="noreferrer"><img className="about-page-gallery-image" src={background_4} alt="LudwidFavre.com" /></a>
          <a href={background_6} target="_blank" rel="noreferrer"><img className="about-page-gallery-image" src={background_6} alt="LudwidFavre.com" /></a>
        </div>
        <span>Home page slider image - <a className="about-page-links" href="//www.JulianLove.com/Personal/Basketball" target="_blank" rel="noreferrer">JulianLove.com</a></span>
        <div className="about-page-gallery">
          <a href={background_5} target="_blank" rel="noreferrer"><img className="about-page-gallery-image" src={background_5} alt="JulianLove.com" /></a>
        </div>
        <span>Home page slider image - <a className="about-page-links" href="//www.CraigAusgustinePhoto.com" target="_blank" rel="noreferrer">CraigAusgustinePhoto.com</a></span>
        <div className="about-page-gallery">
          <a href={background_3} target="_blank" rel="noreferrer"><img className="about-page-gallery-image" src={background_3} alt="CraigAusgustinePhoto.com" /></a>
        </div>
        <span>Home page slider image - Kim Fetrow, <a className="about-page-links" href="//www.shootproof.com/blog/basketball-photography-tips/" target="_blank" rel="noreferrer">ShootProof.com</a></span>
        <div className="about-page-gallery">
          <a href={background_1} target="_blank" rel="noreferrer"><img className="about-page-gallery-image" src={background_1} alt="ShootProof.com" /></a>
        </div>
    </div>
  );
}

export default About;
