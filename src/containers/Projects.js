import React, { Component } from 'react';
import ProjectCard from '../components/ProjectCard';
import '../css/Project.css'
class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        const obj = {
            name: "Project 1",
            description: "lalalalala",
            image_url: "https://i.imgur.com/b6PbhsQ.png",
            project_url: "www.google.com"
        };
        return (  
            <div className="proj-container">
                Project Cards
                <ProjectCard project={obj}/>
            </div>
        );
    }
}
 
export default Projects;