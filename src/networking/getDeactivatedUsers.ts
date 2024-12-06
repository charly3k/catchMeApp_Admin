import Cookies from "universal-cookie";
import { apiUrl } from "./apiUrl";
import { toast } from "react-toastify";

export const getDeactivatedUsers = async () => {
    const cookies = new Cookies();
    const authToken = cookies.get('authToken');
    try {
        const response = await fetch(`${apiUrl}/user/get/all/deactivated/users/by/isUserDeactivated/status?status=true`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${authToken}`,
            }
        });
        const result = await response.json();
        if (!response.ok) {
            toast(result.message, {
                autoClose: 5000,
                hideProgressBar: false,
            });
            return;
        }
        return result;
    }
    catch (error) {
        console.log(error);
        toast('an error occurred try again', {
            autoClose: 5000,
            hideProgressBar: false,
        });
    }
}