import {API} from "../../backend";
//API is ; http://localhost:8000/api/

export const signup = user =>{
    return fetch(`${API}/signup`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then(response =>{
        return response.json();
    })
    .catch(err => console.log(err))
};

export const signin = user =>{
    return fetch(`${API}/signin`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then(response =>{
        return response.json();
    })
    .catch(err => console.log(err))
};

export const authenticate = (data,next)=>{
    if(typeof window !== "undefined"){
        localStorage.setItem("jwt", JSON.stringify(data))
        next();
    }
}

export const signout = next =>{
    if(typeof window !== "undefined"){
        localStorage.removeItem("jwt")
        next();

        return fetch(`${API}/signout`,{
            method:"GET"
        })
        .then(response => console.log("Signout successfull"))
        .catch(err => console.log(err))
    }
}

export const isAuthenticated = next =>{
    if(typeof window == "undefined"){
        return false
    }
    if(localStorage.getItem("jwt")){
        return JSON.parse(localStorage.getItem("jwt"));
    }
    else{
        return false
    }
}