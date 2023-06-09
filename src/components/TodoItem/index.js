import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteUser} = props
  const {id, title} = todoDetails
  const deleteTodo = () => {
    deleteUser(id)
    console.log(`id is ${id}`)
  }

  return (
    <li>
      <div className="todo-item-container">
        <p className="para">{title}</p>

        <button type="button" className="button" onClick={deleteTodo}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
