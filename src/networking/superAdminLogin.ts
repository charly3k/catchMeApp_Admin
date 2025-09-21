import Cookies from "universal-cookie";
import { apiUrl } from "./apiUrl";
import { toast } from "react-toastify";

export const superAdminLogin = async (email: string, password: string) => {
  const cookies = new Cookies();
  const today = new Date();
  const twoWeeksFromToday = new Date(today);
  try {
    const response = await fetch(`${apiUrl}/super/admin/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const result = await response.json();

    console.log(result);

    if (!response.ok) {
      toast(result.message, {
        autoClose: 5000,
        hideProgressBar: false,
      });
      return;
    }

    cookies.set("authToken", result.data.accessToken, {
      expires: new Date(twoWeeksFromToday.setDate(today.getDate() + 14)),
    });
    cookies.set("adminID", result.data.adminDetails.id, {
      expires: new Date(twoWeeksFromToday.setDate(today.getDate() + 14)),
    });
    cookies.set("adminRole", result.data.adminDetails.access, {
      expires: new Date(twoWeeksFromToday.setDate(today.getDate() + 14)),
    });

    toast(result.message, {
      autoClose: 5000,
      hideProgressBar: false,
    });

    return result;
  } catch (error) {
    console.log(error);
  }
};
