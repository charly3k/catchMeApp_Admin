import Cookies from "universal-cookie";
import { apiUrl } from "./apiUrl";

export const activeUsers= async () => {
    const cookies = new Cookies();

    const authToken = cookies.get('authToken');
    try {
        const response = await fetch(`${apiUrl}/dashboard/active-users`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`,
            },


        });
       
        const result = await response.json();
        if (!response.ok) {
            return;
        }
        console.log(result,response);
        return result;     
    } catch (error) {
        
    }

}