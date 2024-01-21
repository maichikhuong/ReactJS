import React from "react";

class MyComponents extends React.Component {

    /* 
    JSX => return block
    */
    state = {
        name: "",
        channel: "Hoc ReactJS"

    }

    handleOnchangeName = (event) => {
        // console.log(event.target.value, "Event Target: ", event.target, "Event value: ", event)
        this.setState({
            name: event.target.value,
            channel: 'abc'
        })
    }

    handleClickButton = () => {
        alert("Click Me")
    }

    // re-render
    render() {

        // let name = 'Khuong'
        console.log("My state is ", this.state)
        return (
            // <React.Fragment>
            <>
            
                <div className="first">
                    <input value={this.state.name} type="text"
                    onChange={(event) => this.handleOnchangeName(event)}
                    />
                    Hello my name is {this.state['name']}
                </div>
                <div className="second">
                    Hello my channel is {this.state.channel}
                </div>
                <div className="third">
                    <button onClick={() => this.handleClickButton()}>Click Me</button>
                </div>
            </>
            // </React.Fragment>
        )
    }

}

export default MyComponents;