import { apiUrl } from "./apiUrl"
import Cookies from 'universal-cookie';

export const getAllUsers=async()=>{
        const cookies = new Cookies();

    try {
         const authToken = cookies.get('authToken');
        const response=await fetch(`${apiUrl}/user/get/all`,{
        method:"GET",
        headers:{
           
            Authorization:`Bearer ${authToken}`,
        }
        


    })

     const result = await response.json();
        if (!response.ok) {
            console.log(response);
            return;
        }

        console.log(result,{response});
        return result;
    } catch (error) {
        
    }

}