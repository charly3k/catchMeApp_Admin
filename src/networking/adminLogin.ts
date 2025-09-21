import { apiUrl } from "./apiUrl";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";

export const adminLogin = async (email: string, password: string) => {
  const today = new Date();
  const twoWeeksFromToday = new Date(today);
  try {
    const cookies = new Cookies();

    const response = await fetch(`${apiUrl}/admin/login`, {
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
    if (!response.ok) {
      toast(result.message, {
        autoClose: 5000,
        hideProgressBar: false,
      });
      //   return;
    }

    console.log(result);
    cookies.set("authToken", result.data.accessToken, {
      expires: new Date(twoWeeksFromToday.setDate(today.getDate() + 14)),
    });
    cookies.set("adminID", result.data.adminDetails.id, {
      expires: new Date(twoWeeksFromToday.setDate(today.getDate() + 14)),
    });
    cookies.set("adminRole", result.data.adminDetails.access, {
      expires: new Date(twoWeeksFromToday.setDate(today.getDate() + 14)),
    });

    return result;
  } catch (error) {
    console.log(error);
  }
};
