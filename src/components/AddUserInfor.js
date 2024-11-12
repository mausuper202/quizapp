import React, { useState } from "react";

// class AddUserInfor extends React.Component {
//   state = {
//     name: "Le Hoang Quy",
//     age: "22",
//     address: "Sai Gon",
//   };

//   handleOnChangeName = (event) => {
//     this.setState({
//       name: event.target.value,
//     });
//   };

//   handleOnChangeAge = (event) => {
//     this.setState({
//       age: event.target.value,
//     });
//   };

//   handleOnSubmit = (event) => {
//     event.preventDefault();
//     console.log(this.state);
//     this.props.handleAddNewUser({
//       id: Math.floor(Math.random() * 100 + 1) + "-random",
//       name: this.state.name,
//       age: this.state.age,
//     });
//   };

//   render() {
//     return (
//       <div>
//         My name is {this.state.name}
//         <form onSubmit={(event) => this.handleOnSubmit(event)}>
//           Name:{" "}
//           <input
//             value={this.state.name}
//             type="text"
//             onChange={(event) => this.handleOnChangeName(event)}
//           />{" "}
//           <br />
//           Age:{" "}
//           <input
//             value={this.state.age}
//             type="text"
//             onChange={(event) => this.handleOnChangeAge(event)}
//           />
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

const AddUserInfor = (props) => {
  //   state = {
  //     name: "Le Hoang Quy",
  //     age: "22",
  //     address: "Sai Gon",
  //   };

  //   handleOnChangeName = (event) => {
  //     this.setState({
  //       name: event.target.value,
  //     });
  //   };

  //   handleOnChangeAge = (event) => {
  //     this.setState({
  //       age: event.target.value,
  //     });
  //   };

  //   handleOnSubmit = (event) => {
  //     event.preventDefault();
  //     console.log(this.state);
  //     this.props.handleAddNewUser({
  //       id: Math.floor(Math.random() * 100 + 1) + "-random",
  //       name: this.state.name,
  //       age: this.state.age,
  //     });
  //   };
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");

  const handleOnChangeName = (event) => {
    setName(event.target.value);
    // this.setState({
    //   name: event.target.value,
    // });
  };

  const handleOnChangeAge = (event) => {
    setAge(event.target.value);
    // this.setState({
    //   age: event.target.value,
    // });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: name,
      age: age,
    });
  };
  return (
    <div>
      My name is {name}
      <form onSubmit={(event) => handleOnSubmit(event)}>
        Name:{" "}
        <input
          value={name}
          type="text"
          onChange={(event) => handleOnChangeName(event)}
        />{" "}
        <br />
        Age:{" "}
        <input
          value={age}
          type="text"
          onChange={(event) => handleOnChangeAge(event)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddUserInfor;
