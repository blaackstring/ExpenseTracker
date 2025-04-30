export const login=async(data)=>{
    return fetch('/api/auth/login',{
        method:"POST",
        credentials:"include",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data),

    }).then((res) => res.json()) // convert response to JSON
    .catch((error) => console.error(error));
}


export const signup=async(data)=>{
    return fetch('/api/auth/signup',{
        method:"POST",
        credentials:"include",
        headers:{
            "Content-Type": "application/json" // ⬅️ Required
        },
        body: JSON.stringify(data),
    }).then(res=>res.json()).then(res=>res).catch(error=>console.error(error))
}

export const verify=async()=>{
    return fetch('/api/auth/verify',{
        method:"GET",
        credentials:"include",
    }).then(res=>res.json()).then(res=>res).catch(error=>console.error(error))
}
export const logout=async()=>{
    return fetch('/api/auth/logout',{
        method:"DELETE",
        credentials:"include",
    }).then(res=>res.json()).then(res=>res).catch(error=>console.error(error))
}