import axios from "axios";

export const FakeStoreApiInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});
