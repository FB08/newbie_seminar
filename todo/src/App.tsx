// imoprt 영역
import { useState, useRef } from "react";
import Button from "./components/Button";
import TodoListBox from "./components/TodoListBox";
import Modal from "./components/Modal";

// type 정의 영역
export type Todo = {
  id: number;
  content: string;
}

function App(){
  // 상태 선언


  const [todos, setTodos] = useState<Todo[]>([]) 
  // todos는 Todo 타입으로 이루어진 배열이고 초기값은 []

  const [modalType, setModalType] = useState<'add' | 'edit' | 'delete' | null>(null)
  // modalType은 위 4가지 값중 하나만 가능

  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null)

  const nextId = useRef(0);

  // 함수 선언 ( 변수가 이 함수에서 정의되어서 여기서 함수 정의 필요 )

  const addTodo = (content: string) => {
    const newTodo = { id: nextId.current, content }
    setTodos([...todos, newTodo]) // ...array => spread함수. 쭉 펼쳐진것처럼 작동
    nextId.current += 1
  }

  const editTodo = (id:number, content: string) =>{
    setTodos(todos.map(todo => todo.id === id ? { ...todo, content } : todo))
    // 나중에 todo에 추가적인 속성이 생길 수 있어 {id, content}보다 spread 권장
  }

  const deleteTodo = (id:number) => {
    setTodos(todos.filter(todo => todo.id!==id))
  }

  const openModal = (type: 'add' | 'edit' | 'delete', todo?:Todo) => {
    setModalType(type)
    setSelectedTodo(todo || null) // edit/delete 할 때는 todo 정보 필요
  }

  const closeModal = () => {
    setModalType(null)
    setSelectedTodo(null)
  }
  

  return(
    <>
      <header>
        <h1>Todo List</h1>
      </header>

      <main>
        <div>
          <Button label="추가" color='dark green' onClick={() => openModal('add')} />
          <TodoListBox 
            todos={todos} 
            onEditClick={(id) => openModal('edit', todos.find(todo => todo.id === id))} 
            onDeleteClick={id => openModal('delete', todos.find(todo => todo.id === id))}/>
          {modalType && (
            <Modal
              modalType={modalType}
              selectedTodo={selectedTodo}
              onClose={closeModal}
              onAdd={addTodo}
              onEdit={editTodo}
              onDelete={deleteTodo}
            />
          )}
        </div>
      </main>
    </>
  )

}
export default App