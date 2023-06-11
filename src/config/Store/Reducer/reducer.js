// App Start Store

const initial_State = {
    count : 0,
    user : "Checkuser@gmail.com"
}

export default (state= initial_State,action) => {
    switch(action.type){

        case  "increment" :
            return { ...state, count: state.count +1 };

        case "decrement" :
            return { ...state, count: state.count -1 };

        default :
            return state
    }

}
