// import React, { Component } from 'react'
// import Child from './child';
// import Lists from './Lists'

// export class Conditional extends Component {
//     constructor() {
//         super();
//         this.state = {
//             first_name: "Saharsh",
//             last_name: "Gupta",
//             count: 0,
//             show: true,
//             employee: ["Tarun", "Tushar", "Tania"],
//             userList: [
//                 { id: 1, name: "Ram", email: "Ram@gmail.com" },
//                 { id: 2, name: "Rohan", email: "Rohan@gmail.com" },
//                 { id: 3, name: "Ramesh", email: "Ramesh@gmail.com" },


//             ]
//         }
//     }

//     clickevents(type) {
//         this.setState({
//             show: !this.state.show
//         })
//     }


//     render() {

//         const empList = this.state.employee.map((item, index) => <h3 key={index}>{item} - {index} </h3>)

//         const userList = this.state.userList.map((item, index) => <Lists userInfo={item}/>)

//         return (
//             <div>

//                 {/* {empList} */}
//                 {userList}
// {/* 
//                 {
//                     this.state.show ? <p> Conditional View</p> : null
//                 }
//                 <Child name="Dummy" parentFn={this.clickevents} />
//                 <p>
//                     <button onClick={() => console.log(this.state)} onDoubleClick={() => this.clickevents('Parent')}>Parent button</button>
//                 </p> */}
//             </div>
//         )
//     }
// }

// export default Conditional
