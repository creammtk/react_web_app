import React, {useState} from 'react'
import { TodoForm } from './TodoForm'
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';

export const TodoWrapper = () => {
        const [todos, setTodos] = useState([])

        const addTodo = (todo) => {
            const isNeverInserted = todos.filter((abc) => {
                return abc.task === todo
            }).length === 0
            if (!isNeverInserted) {
                alert('the task is already inserted')
                return
            }
            setTodos(
                [...todos, 
                    {
                        id: todos.length + 1,
                        task: todo,
                        completed: false, 
                        isEditing: false
                    }
                ])
        }

        const toggleComplete = (id) => {
            setTodos(todos.map(todo => todo.id === id ? 
                {
                    ...todo, 
                    completed: !todo.completed
                } : 
                todo
                )
                )
        }

        const deleteTodo = (id) => {
            setTodos(todos.filter(todo => todo.id !== id))
        }

        const editTodo = id => {
            setTodos(todos.map(todo => todo.id === id? {...
            todo, isEditing: !todo.isEditing} :todo))
        }

        const editTask = (task, id) => {
            const target = todos.filter((todo) => todo.id === id)[0]
            // {
            //     id: todos.length + 1,
            //     task: todo,
            //     completed: false, 
            //     isEditing: false
            // }
            if (target.completed) return
            setTodos(todos.map(todo => todo.id === id ? 
                {
                    ...todo, 
                    task, 
                    isEditing: !todo.isEditing
                } : todo))
        }
        
    return (
        <div className = 'TodoWrapper'>
            <h1>Get Things Done!</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoForm key={index} editTodo={editTask} task={todo}/>
                ) : (
                    <Todo task={todo} key={index}
                    toggleComplete={toggleComplete} 
                    deleteTodo={deleteTodo} editTodo={editTodo} />
                )
            ))}

        </div>
    )
}
;