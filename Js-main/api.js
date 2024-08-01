import { get } from "./dom.js"

let api = "https://66a27283967c89168f2022db.mockapi.io/Api/v1/Users"

// Fetch users data
async function getData(){
    try {
    const {data} =  await axios.get(api)
    get(data)
    console.log(data)  
    } catch (error) {
        console.error(error)
    }
}

export {getData}