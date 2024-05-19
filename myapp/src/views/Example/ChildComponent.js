import React from "react";

class ChildComponent extends React.Component {

    state = {
        showJobs: false,
    }

    handlShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnClickDelete = (job) => {
        console.log('check handleOnClickDelete', job)
        this.props.deleteJob(job)

    }

    render() {

        // let name = 'Khuong';
        // console.log('Check props:', this.props)
        let { arrJobs } = this.props
        let { showJobs } = this.state
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false'
        console.log('Check conditonal', check)

        return (
            <>
                {showJobs === false ? <div>
                    <button onClick={() => this.handlShowHide()}>
                        Show
                    </button>
                </div>
                :
                    <>
                        <div className="job-lists">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} 
                                            <span onClick={() => this.handleOnClickDelete(item)}> x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handlShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>

        )
    }

}

// const ChildComponent  = (props) => {
//     let {arrJobs} = props

//         return (
//             <>
//             <div className="job-lists">
//                 {
//                     arrJobs.map((item, index) => {
//                         if(item.salary >= 500){


//                         return (
//                             <div key = {item.id}>
//                                 {item.title} - {item.salary} $
//                             </div>
//                         )
//                         }
//                     })
//                 }
//             </div>
//             </>
//         )
// }

export default ChildComponent;