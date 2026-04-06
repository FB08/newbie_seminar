import type { Todo } from "../App"
import TodoItem from "./TodoItem"

type TodoListBoxProps = {
    todos: Todo[]
    onEditClick: (id: number) => void
    onDeleteClick: (id: number) => void
}

function TodoListBox({todos, onEditClick, onDeleteClick} : TodoListBoxProps){
    return(
        <div>
            {todos.map(todo => <TodoItem key={todo.id} todo={todo} onEditClick={onEditClick} onDeleteClick={onDeleteClick} />)}
            {/* JSX에서는 shorthand 불가 */}
        </div>
    )
}

export default TodoListBox