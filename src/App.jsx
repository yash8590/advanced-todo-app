import React,{useEffect,useState} from 'react';
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Todos from './pages/Todos';
import About from './pages/About';
import {fetchTodos} from './services/api';

export default function App(){
const [todos,setTodos]=useState(JSON.parse(localStorage.getItem('todos')||'[]'));
const [loading,setLoading]=useState(false);
const [error,setError]=useState('');
const [dark,setDark]=useState(false);

useEffect(()=>{localStorage.setItem('todos',JSON.stringify(todos));},[todos]);

useEffect(()=>{
if(todos.length===0){
setLoading(true);
fetchTodos().then(r=>{
setTodos(r.data.map(x=>({id:x.id,text:x.title,completed:x.completed})));
setLoading(false);
}).catch(()=>{setError('API Failed');setLoading(false);});
}
},[]);

return <div className={dark?'dark':''}><div className='container'>
<Navbar/>
<button onClick={()=>setDark(!dark)}>Toggle Dark Mode</button>
{loading && <p>Loading...</p>}
{error && <p>{error}</p>}
<Routes>
<Route path='/' element={<Dashboard todos={todos}/>}/>
<Route path='/todos' element={<Todos todos={todos} setTodos={setTodos}/>}/>
<Route path='/about' element={<About/>}/>
</Routes>
</div></div>
}