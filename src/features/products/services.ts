import axios from "axios";

import { clearMenShoes } from "../../api/api";

export const fetchMenShoes = async () => {
  try {
    const data = await axios.get(
      clearMenShoes
    );

    return data.data;
  } catch (err:any) {
    throw err;
  }
};
