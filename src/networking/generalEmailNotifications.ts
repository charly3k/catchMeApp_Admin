import Cookies from "universal-cookie";
import { apiUrl } from "./apiUrl";
import { toast } from "react-toastify";

export const generalEmailNotifications = async (
  messageTitle: string,
  messageBody: string
) => {
  const cookies = new Cookies();
  const authToken = cookies.get("authToken");
  try {
    const response = await fetch(`${apiUrl}/general/email/notification`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify({
        messageTitle,
        messageBody,
      }),
    });
    if (!response.ok) {
      const result = await response.json();
      toast(result.message, {
        autoClose: 5000,
        hideProgressBar: false,
      });
      return;
    }

    const result = response.json();
    console.log({ result });
    toast("Notifications sent successfully");
    return result;
  } catch (error) {
    toast("something went wrong", {
      autoClose: 5000,
      hideProgressBar: false,
    });
    console.log(error);
  }
};
