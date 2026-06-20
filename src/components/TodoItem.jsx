export default function TodoItem({todo,onToggle,onDelete,onEdit}){
return <div className='todo'><span className={todo.completed?'done':''}>{todo.text}</span>
<div><button onClick={()=>onEdit(todo.id)}>Edit</button><button onClick={()=>onToggle(todo.id)}>Done</button><button onClick={()=>onDelete(todo.id)}>Delete</button></div></div>}