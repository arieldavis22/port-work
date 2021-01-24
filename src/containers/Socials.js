import React, { Component } from 'react';
import { GoMarkGithub } from "react-icons/go";
import { IoLogoLinkedin } from "react-icons/io";
import { IconContext } from "react-icons";
import '../css/Socials.css'
class Socials extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <>
            <IconContext.Provider value={{ size: "3em"}}>
                    <div className="social-container">
                        Socials
                        <div className="icons">
                            <GoMarkGithub/>
                            <IoLogoLinkedin/>
                        </div>
                    </div>
            </IconContext.Provider>
            </>
        );
    }
}
 
export default Socials;