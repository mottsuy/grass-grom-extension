import axios from "axios";

export const getAll = async (username: string | undefined) => {
  const BASE_URL = "http://localhost:8080/v1/training/";

  let params = "";
  if (username && username.length) {
    params += "?user=" + username;
  }

  try {
    const result = await axios(BASE_URL + params);
    return result.data;
  } catch (e) {
    console.error(e);
  }
};
