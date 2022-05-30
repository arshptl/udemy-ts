import axios from 'axios';

const singleTodoUrl = 'https://jsonplaceholder.typicode.com/todos/1'

axios.get(singleTodoUrl).then(response => { 
    console.log(response.data)
})
