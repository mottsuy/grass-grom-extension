import axios from "axios";

export const getAll = async () => {
  try{
    const result = await axios(
      'http://localhost:8080/v1/training/',
    );
    return result.data;
  } catch(e) {
    console.error(e);
  }
}