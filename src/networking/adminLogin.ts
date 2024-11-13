import { apiUrl } from "./apiUrl";
import Cookies from 'universal-cookie';

export const adminLogin = async (email: string, password: string) => {
    try {
            
           const cookies = new Cookies(); 
          
        const response = await fetch(`${apiUrl}/admin/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                   
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        const result = await response.json();
        if (!response.ok) {
            return;
        }

        cookies.set('authToken', result.data.accessToken);
        return result;
    } catch (error) {
        console.log(error);
    }
}
