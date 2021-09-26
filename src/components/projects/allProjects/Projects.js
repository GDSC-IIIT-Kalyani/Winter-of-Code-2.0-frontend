import React from "react";
import "./Projects.css";
import "../../header/NavBar";
import SlideData from "./SlideData";
import { render } from "@testing-library/react";
// import { Link, animateScroll as scroll } from "react-scroll";
// import Filter from './filter';
class Projects extends React.Component{
  // let [tag, setcurr] = useState(0);
  constructor(props){
    super(props);
    this.state = {value: 'all'};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange=(e)=> {    this.setState({value: e.target.value})};  
  render(){return (
    <div className="projects" onLoad={()=>{
      document.querySelector(".navBar ul li:nth-child(2)").style.display ="none";
      document.querySelector(".navBar ul li:nth-child(3)").style.display ="none";
      document.querySelector(".navBar ul li:nth-child(4)").style.display ="none";
      document.querySelector(".navBar ul li:nth-child(5)").style.display ="none";
      document.querySelector(".navBar ul li:nth-child(6)").style.display ="none";
      document.querySelector(".navBar ul li:nth-child(7)").style.display ="none";
      document.querySelector(".navBar ul li:nth-child(8)").style.display ="none";
      // document.querySelector("form").style.paddingTop ="0%";
      }}>
      <form id='proj_form'><select className="proj_slt" value={this.state.value} onChange={this.handleChange}>
        <option value="all">ALL</option>
        <option value="web">WEB DEVLOPEMENT</option>
        <option value="app">APP DEVLOPMENT</option>
        <option value="ml">MACHINE LEARNING</option>
      </select></form>
      <h1 className="proj_head">PROJECTS</h1>
      <div className="proj_grid">
        {SlideData.map((slides, idx) => {
          return (
            <div className={slides.tags.includes(this.state.value)?"proj_item":"no_view"} id={"section"+idx.toString()}>
              <img src={slides.image} alt="Proj_Logo"></img>
              <div>
              <h3 className="proj_title">{slides.title}</h3>
              <p className="proj_desc">{slides.Descrption}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );}
};
export default Projects;