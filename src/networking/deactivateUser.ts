import { toast } from "react-toastify";
import { apiUrl } from "./apiUrl";
import Cookies from 'universal-cookie';

export const deactivateUser = async (userId: number,isUserDeactivated:boolean ) => {
    console.log({ userId,isUserDeactivated });
    const cookies = new Cookies();

    try {
         const authToken = cookies.get('authToken');
        const response = await fetch(`${apiUrl}/user/update/user/deactivation/status/by/userId/${userId}`, {

            method: 'PATCH',
            headers: {
               Authorization:`Bearer ${authToken}`,
           "Content-Type": "application/json",

            },
            body: JSON.stringify({ isUserDeactivated })   
        });

        const result = await response.json();

        if (!response.ok) {
            console.log(response,result);
              toast(result.message,{
            autoClose: 5000,
            hideProgressBar: false,
           });
            return;
        }

        console.log({result,response})

         toast(result.message,{
            autoClose: 5000,
            hideProgressBar: false,
           });
        return result;
        
    } catch (error) {
        console.log(error);
        
    }
}