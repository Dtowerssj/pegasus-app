import { API } from "../constants"

export const getProducts = async () => {
    const res = await fetch(API.HEROKU+"products")
    return await res.json()
}

export const getTask = async (id) => {
    const res = await fetch(API.HEROKU+id)
    return await res.json()
}

export const createProduct = async (newTask) => {
    const res = await fetch(API.HEROKU+"products", { 
        method: 'POST',
        headers: { 
            Accept: "application/json", 
            "Content-Type": "application/json" },
        body: JSON.stringify(newTask)
    });
    return  await res.json();
}

export const deleteProduct = async (id) => {
    await fetch(API.HEROKU+"products/"+id, {
        method: "DELETE",
    })
}

export const updateTask = async (id, newTask) => {
    const res = await fetch(API.HEROKU+"tareas/"+id, { 
        method: 'POST',
        headers: { 
            Accept: "application/json", 
            "Content-Type": "application/json" },
        body: JSON.stringify(newTask)
    });
    return  await res.json();
}
