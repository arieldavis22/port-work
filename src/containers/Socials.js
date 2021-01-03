import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGithub } from '@fortawesome/f?ee-solid-svg-icons'
class Socials extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                Socials
                <FontAwesomeIcon icon="coffee" />
            </div>
        );
    }
}
 
export default Socials;