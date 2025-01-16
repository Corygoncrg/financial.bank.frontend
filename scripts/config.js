let baseURL;

if (window.location.hostname === "localhost") {
  baseURL = "http://localhost:8083";
} else {
  baseURL = "http://gateway:8083";
}

const token = localStorage.getItem("token");


const headers = {
  "Authorization": `Bearer ${token}`,
  "Content-Type": "application/json"
};

export { baseURL, token, headers };
