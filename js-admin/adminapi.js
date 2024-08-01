
import { get } from "./admindom.js"
let api = "https://66a27283967c89168f2022db.mockapi.io/Api/v1/Users"


async function getData(){
    try {
        const {data} = await axios.get(api)
        console.log(data)
        get(data)
    } catch (error) {
        console.error(error)
    }
}

export{getData}