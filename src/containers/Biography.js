import React, { Component } from 'react';
import pic from '../pictures/pfp.png'
import '../css/Biography.css'
import Fade from 'react-reveal/Fade';
class Biography extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <>
            <Fade top duration={3000}>
                <div className={'bio-container'}>
                    <img src={pic}  alt="error" className={"profile-img"}/>
                    <Fade delay={1000}>
                        <div className={'bio-desc'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </Fade>
                </div>
            </Fade>
            </>
        );
    }
}

export default Biography;