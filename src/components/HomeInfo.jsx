import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from "../assets/icons"


const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-mediumsm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} alt="arrow" className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Divyansh Dhyani</span>. <br />
            I am a Software Developer.
        </h1>
    ),
    2: (
        <InfoBox
            text="I have gained hands-on experience with multiple companies, acquiring a diverse skill set and practical knowledge across various areas of software development, which has enhanced my ability to adapt and contribute effectively to different projects."
            link="/about"
            btnText="Learn more about me"
        />
    ),
    3: (
        <InfoBox
            text="Here is a showcase of the diverse projects I’ve worked on, each representing a unique challenge and opportunity to grow."
            link="/projects"
            btnText="See my Projects"
        />
    ),
    4: (
        <InfoBox
            text="Looking for a dev or need a project done? Contact me."
            link="/contact"
            btnText="Let's talk"
        />
    )
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo