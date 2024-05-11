import React from "react";

class MyComponent extends React.Component {

    // key:value
    state = {
        name: 'Khuong',
        channel: 'MyChannel'
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleClickButton = () => {
        console.log('check click me')
        alert('click me')
    }

    render() {

        // let name = 'Khuong';

        return (
            <>
                <div className="first">
                    {/* {console.log('My name is: ', name)} */}
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    /> 
                    My Name is  {this.state.name}
                </div>
                <div className="second">
                    Hello, my channel is {this.state.channel}
                </div>
                <div className="third">
                    <button onClick={()  => this.handleClickButton()}>Click Me</button>

                </div>
            </>
        )
    }

}

export default MyComponent;