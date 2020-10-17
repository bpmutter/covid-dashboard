import Cookies from "js-cookie";

export default async function getAuthToken() {
  try {
    let token = Cookies.get("access_token");
    if (!token) {
      const in29Minutes = new Date(new Date().getTime() + 29 * 60 * 1000);
      const res = await fetch(
        "https://realm.mongodb.com/api/client/v2.0/app/covid-19-qppza/auth/providers/anon-user/login"
      );
      const { access_token } = await res.json();
      Cookies.set("access_token", access_token, { expires: in29Minutes });
      token = access_token;
    }
    return { status: "success", token };
  } catch (error) {
    return { status: "error", error };
  }
}
