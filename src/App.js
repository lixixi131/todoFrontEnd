import Todo from "./Todo";
import { useState, useEffect } from "react";
import { Paper, List, Container } from "@material-ui/core";
import AddTodo from "./AddTodo";

const App = () => {

  const [items, setItems] = useState([''])

  useEffect(() => {
    setItems([{ id: 1, title: "todo1", done: false }, { id: 2, title: "todo2", done: true }])
  }, [])

  useEffect(()=>{
    //console.log("cur items : " , items);
  },[items])

  const todoList = items.map((item, idx) => {
    //console.log(item);
    <Todo item={item} setItems={setItems} />
  })

  const add = (item) => {

    let copiedItems = [...items];

    const maxId = copiedItems.reduce((prev , value) =>{
      return prev.id >= value.id ? prev : value
    })


    item.id = maxId.id + 1;
    item.done = false;
    copiedItems.push(item);

    setItems(copiedItems);

  }

  const deleteTodo = (item) =>{
    
    let copiedItems = [...items];
    copiedItems = copiedItems.filter(e => e.id !== item.id);
    setItems(copiedItems);


  }


  return (
    <div className="App">
      <Container maxWidth ="md">
        <AddTodo add = {add}></AddTodo>
        <Paper style={{margin:16}}>
          <List>
            {items.map((item) => {
              return (
                <Todo item={item} items={items} setItems={setItems} deleteTodo = {deleteTodo} key = {item.id}  />
              )
            })}
          </List>
        </Paper>
      </Container>



    </div>
  )
}

export default App;