import React from 'react'
import { useState , setState } from 'react';
import DeleteOutlined from "@material-ui/icons/DeleteOutlineOutlined";
import { ListItem ,ListItemText , InputBase , Checkbox , ListItemSecondaryAction , IconButton } from '@material-ui/core';


const Todo = ({item , items , setItems , key , deleteTodo}) =>{

    const [readOnly,setReadOnly] = useState(true);

    const deleteEventHandler = () =>{
        deleteTodo(item);
    }

    const offReadOnlyMode = () =>{
        setReadOnly(false);
        
    }

    const enterKeyEventHandler = (e) =>{
        if(e.key === "Enter"){
            setReadOnly(true);
        }
    }

    const editEventHandler = (e,id) =>{
        const thisItem = item;
        thisItem.title = e.target.value;
        //console.log(e.target.value);

        items.map((item , idx) =>{

            if(item.id === id){
                let copied = [...items];
                copied[idx].title = e.target.value;
                setItems(copied)
            }

        })


    }


    const todoCheckedHandler = (id) =>{
        
        items.map((item , idx) =>{

            if(item.id === id){
                let copied = [...items];
                copied[idx].done = item.done?false:true;
                setItems(copied)

            }

        })

    }


    return(

        <ListItem>
            <Checkbox
            checked = {item.done}
            onClick={() => todoCheckedHandler(item.id)}
            />
            <ListItemText>
                <InputBase
                inputProps = {{"aria-label" : "naked" , readOnly :readOnly}}
                type = "text"
                id = {item.id}
                name = {item.name}
                value = {item.title}
                multiline = {true}
                fullWidth = {true}
                onClick = {offReadOnlyMode}
                onChange={(e) => {editEventHandler(e, item.id)}}
                onKeyDown={enterKeyEventHandler}
                ></InputBase>
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label='Delete'
                onClick={deleteEventHandler}>
                    <DeleteOutlined></DeleteOutlined>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>




    )
}





export default Todo;