import { API } from "../constants"

export const getBusiness = async () => {
    const res = await fetch(API.HEROKU+"business")
    return await res.json()
}

export const getBusinessById = async (id) => {
    const res = await fetch(API.HEROKU+"businesss/"+id)
    return await res.json()
}

export const createBusiness = async (newTask) => {
    const res = await fetch(API.HEROKU+"businesss", { 
        method: 'POST',
        headers: { 
            Accept: "application/json", 
            "Content-Type": "application/json" },
        body: JSON.stringify(newTask)
    });
    return  await res.json();
}

export const deleteBusiness = async (id) => {
    await fetch(API.HEROKU+"businesss/"+id, {
        method: "DELETE",
    })
}

export const updateBusiness = async (id, newBusiness) => {
    const res = await fetch(API.HEROKU+"businesss/"+id, { 
        method: 'PUT',
        headers: { 
            Accept: "application/json", 
            "Content-Type": "application/json" },
        body: JSON.stringify(newBusiness)
    });
    return  await res.json();
}
