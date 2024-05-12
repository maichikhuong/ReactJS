import React from "react";

class ChildComponent extends React.Component {

    // key:value
    state = {
        firstName: '',
        lastName: ''
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
        console.log('Check props:', this.props)
        let {name, age, address, arrJobs} = this.props

        return (
            <>
            <div className="job-lists">
                {
                    arrJobs.map((item, index) => {
                        return (
                            <div key = {item.id}>
                                {item.title} - {item.salary}
                            </div>
                        )
                    })
                }
            </div>
            </>
        )
    }

}

export default ChildComponent;