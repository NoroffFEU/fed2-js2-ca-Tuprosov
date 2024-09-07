import { onLogin } from "../../ui/auth/login.js";
import { login } from "../../api/auth/login.js";

const form = document.forms.login;

form.addEventListener("submit", onLogin);
