import React ,{ useState , useEffect} from 'react';
import { Button ,FormControl,InputLabel,Input} from '@material-ui/core';
import Todo from "./Todo";
import './App.css';
import db from './firebase';
import firebase from 'firebase';
function App() {
  const[todos,setTodos]=useState([]);
  const[input,setInput]=useState('');
  //when the app loads we need to listen to the database and fetch new todos as they get added / removed
  useEffect(() => {
    //this code here fires when app.js loads
      db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot =>{
      // console.log(snapshot.docs.map(doc => doc.data()));//return object
    setTodos(snapshot.docs.map(doc => ({id:doc.id, todo : doc.data().todo})))
  })
  }, []); 
  // console.log('🔫',input);
  const addTodo = (event) =>{
    //this will fire off when button is trigger
    event.preventDefault();
    db.collection('todos').add({
     todo:input,
  timestamp: firebase.firestore.FieldValue.serverTimestamp() || null
    })
    // setTodos([...todos,input]); 
    setInput(''); //clean up the input after clicking add todo list
      
  }
  return (
    <div className="App">
      <h1>😍😍TODO🥰🥰</h1>
      <form>
      <FormControl>
  <InputLabel>✅Write a todo list</InputLabel>
  <Input  value={input} onChange={event=>setInput(event.target.value)}/>
</FormControl>
      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color ="primary">Add Todo</Button>
      </form>
     
       <ul>
        {todos.map(todo =>(
         <Todo todo = {todo}/>
        ))}
       </ul>
    </div>
  );
}

export default App;
