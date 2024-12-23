import Cookies from "universal-cookie";
import { apiUrl } from "./apiUrl"

const cookies = new Cookies();

export const getSuperAdminProfile = async () => {
    const authToken = cookies.get('authToken');
            const adminId= cookies.get('adminID')
    try {
        const response = await fetch(`${apiUrl}/super/admin/${adminId}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${authToken}`
            }

        })

        const result = await response.json()

        if (!response.ok) {
            console.log(response, result)
            return
        }
        console.log(result)

        return result
        
    } catch (error) {
        console.log(error);
        
    }
}   