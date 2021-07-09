import axios from "axios"


export const sendReserLink = async(id, email) => {
    try {
        await axios.post("/api/emails/RestarPassword",{
            id, 
            email
        })
        
    } catch (error) {
        const message =
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        console.log(message)  
    }
}

