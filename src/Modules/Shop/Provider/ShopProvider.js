import axios from "axios";
import $api from "../../../api/api";

export const getProducts = async () => {
  return await axios.get($api("get_products"));
};

export const getProductDetails = async (id) => {
  return await axios.get(`${$api("get_single_products")}${id}`);
};
