import type { Todo } from '../../App.tsx'
import Button from './Button.tsx'

type TodoItemProps = {
    todo: Todo
    onEdit: (id: number, content:string) => void
    onDelete: (id: number) => void

}

function TodoItem({ todo, onEdit, onDelete } : TodoItemProps){

    return (
        <div style={{
            padding: '10px',
            display: 'block'
        }}>
            <span>{todo.content}</span>
            <Button label="수정" color="blue" onClick={() => onEdit(todo.id, todo.content)} />
            <Button label="삭제" color="red" onClick={() => onDelete(todo.id)} />
        </div>
    )
}

export default TodoItem