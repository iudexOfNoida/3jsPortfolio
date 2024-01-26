import { Link } from "react-router-dom";
import { arrow } from "../assets/icons"

const InfoBox = ({ text, link, btnText })=> (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
        {btnText}
        <img src={arrow} className="w-4 h-4 object-contain"/>
        </Link>
    </div>
)

const rendererContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hi, my name is <span className="font-semibold">Harsh Bhardwaj</span> 👋
        <br/>
        A Software Developer 
        <br/>
        Delhi Technological University '23
        </h1>
    ),
    2: (
        <InfoBox 
            text = {"Worked on a lot of technologies throughout my college and professional journey!"}
            link={"/about"}
            btnText={"Resume"}
        />
    ),
    3: (
        <h1>3</h1>
    ),
    4: (
        <h1>4</h1>
    )
}

const HomeInfo = ( {currentStage} ) => {
  return rendererContent[currentStage] || null;
  
}

export default HomeInfo