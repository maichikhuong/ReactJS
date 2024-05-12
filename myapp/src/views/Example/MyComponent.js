import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {

    // key:value
    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            {id: 'abcJob1', title: 'developer', salary: '500'},
            {id: 'abcJob2', title: 'tester', salary: '400'},
            {id: 'abcJob3', title: 'project manager', salary: '700'},
        ]
    }

    handleChangeFirstName = (event) =>{
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
        
    }

    render() {

        // let name = 'Khuong';

        return (
            <>
            <form>
                <label htmlFor="fname">First name:</label><br/>
                <input 
                type="text" 
                value={this.state.firstName}
                onChange={(event) => this.handleChangeFirstName(event)}
                /><br/>
                <label htmlFor="lname">Last name:</label><br/>
                <input 
                type="text" 
                value={this.state.lastName}
                onChange={(event) => this.handleChangeLastName(event)}
                /><br/><br/>
                <input type="submit" value="Submit"
                onClick={(event) => this.handleSubmit(event)}
                />
            </form>
            <ChildComponent 
            name = {this.state.firstName}
            age = {'28'}
            address = {'Ho Chi Minh'}
            arrJobs = {this.state.arrJobs}
            />
            </>
        )
    }

}

export default MyComponent;