import React from "react";
import { increment_Func,decrement_Func } from "./config/Store/Actions/increment"
import { connect } from "react-redux";

function App(props) {
  console.log(props)
  
  return(
    <>
    <div style={{textAlign : "center", marginTop:30, marginLeft:"auto", marginBottom:30, marginRight:"auto", padding:40, width: "40%", border:"solid", backgroundColor:"#7FFFD4" }}>
    <h1 style={{fontFamily: "cursive"}}>
      Store Counter Value : {props.count}
    </h1>
    <button style={{margin:10,padding:10, fontSize:15, fontFamily: "cursive"}} onClick={() => props.increment_Func()}>Increment</button>
    
    <button style={{margin:10,padding:10, fontSize:15, fontFamily: "cursive"}} onClick={() => props.decrement_Func()}>Decrement</button>
    </div>
    </>
  )
}


// data get

const mapStatetoProps =(state) =>({
  count : state.count,

})

const mapDispatchtoProps = (dispatch) => ({
  increment : ()=> dispatch(increment_Func()),
  decrement : ()=> dispatch(decrement_Func())
})



// export default App
export default connect ( mapStatetoProps,mapDispatchtoProps ) (App)