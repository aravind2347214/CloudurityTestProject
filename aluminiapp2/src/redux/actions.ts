export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"


export const loginAction=(loginState:any)=>{
    console.log("IN Action :",loginState)
    return{
        type:LOGIN,
        payload:loginState
    }
}

export const logoutAction=()=>{
    return{
        type:LOGOUT,
    }
}