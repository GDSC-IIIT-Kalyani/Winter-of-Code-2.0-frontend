import './ProjectCard.css';
import React, {useState} from 'react';
import { FaArrowDown, FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';


const ProjectCard = (props) => {
    const [showIdeas, setShow] = useState(false);
    return (
        <div className="Card" >
            <div className="Project_name" style={{visibility: `${showIdeas ? 'hidden' : 'visible'}`, height: `${showIdeas ? '0' : '30'}%`}}>
                {props.data.title}
            </div>
            <div className="Project_ideas" onClick={() => {
                setShow(showIdeas ? false : true);
            }}>
                Check Ideas
                <FaArrowDown style={{transition: "all ease-in-out 0.3s", marginLeft: "5px", transform: `rotateZ(${showIdeas ? '0' : '-90'}deg)`}}/>
            </div>
            <div className="Organizer_img" style={{height: `${showIdeas ? '0' : '50'}%`, backgroundImage: `url(${props.data.org_img})`}} >
            </div> 
            <div className="Ideas" style={{visibility: `${showIdeas ? 'visible' : 'hidden'}`, height: `${showIdeas ? '290' : '0'}%`}}>
                <div className="flex-container">
                    <FaGithub className="github" onClick={() => {
                        window.location = props.data.repo_link;
                    }}/>
                    <div class="dropdown">
                      <button class="dropbtn">Mentors</button>
                      <div class="dropdown-content">
                        {props.data.mentors.map((mentor, idx) => {
                            return (
                            <a className="mentors-flex" href= {"mailto:" + mentor.email} >
                                <FiMail style={{textAlignment: 'center', color: "white", display: "flex", cursor: "pointer"}} key={idx}></FiMail>
                                <div style={{color: "white", display: "flex", cursor: "pointer", paddingLeft: "5px"}}>{mentor.name}</div>
                            </a>)
                        })}
                      </div>
                    </div>
                </div>
                {props.data.Ideas.map((idea, idx) => {
                    return (
                        <li style={{textAlign: "center", margin: "10px"}}>{idea}</li>
                    )
                })}
            </div>
        </div>
    )
}

export default ProjectCard;