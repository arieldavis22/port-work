import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import '../css/Contact.css'
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            name: "",
            email: "",
            message: ""
        }
    }

    handleChange = (event) => {
        const target = event.target
        const name = target.name
        this.setState({
            [name]: event.target.value
        })
        console.log(this.state);
    }
    render() { 
        return (  
            <>
            <Fade>
                    <div className={"con-container"}>
                        <form>
                            <label>
                                First & Last Name:
                                <input type="text" name="name" onChange={this.handleChange}/>
                            </label>
                            <br/>
                            <label>
                                Email Address:
                                <input type="email" name="address" onChange={this.handleChange}/>
                            </label>
                            <br/>
                            <label>
                                Message:
                                <textarea onChange={this.handleChange}/>
                            </label>
                        </form>
                    </div>
            </Fade>
            </>
        );
    }
}
 
export default Contact;