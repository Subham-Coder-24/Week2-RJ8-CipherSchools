import React,{useState} from 'react'
// import Test from './Test'
const UserDetails = ({ user={} })=> {
    const [h1text,setH1Text] = useState("This is demo Component");
    return(
        <div>
            <h3>{user.name}<br/>
            Email: {user.email}<br/>
            Phone Number: {user.phone}</h3>
            <h1> {h1text}</h1>
            <button onClick={(e)=>{
               setH1Text("This is cipher school")
            }}>Click me!</button>
        </div>
    )
}


// const UserDetails = (props)=> {
//     let {user} = props;
//     return(
//         <div>
//             <h3>{user.name}<br/>
//             Email: {user.email}<br/>
//             Phone Number: {user.phone}</h3>
//         </div>
//     )
// }
// class UserDetails extends Component {

//     user = this.props.user;

//     render(){
//         return (
//         <div>
//             <h3>
//                 {this.user.name}
            
//             Email: {this.user.email}<br/>
//              Phone Number: {this.user.phone}</h3>
//         </div>
//         );    
// }


// }

export default UserDetails