const increment_Func = () =>{
    return(dispatch) =>{
        dispatch({
            type : "increment"
        })
    }
}


const decrement_Func = () =>{
    return(dispatch) =>{
        dispatch({
            type : "decrement"
        })
    }
}


export { increment_Func,decrement_Func }