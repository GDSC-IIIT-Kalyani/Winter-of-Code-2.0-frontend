import React from 'react';
import './Projects.css';
import '../../header/NavBar';
import SlideData from './SlideData';
import proj_video from '../../../assets/projectAssests/proj_video.mp4';
import NavBar from '../../header/NavBar';
import './grid.css';
import { FaGithub } from 'react-icons/fa';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'all' };
  }
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <div
        className='projects'
        onLoad={() => {
          document.querySelector('.navBar_link-item').style.color =
            'white !important';
        }}
      >
        <NavBar navLinkColor='white' />
        <div className='proj_vid'>
          <video autoPlay loop muted>
            <source src={proj_video} type='video/mp4' />
          </video>
        </div>
        <div className='filter_option'>
          <h3>Filter out by Categories</h3>
          <form id='proj_form'>
            <select
              className='proj_slt'
              value={this.state.value}
              onChange={this.handleChange}
            >
              <option value='all'>All Categories</option>
              <option value='web'>Web Development</option>
              <option value='app'>App Development</option>
              <option value='ml'>Machine Learning</option>
            </select>
          </form>
        </div>

        {/* Grid section */}
        <div className='project_grid'>
          {SlideData.map((slide, idx) => {
            return (
              <div key={idx}className={
                    slide.tags.includes(this.state.value)
                      ? "main_item"
                      : "no_view"
                  }>
                <div className='project_left'>
                  <div className='org_name'>
                    <div className='size-1'>{slide.org_name}</div>
                  </div>
                  <div className='project_name'>
                    <div className='size-2'>{slide.title}</div>
                  </div>
                  <div className='mentor'>
                    <div className='size-2'>Mentors</div>
                    {slide.mentors.map((mentor, index) => {
                      return (
                        <div key={index} className='size-3'>
                          {mentor}
                        </div>
                      );
                    })}
                  </div>
                  <a href={slide.repo_link}>
                    <FaGithub className="gh_logo"/>
                  </a>
                </div>
                <div className='project_right'>
                  <div className='size-2'>Ideas Presented:</div>
                  <br />
                  <ul className='ideas'>
                    {slide.Ideas.map((idea, id) => {
                      return (
                        <li className='size-4' key={id}>
                          {idea}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Projects;
