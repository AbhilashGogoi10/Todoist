import React, {useState} from 'react'

const EditTodoForm = ({editTodo, task}) => {
  const [value, setValue] = useState(task.task)

  const handleSumbit = e =>{
    e.preventDefault();
    
    
    editTodo(value, task.id)
    setValue("")
    
  }
  return (
    <form className='TodoForm' onSubmit={handleSumbit} >
      <input type="text" className='todo-input' placeholder='Update Todo' 
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button type='submit' className='todo-btn'>Update todo</button>
    </form>
  )
}

export default EditTodoForm;