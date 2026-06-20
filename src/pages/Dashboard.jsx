export default function Dashboard({todos}){
const completed=todos.filter(t=>t.completed).length;
return <div><div className='card'>Total:{todos.length}</div><div className='card'>Completed:{completed}</div><div className='card'>Pending:{todos.length-completed}</div></div>
}