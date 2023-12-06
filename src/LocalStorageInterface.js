import x from "./X.png"

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

export const saveUserBuild = (buildObj) => {
    localStorage.setItem("userBuild", JSON.stringify(buildObj))
    return true
}

export const getUserBuild = () => {

    const defaultBuild = [
        {identifier: "motherboard", name: "Choose a Motherboard", salePrice: null, url: null, image: x},
        {identifier: "processor", name: "Choose a Processor", salePrice: null, url: null, image: x},
        {identifier: "ram", name: "Choose RAM", salePrice: null, url: null, image: x},
        {identifier: "psu", name: "Choose a Power Supply", salePrice: null, url: null, image: x},
        {identifier: "storage", name: "Choose a Storage Device", salePrice: null, url: null, image: x},
        {identifier: "case", name: "Choose a Case", salePrice: null, url: null, image: x},
        {identifier: "gpu", name: "Choose a GPU", salePrice: null, url: null, image: x}
    ]

    try {
        const loginInfo = JSON.parse(localStorage.getItem("userBuild"));
        if (loginInfo !== null) return loginInfo;
    }
    catch {
    }
    return defaultBuild;
}