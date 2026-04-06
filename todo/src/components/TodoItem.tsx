import type { Todo } from '../App.tsx'
import Button from './Button.tsx'

type TodoItemProps = {
    todo: Todo
    onEditClick: (id: number) => void
    onDeleteClick: (id: number) => void

}

function TodoItem({ todo, onEditClick, onDeleteClick } : TodoItemProps){

    return (
        <div style={{
            padding: '10px',
            display: 'block'
        }}>
            <span>{todo.content}</span>
            <Button label="수정" color="blue" onClick={() => onEditClick(todo.id)} />
            <Button label="삭제" color="red" onClick={() => onDeleteClick(todo.id)} />
        </div>
    )
}

export default TodoItem