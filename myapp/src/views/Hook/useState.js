import { useState } from "react";

const LearnUseState = () => {

    // const initalValues = () => {
    //     let total = 0;
    //     for (let i = 0; i < 1000000; i++){
    //         total += 1;
    //     }
    //     console.log('initalValues')
    //     return total;
    // }
    const [count, setCount] = useState(0)
    const [user, setUser] = useState({
        name: 'Test',
        age: 12
    })
    const handleClick = () => {
        // setCount(Count + 1);
        setCount((prevState) => {
            return prevState + 1;
        });
        setCount((prevState) => {
            return prevState + 1;
        });
        setUser({name: 'updated'});
    }

    return (
        <>
            <div>Functional Component</div>
            <p>You clicked {count} times</p>
            <button onClick={handleClick}>Click me</button>
            <p>{JSON.stringify(user)}</p>
        </>
    )

}

export default LearnUseState