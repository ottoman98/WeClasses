import axios from "axios";

const URL = import.meta.env.VITE_URL;

function postPurchaseClasse(data: { classe: string | undefined }) {
  return axios.post(`${URL}/purchaseClass`, data, {
    withCredentials: true,
  });
}

export default postPurchaseClasse;
