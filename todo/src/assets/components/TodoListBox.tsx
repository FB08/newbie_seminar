import type { Todo } from "../../App"
import TodoItem from "./TodoItem"

type TodoListBoxProps = {
    todos: Todo[]
    onEdit: (id: number, content:string) => void
    onDelete: (id: number) => void
}

function TodoListBox({todos, onEdit, onDelete} : TodoListBoxProps){
    return(
        <div>
            {todos.map(todo => <TodoItem key={todo.id} todo={todo} onEdit={onEdit} onDelete={onDelete} />)}
        </div>
    )
}

export default TodoListBox