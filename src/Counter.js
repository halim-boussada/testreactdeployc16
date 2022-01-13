import React, { useState } from "react";

// https://fr.reactjs.org/docs/hooks-intro.html
// https://reactjs.org/docs/react-component.html



function Counter(props) {
  var [count, setCount] = useState(props.test);
 
  function inc() {
    setCount(count + 1);
  }

  return (
    <div>
       
      <h1>this is a counter {count}</h1>
      <button
        type="button"
        className="btn btn-success"
        onClick={() => {
          inc();
        }}
      >
        Increment
      </button>
    </div>
  );
}

// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       name : "halim"
//     };
//   }
//   inc() {
//     this.setState({ count: this.state.count + 1 });
//   }
//   render() {
//     return (
//       <div>
//         <h1> this is a counter {this.state.count}</h1>
//         <button
//           type="button"
//           className="btn btn-success"
//           onClick={() => {
//             this.inc();
//           }}
//         >
//           Increment
//         </button>
//       </div>
//     );
//   }
// }

export default Counter;
