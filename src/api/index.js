import axios from "axios";

const url = "https://fakestoreapi.com/products";

export const fetchProducts = () => axios.get(url);
