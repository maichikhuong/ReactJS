import { useState } from 'react'

const MyComponent = () => {

    const [newTodo, setnewTodo] = useState("Khuong");
    const [listTodo, setlistTodo] = useState([
        { id: 'abcJob1', title: 'developer' },
        { id: 'abcJob2', title: 'tester' },
        { id: 'abcJob3', title: 'project manager' },
    ])
    const handleChangeInput = (event) => {
        console.log(event.target.value)
        setnewTodo(event.target.value)
    }

    const handleAddTodo = () => {
        setlistTodo([...listTodo, { id: Math.floor(Math.random() * 1001), title: newTodo }])
    }

    const handleDeleteTodo  = (todoId) => {
        let newFilter = listTodo.filter(item => item.id !== todoId);
        setlistTodo(newFilter)
    }

    return (
        <div>
            <div>
                To do List
            </div>
            {listTodo.map((todo, index) => {
                console.log(todo, index)
                return (
                    <div>
                        {index + 1}. {todo.title}
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                    </div>
                )
            })}
            <br />
            <div>
                My to do = {newTodo}
            </div>
            <input type='text' onChange={(event) => handleChangeInput(event)} />
            <button onClick={() => handleAddTodo()}>Add to do</button>
        </div>
    )
}

export default MyComponent;