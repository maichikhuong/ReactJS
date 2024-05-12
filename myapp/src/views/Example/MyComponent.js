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


    render() {

        // let name = 'Khuong';

        return (
            <>
            <AddComponent />
            <ChildComponent 
            arrJobs = {this.state.arrJobs}
            />
            </>
        )
    }

}

export default MyComponent;