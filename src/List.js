import React, { useState, useEffect } from "react";
import axios from "axios";

function List() {
  var [list, setList] = useState([]);
  var [newTodo, setNewTodo] = useState("");
  useEffect(() => {
    // get the data from server by a get request
    axios.get("https://class17-todo.herokuapp.com/todo").then(({ data }) => {
      // set the data into the state "list"
      setList(data);
    });
  });

  function addTodo() {
    // sending a post request to set the data in the server
    // data =  { todo: newTodo }
    axios
      .post("https://class17-todo.herokuapp.com/todo/create", { todo: newTodo })
      .then(({ data }) => {
        alert(data.msg);
      });
  }

  function del(id) {
    // take the id and send a delete request to delete the data  from server
    axios
      .delete("https://class17-todo.herokuapp.com/todo/" + id)
      .then(({ data }) => {
        alert(data.msg);
      });
  }

  function update(id) {
    // we are sending a put request to update the data  
    axios
      .put("https://class17-todo.herokuapp.com/todo/" + id, { todo: newTodo })
      .then(({ data }) => {
        alert(data.msg);
      });
  }
  return (
    <div>
      {/* taking the value from input  */}
      <input
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />
      {/* sending the request   */}
      <button
        onClick={() => {
          addTodo();
        }}
      >
        add
      </button>
      {/* displaying the data from state "list" */}
      {list.map((element) => (
        <div key={element._id}>
          <li>{element.todo}</li>
          {/* deleting the data  */}
          <button
            onClick={() => {
              del(element._id);
            }}
          >
            delete
          </button>
           {/* updateing data  */}
          <button
            onClick={() => {
              update(element._id);
            }}
          >
            update
          </button>
        </div>
      ))}
    </div>
  );
}

// CREATE DATA post
// RETRIEVE DATA get
// DELETE DATA delete
// Update data put

// CRUD 





// class List extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { listofitems: [] };
//   }

//   componentDidMount() {
//     axios.get("https://jsonplaceholder.typicode.com/posts").then(({ data }) => {
//       this.setState({ listofitems: data });
//     });
//   }

//   render() {
//     return (
//       <div>
//         {this.state.listofitems.map((e) => (
//           <li key={e.id}>{e.title}</li>
//         ))}
//       </div>
//     );
//   }
// }

// handle click
// handle change
// state
// some desing
// advased part
// try to use api

export default List;
