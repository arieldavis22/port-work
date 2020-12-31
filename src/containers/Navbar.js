import '../css/Navbar.css'
import React, { Component } from 'react';
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    handleClick = (key) => {
        console.log("working: ", key);
    }
    render() { 
        return (  
            <div className={"test"}>
            <div className={"option"} onClick={() => this.handleClick("bio")}>
                 Biography
             </div>
             <div className={"option"} onClick={() => this.handleClick("project")}>
                Projects
             </div>
             <div className={"option"} onClick={() => this.handleClick("social")}>
                 Socials
             </div>
             <div className={"option"} onClick={() => this.handleClick("contact")}>
                 Contact Me
             </div>
         </div>
        );
    }
}
 
export default Navbar;