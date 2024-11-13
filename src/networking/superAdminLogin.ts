import Cookies from 'universal-cookie';
import { apiUrl } from "./apiUrl";

export const superAdminLogin =async (email:string,password:string) => {
    const cookies = new Cookies();
    const authToken = cookies.get("authToken");


    try {
    
        const response = await fetch(`${apiUrl}/super/admin/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
             
               
                
            },
            body: JSON.stringify({
                email,
                password
        })

        
    })
const result = await response.json();



console.log(result)

    if(!response.ok){

        return

    }

      cookies.set('authToken', result.data.accessToken);
    
    return result
        
    } catch (error) {
        console.log(error);
        
    }
}