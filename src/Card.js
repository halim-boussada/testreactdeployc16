import "./style.css";
import React from "react";
// functional component
// function Card(props) {
//   return (
//     <div>
//       <div>
//         <img src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" />
//         <div>
//           <h5 id="m">
//             {props.title ? props.title : "this is a default title"}
//           </h5>
//           <p className="g">
//             {props.text ? props.text : "this is a default text"}
//           </p>
//           <a>Go somewhere</a>
//         </div>
//       </div>
//     </div>
//   );
// }

// class component
class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  alertt(name) {
    alert(`hello ${name}`);
  }

  render() {
    return (
      <div>
        <div>
          <img src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" />
          <div>
            <h5 id="m">
              {this.props.title ? this.props.title : "this is a default title"}
            </h5>
            <p className="g">
              {this.props.text ? this.props.text : "this is a default text"}
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                this.alertt(this.props.title);
              }}
            >
              Primary
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
