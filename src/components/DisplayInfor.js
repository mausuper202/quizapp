import React, { useState } from "react";

// class DisplayInfor extends React.Component {
//   render() {
//     const { listUsers } = this.props;
//     console.log(listUsers);
//     return (
//       <>
//         {true && (
//           <div>
//             {listUsers.map((user) => {
//               return (
//                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                   <div>My name is {user.name}</div>
//                   <div>I'm {user.age}</div>
//                   <button
//                     onClick={() => {
//                       this.props.handleDeleteUser(user.id);
//                     }}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </>
//     );
//   }
// }

const DisplayInfor = (props) => {
  const { listUsers } = props; //obj
  const [isShowHideListUser, setShowHideListUser] = useState(true);
  const handleShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser);
  };
  return (
    <div>
      <div>
        <span onClick={() => handleShowHideListUser()}>
          {isShowHideListUser === true ? "Hide List User" : "Show List User"}
        </span>
      </div>
      {isShowHideListUser && (
        <>
          {listUsers.map((user) => {
            return (
              <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                <div>My name is {user.name}</div>
                <div>I'm {user.age}</div>
                <button
                  onClick={() => {
                    props.handleDeleteUser(user.id);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default DisplayInfor;
