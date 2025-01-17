let baseURL = process.env.BASE_URL || "http://localhost:8083";
let loginHtml = process.env.loginHtml || "login.html";
let headerHtml = process.env.headerHtml || "header.html";
let navbarHtml = process.env.navbarHtml || "navbar.html";
let userEditHtml = process.env.userEditHtml || "userEdit.html";
let importHtml = process.env.importHtml || "import.html";
let importDetailsHtml = process.env.importDetailsHtml || "import-details.html";
let usersHtml = process.env.usersHtml || "users.html";

const token = localStorage.getItem("token");


const headers = {
  "Authorization": `Bearer ${token}`,
  "Content-Type": "application/json"
};

export { baseURL, loginHtml, headerHtml, navbarHtml, userEditHtml, importHtml, importDetailsHtml, usersHtml, token, headers };
