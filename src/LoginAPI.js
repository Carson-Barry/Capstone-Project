import {v4} from "uuid";

// These are dummy login API functions that can be used in the future to allow actual login to the service
// The signIn function creates a new token and returns regardless of input
export const signIn = async (login) => {
    if (login) return (
        {
            firstName: "Test",
            lastName: "User",
            email: "myemail@example.com",
            password: "password1234",
            userToken: getToken(),
        }
    )
    else return false
}

const getToken = () => {
    return v4().toString();
}