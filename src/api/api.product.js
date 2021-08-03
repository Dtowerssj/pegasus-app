import { API } from "../constants"

export const getProducts = async (id_establecimiento) => {
    const res = await fetch(API.HEROKU+"products/"+"catalogue/"+id_establecimiento);
    return await res.json()
}

export const getProduct = async (id) => {
    const res = await fetch(API.HEROKU+"products/"+id)
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

export const updateProduct = async (id, newProduct) => {
    const res = await fetch(API.HEROKU+"products/"+id, { 
        method: 'PUT',
        headers: { 
            Accept: "application/json", 
            "Content-Type": "application/json" },
        body: JSON.stringify(newProduct)
    });
    return  await res.json();
}
