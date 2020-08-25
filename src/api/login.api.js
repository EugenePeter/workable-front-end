import Axios from "axios";
import { useSelector } from "react-redux";

export const apiRoot = "https://localhost/7575";

export const loginUserAPI = async (query) => {
  const ourRequest = Axios.CancelToken.source();
  try {
    const response = await Axios.post(
      `${apiRoot}/login`,
      { cancelToken: ourRequest.token }
    );
    const data = response.data;
    return data;
  } catch (e) {
    console.log(e);
  }
//   return () => {
//     ourRequest.cancel();
//   };
};
