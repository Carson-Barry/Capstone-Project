export const setLogin = (login) => {
    localStorage.setItem("login", JSON.stringify(login))
    return true
}

export const getLogin = (login) => {
    try {
        const loginInfo = JSON.parse(localStorage.getItem("login"));
        if (loginInfo !== null) return loginInfo;
        
    }
    catch {
        return false
    }
    return false
}

export const isSignedIn = (login) => {
    if (getLogin() !== false) return true
    return false
}