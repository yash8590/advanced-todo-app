import {useState} from 'react'; import TodoItem from '../components/TodoItem';
export default function Todos({todos,setTodos}){
const [task,setTask]=useState(''); const [search,setSearch]=useState('');
const add=()=>{if(!task)return; setTodos([...todos,{id:Date.now(),text:task,completed:false}]); setTask('');};
const del=id=>setTodos(todos.filter(t=>t.id!==id));
const tog=id=>setTodos(todos.map(t=>t.id===id?{...t,completed:!t.completed}:t));
const edit=id=>{const txt=prompt('Edit task'); if(txt) setTodos(todos.map(t=>t.id===id?{...t,text:txt}:t));};
const filtered=todos.filter(t=>t.text.toLowerCase().includes(search.toLowerCase()));
return <div><input placeholder='Search' value={search} onChange={e=>setSearch(e.target.value)}/><br/>
<input value={task} onChange={e=>setTask(e.target.value)} placeholder='Add task'/><button onClick={add}>Add</button>
{filtered.map(t=><TodoItem key={t.id} todo={t} onToggle={tog} onDelete={del} onEdit={edit}/>)}</div>
}