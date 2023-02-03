// import React from 'react'
// // import Test from './Test'
// import AllUserList from './Components/AllUserList'
// import SumNumbers from './Components/SumNumber'
// import SignUpForm from './Components/SignUpForm'
// function App() {
//   return (
//     <div>
//       <h1>
//         {/* <Test key={1}/>
//          */}
//          {/* <AllUserList/> */}
//         {/* <SumNumbers/> */}
//         <SignUpForm/>
//       </h1>
//     </div>
//   )
// }

// export default App
// import React from "react";
// import SignUpForm from "./Components/SignUpForm"
// import { BrowserRouter,Routes,Route} from "react-router-dom";
// import Header from "./Components/Header";
// import TaskScreen from "./Components/TaskScreen";
// import Photos from "./Components/PHotos";

// const App=()=>{
//   return (
//     <div>
//       <BrowserRouter>
//       <Header/>
//         <Routes>
//           <Route path={"/"} element={<h1>This ia home page</h1>}/>
//           <Route path={"/contact"} element={<h1>This ia contact page</h1>}/>
//           <Route path={"/about"} element={<h1>This ia about page</h1>}/>
//           <Route path={"/signup"} element={<SignUpForm/>}>
//           {/* <Route path={"sum"} element={<SumNumber/>}/> */}
//           </Route>
//           <Route Path={"/tasks"} element={<TaskScreen/>}/>
//           <Route Path={"/photos"} element={<Photos/>}/>
          
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }
// export default App;

import React from "react";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import SignUpform from "./Components/SignUpform";
import SumNumbers from "./Components/SumNumbers";
import Header from "./Components/Header";
import TaskScreen from "./Components/TaskScreen";
import CounterComponent from "./Components/CounterComponent";
import Photos from "./Components/Photos";
import higherOrderComponent from "./Components/Hoc";
import SampleRenderProps from "./Components/SampleRenderProps";
const App = () => {
  const TestApp = higherOrderComponent(() => {
    return <div>Test App</div>
  })
  return(
    <div>
      <BrowserRouter>
      <Routes>
      <Header/>
      <Route path={"/"} element= {<h1>This is on Home Page</h1>}/>
      <Route path={"/contact"} element= {<h1>This is on Contact Page</h1>}/>
      <Route path={"/about"} element= {<h1>This is on About Page</h1>}/>
      <Route path={"/signup"} element= {<SignUpform/>}>
      <Route path={"sum"} element={<SumNumbers/>}/>
      </Route>
      <Route path={"/tasks"} element={<TaskScreen/>}/>
      <Route path={"/counter"} element={<CounterComponent/>}/>
      <Route path={"/photos"} element={<Photos/>}/>
      <Route path={"/test"} element={<TestApp/>}/>
      <Route path={"/sample"} element={<SampleRenderProps/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;