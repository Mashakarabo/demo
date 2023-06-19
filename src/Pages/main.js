import Raect from "react";
import './main.css';
import writeonimage from '../images/background.jpg';
import Car1 from '../images/pic1.png';
import Car2 from '../images/pic2.png';
import Car3 from '../images/pic3.png';
import firstpic from '../images/firstairport.png';
import secpic from '../images/secondpic.png';
import rdpic from '../images/thirdpic.png';
import gitouch from '../images/getintouch.jpg';
import loc from '../images/location.png';
import ml from '../images/mail.png';
import phn from '../images/phone.png';


function Main(){

    return(
        <>
        <div className="Main-folder" style={{backgroundImage: `url(${writeonimage })`,
        backgroundPosition: "center",
        backgroundSize: "cover"}}>
            
            <div id="first-folder">
            <h1>Cape Town Luxury Shuttles</h1>
            <p>Airport Transfers | Luxury Car Rental | Chauffeur Driver</p>
            <button>Book Today</button> <button>Get Quote</button>
            </div>
        </div>
        <div className="Infor-about-transport">
            <div className="Details">
            
            <p1>
            <b>Tourie Mobile</b> Shuttles is one of the latest shuttle services in Cape Town.
            We pride ourselves on being Professional, Reliable and most affordable always.
            Our cars are on stand by 24/7 to offer you the transport service that you need,
            be it Airport transfers, Private tours, or a Chauffeur drive. We have the best Tour guides.
            All of our vehicles are insured, and to provide you the quality you deserve, our fleets are not only sanitized & cleaned after each trip , but also safe & comfortable for a relaxing experience. 
            Whether you have just arrived at the airport or need to venture out of town,
            Tourie Mobile Shuttle Services is here for you.Get a free Quote today!
            </p1>
            
            </div>
            <div className="Images-Details">
                <img src={Car1} alt="" width={400}/>
                <img src={Car2} alt="" width={400}/>
                <img src={Car3} alt="" width={400}/>
            </div>

        </div>
        <div className="Services">
               
            <div className="Package1">
                <h4>Package One</h4>
                <img src={firstpic} alt="" width={30} id="firstpicture"/>
                <p5>Airport Pick-Ups and Drop-Offs </p5>
                <p5>Schedule Your Airport Pick-Ups
                     and Drop-Offs</p5>
                                
            </div>
            <div className="Package2">
                <h4>Package two</h4>
                <img src={secpic} alt="" width={30} id="secondpicture"/>
                <p5>chauffeur </p5>
                <p5>Specialising in transfers and professional chauffeur driven experiences,
                     we offer safe and reliable transport solutions in all around Cape Town</p5>
                                    
            </div>
            <div className="Package3">
                <h4>Package Three</h4>
                <img src={rdpic} alt="" width={39} id="thirdpicture"/>
                <p5>Car Rental </p5>
                <p5>Hire a special Luxury Car for your long trips, wedding, or special events</p5>                
            </div>
          
            
        </div>
     
        <div className="contact-cover" style={{backgroundImage : `url(${gitouch})`,backgroundPosition:"center", 
        backgroundSize: "cover"}}>

         <div className="condetails">   
        <p>Contact: <h2>0817855654</h2></p>
        <p>Email: <h2>mashakarabo10@gmail.com</h2></p>

        </div>      
            
        </div>
        <div className="footer">
            vv
        </div>

       
        

        </>
    )
}

export default Main;