import { apiUrl } from "./apiUrl";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";

export const adminLogin = async (email: string, password: string) => {
  //const today = new Date();
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 14); // Add 14 days from now
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

    cookies.set("authToken", result.data.accessToken, {
      expires: expirationDate,
      path: "/", // Ensure cookie is available across the entire site
      sameSite: "lax", // Add security settings
    });
    cookies.set("adminID", result.data.adminDetails.id, {
      expires: expirationDate,
      path: "/", // Ensure cookie is available across the entire site
      sameSite: "lax", // Add security settings
    });
    cookies.set("adminRole", result.data.adminDetails.access, {
      expires: expirationDate,
      path: "/", // Ensure cookie is available across the entire site
      sameSite: "lax", // Add security settings
    });

    return result;
  } catch (error) {
    console.log(error);
  }
};
