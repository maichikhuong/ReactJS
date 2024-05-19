import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {

    // key:value
    state = {
        arrJobs: [
            {id: 'abcJob1', title: 'developer', salary: '500'},
            {id: 'abcJob2', title: 'tester', salary: '400'},
            {id: 'abcJob3', title: 'project manager', salary: '700'},
        ]
    }

    addNewJob = (job) => {
        console.log('Check Job from Parent', job)
        // let currentJob = this.state.arrJobs
        // currentJob.push(job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
            // arrJobs: currentJob
        })

    }

    deleteJob = (job) => {
        let currentJob = this.state.arrJobs
        currentJob = currentJob.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJob
        })
    }

    componentDidUpdate(preProps, prevstate){
        console.log('Run didupdate', 'prev state: ', prevstate, 'current state: ', this.state)
    }

    componentDidMount() {
        console.log('>>>Run component did mount')
    }

    render() {

        // let name = 'Khuong';
        console.log("Call render", this.state)
        return (
            <>
            <AddComponent 
            addNewJob = {this.addNewJob}
            
            />
            <ChildComponent 
            arrJobs = {this.state.arrJobs}
            deleteJob = {this.deleteJob}
            />
            </>
        )
    }

}

export default MyComponent;