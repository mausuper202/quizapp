import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

// class MyComponent extends React.Component {
//   state = {
//     listUsers: [
//       { id: 1, name: "Le Hoang Quy", age: "22" },
//       { id: 2, name: "Mau Super", age: "18" },
//       { id: 3, name: "Quy Hoang", age: "25" },
//     ],
//   };

//   handleAddNewUser = (userObj) => {
//     this.setState({
//       listUsers: [userObj, ...this.state.listUsers],
//     });
//   };

//   handleDeleteUser = (userId) => {
//     let listUsersClone = this.state.listUsers;
//     listUsersClone = listUsersClone.filter((item) => item.id !== userId);
//     this.setState({
//       listUsers: listUsersClone,
//     });
//   };
//   render() {
//     return (
//       <div>
//         <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
//         <DisplayInfor
//           listUsers={this.state.listUsers}
//           handleDeleteUser={this.handleDeleteUser}
//         />
//       </div>
//     );
//   }
// }

const MyComponent = (props) => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: "Le Hoang Quy", age: "22" },
    { id: 2, name: "Mau Super", age: "18" },
    { id: 3, name: "Quy Hoang", age: "25" },
  ]);

  const handleAddNewUser = (userObj) => {
    setListUsers([userObj, ...listUsers]);
    // this.setState({
    //   listUsers: [userObj, ...this.state.listUsers],
    // });
  };

  const handleDeleteUser = (userId) => {
    let listUsersClone = listUsers;
    listUsersClone = listUsersClone.filter((item) => item.id !== userId);
    setListUsers(listUsersClone);
    // this.setState({
    //   listUsers: listUsersClone,
    // });
  };

  return (
    <>
      <AddUserInfor handleAddNewUser={handleAddNewUser} />
      <DisplayInfor listUsers={listUsers} handleDeleteUser={handleDeleteUser} />
    </>
  );
};
export default MyComponent;
