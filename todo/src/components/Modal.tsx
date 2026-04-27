import { useEffect, useState } from 'react'
import type { Todo } from '../App.tsx'
import Button from './Button.tsx'
import '../index.css'

type ModalProps = {
    modalType: 'add' | 'edit' | 'delete' | null
    selectedTodo: Todo | null
    onClose: () => void
    onAdd: (content: string) => void
    onEdit: (id: number, content: string) => void
    onDelete: (id:number) => void
}

function Modal({ modalType, selectedTodo, onClose, onAdd, onEdit, onDelete } : ModalProps){
    const [inputValue , setInputValue ] = useState('')

    useEffect(() => {
        if (modalType === 'edit'){
            setInputValue(selectedTodo?.content || '')
        } else{
            setInputValue('')
        }
    }, [modalType])

    return (
        <div className="modal">
            {modalType === 'add' && (
                <div>
                    <h1>추가</h1>
                    <textarea 
                        value={inputValue} 
                        onChange={(e) => setInputValue(e.target.value)} />
                    <Button label="완료" color="blue" onClick={() => {
                        onAdd(inputValue) 
                        onClose()}}></Button>
                </div>
                )
            }
            {modalType === 'edit' && (
                <div>
                    <h1>수정</h1>
                    <textarea
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)} />
                    <Button label="완료" color="blue" onClick={() =>{
                        onEdit(selectedTodo?.id ?? 0, inputValue)
                        onClose()
                    }} />
                </div>

            )}
            {modalType === 'delete' && (
                <div>
                    <h1>삭제</h1>
                    <h3>정말 삭제하시겠습니까?</h3>
                    <Button label="삭제" color="red" onClick={() => {
                        onDelete(selectedTodo?.id ?? 0)
                        onClose()
                    }} />
                    <Button label="취소" color="black" onClick={onClose } />
                </div>
            )}

        </div>
    )
}

export default Modal