import axios from 'axios';
export const fetchTodos=()=>axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
