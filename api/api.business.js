import { API } from "../constants"
import axios from "axios";

// Métodos fetch
export const getBusiness = async () => {
    const res = await fetch(API.HEROKU+"business")
    return await res.json()
}

export const getBusinessById = async (id) => {
    const res = await fetch(API.HEROKU+"business/"+id)
    return await res.json()
}

export const createBusiness = async (newBusiness) => {
    const res = await fetch(API.HEROKU+"business", { 
        method: 'POST',
        headers: { 
            Accept: "application/json", 
            "Content-Type": "application/json" },
        body: JSON.stringify(newBusiness)
    });
    return  await res.json();
}

export const deleteBusiness = async (id) => {
    await fetch(API.HEROKU+"business/"+id, {
        method: "DELETE",
    })
}

export const updateBusiness = async (id, newBusiness) => {
    const res = await fetch(API.HEROKU+"business/"+id, { 
        method: 'PUT',
        headers: { 
            Accept: "application/json", 
            "Content-Type": "application/json" },
        body: JSON.stringify(newBusiness)
    });
    return  await res.json();
}

