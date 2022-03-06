export const loginStart = () => ({
    type: "LOGIN_START",
});

//when our user is approved it will return a user 
export const loginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,


});


export const loginFailure = () => ({
    type: "LOGIN_FAILURE",
});


export const logout = () => ({
    type: "LOGOUT",
});