
export const AddExpenses=async(data)=>{
    console.log(data);
    
    return fetch('/api/user/add-expenses',{
        method:"POST",
        credentials:"include",
        headers:{
            "Content-Type": "application/json" // ⬅️ Required
        },
        body:JSON.stringify(data)
    }).then(res=>res.json()).catch(error=>console.error(error))
    
}

export const ShowExpenses=async()=>{
    return fetch('/api/user/all-expenses',{
        method:"GET",
        headers:{
            "Content-Type": "application/json" // ⬅️ Required
        },
    }).then(res=>res.json()).catch(error=>console.error(error))
    
}


export const UpdateExpenses=async(data)=>{
    return fetch(`/api/user/update-expenses/${data._id}`,{
        method:"PUT",
        headers:{
            "Content-Type": "application/json" // ⬅️ Required
        },
        body:JSON.stringify(data)
    }).then(res=>res.json()).catch(error=>console.error(error))
    
}

export const DeleteExpenses=async(id)=>{
    return fetch(`/api/user/delete-expense/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type": "application/json" // ⬅️ Required
        }
    }).then(res=>res.json()).catch(error=>console.error(error))
    
}