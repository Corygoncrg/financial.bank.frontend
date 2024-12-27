const baseURL = "http://localhost:8083";

// Get the token from localStorage
const token = localStorage.getItem("token");

// Define headers
const headers = {
  "Authorization": `Bearer ${token}`,
  "Content-Type": "application/json"
};

export { baseURL, token, headers };