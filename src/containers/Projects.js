import React, { Component } from 'react';
import ProjectCard from '../components/ProjectCard';
import '../css/Project.css'
import Fade from 'react-reveal/Fade';
class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        const projects = 
        [
            {
            name: "Project 1",
            description: "lalalalala",
            image_url: "https://i.imgur.com/b6PbhsQ.png",
            project_url: "www.google.com"
        },
        {
            name: "Project 2",
            description: "more lalalalalalla",
            image_url: "https://i.imgur.com/b6PbhsQ.png",
            project_url: "www.google.com"
        }
    ];
        return (  
            <>
            <Fade duration={2000}>
                <div className="proj-container">
                    Project Cards
                    <div className="proj-list">
                    {projects.map((project) => {
                        return <ProjectCard key={project.description} project={project}/>
                    })}
                    </div>
                </div>
            </Fade>

            </>
        );
    }
}
 
export default Projects;