import React from 'react';


class ClaimRuleEngine extends React.Component {

    state = {
        Result: {
            Request_Amount: 'Passed',
            Hospital_Class: "Passed",
            Days_In_Hospital: 'Passed',
            Policy_Duration: 'Passed'
        },
        showPostPrediction: false
    }

    handlShowHide = () => {
        this.setState({
            showPostPrediction: !this.state.showPostPrediction
        })
    }
    render() {
        let { Result, showPostPrediction } = this.state
        let check = showPostPrediction === true ? 'showPostPrediction = true' : 'showPostPrediction = false'
        return (
            <>
                {showPostPrediction === false ? <div>
                    <button onClick={() => this.handlShowHide()}>
                        Show PostPrediction Detail
                    </button>
                </div>
                    :
                    <>
                        <div>
                            <button onClick={() => this.handlShowHide()}>Hide PostPrediction Detail</button>
                        </div>
                        <div className="Check-Rule" style={{ border: '3px solid black', width: '400px', height: '100px', overflow: 'scroll' }}>
                        <script>

                        </script>
                            <p>Request Amount: {Result.Request_Amount}</p>
                            <p>Hospital Class: {Result.Hospital_Class}</p>
                            <p>Days In Hospital: {Result.Days_In_Hospital}</p>
                            <p>Policy Duration: {Result.Policy_Duration}</p>
                        </div>
                    </>
                }
            </>

        );
    }
}

export default ClaimRuleEngine;

