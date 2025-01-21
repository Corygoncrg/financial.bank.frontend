let baseURL = process.env.BASE_URL;
let loginHtml = process.env.loginHtml;
let headerHtml = process.env.headerHtml;
let navbarHtml = process.env.navbarHtml;
let userEditHtml = process.env.userEditHtml;
let importHtml = process.env.importHtml;
let importDetailsHtml = process.env.importDetailsHtml;
let usersHtml = process.env.usersHtml;

const token = localStorage.getItem("token");


const headers = {
  "Authorization": `Bearer ${token}`,
  "Content-Type": "application/json"
};

export { baseURL, loginHtml, headerHtml, navbarHtml, userEditHtml, importHtml, importDetailsHtml, usersHtml, token, headers };
