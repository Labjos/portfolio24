import axios from "axios";

const http = axios.create({
  baseURL: import.meta.env.API_BASE_URL || "http://localhost:3000/api/v1",
});

http.interceptors.request.use(function (config) {
  config.headers.authorization = localStorage.getItem("token");
  return config;
});

// Add a response interceptor
http.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401 && location.pathname !== "/") {
      // navigate refreshing page
      localStorage.clear();
      window.location.replace("/");
    }

    return Promise.reject(error);
  }
);

export function create(dataUser) {
  return http.post("/users", dataUser);
}


