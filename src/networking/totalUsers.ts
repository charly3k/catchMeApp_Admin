import { apiUrl } from "./apiUrl"
import Cookies from 'universal-cookie';


export const totalUsers = async () => {
    const cookies = new Cookies();

    try {
        const authToken = cookies.get('authToken');
        const response = await fetch(`${apiUrl}/dashboard/total-users`, {
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
        console.log(error);
    }
}
