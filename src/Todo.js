import React,{useState} from 'react'
import db from './firebase'
import {Button, List,ListItem,ListItemAvatar,ListItemText,Modal} from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
function Todo(props) {
    const [open , setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    }
    return (
        <>
        <Modal
         open = {open} 
         onClose = {e=>setOpen(false)} 
        >
         <div>
             <h1>I am a model</h1>
             <button onClick ={e=>setOpen(false)}></button>
         </div>
        </Modal>
       <List className = "todo_list">
       <ListItem>
       <ListItemAvatar>
       </ListItemAvatar>
       <ListItemText primary ={props.todo.todo} secondary = "Dummy deadline ⏰"/>
       </ListItem>
       <button onClick = {e => setOpen(true)}>Edit</button>
       <DeleteForeverIcon onClick={event =>db.collection('todos').doc(props.todo.id).delete()}>❌ Delete Me</DeleteForeverIcon>
       </List>
       </>
    )
}

export default Todo
