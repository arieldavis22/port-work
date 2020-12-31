import React, { Component } from 'react';
import '../css/Contact.css'
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  

        }
    }
    render() { 
        return (  
            <div className={"con-container"}>
                <form>
                    <label>
                        First & Last Name:
                        <input type="text" name="name"/>
                    </label>
                    <br/>
                    <label>
                        Email Address:
                        <input type="email" name="address"/>
                    </label>
                    <br/>
                    <label>
                        Message:
                        <textarea/>
                    </label>
                </form>
            </div>
        );
    }
}
 
export default Contact;