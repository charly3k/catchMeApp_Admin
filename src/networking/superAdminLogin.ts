
import { apiUrl } from "./apiUrl";

export const superAdminLogin =async (email:string,password:string) => {
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
    
    return result
        
    } catch (error) {
        console.log(error);
        
    }
}