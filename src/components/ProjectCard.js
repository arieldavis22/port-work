const ProjectCard = (props) => {
    return (  
        <div className="project-card">
            <h1>{props.project.name}</h1>
            <span>{props.project.description}</span>
            <br/>
            <img className="project-image" src={props.project.image_url} alt="error"/>
        </div>
    );
}
 
export default ProjectCard;