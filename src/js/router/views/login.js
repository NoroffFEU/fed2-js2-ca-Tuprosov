import { onLogin } from "../../ui/auth/login.js";
import { login } from "../../api/auth/login.js";

const form = document.forms.login;

form.addEventListener("submit", () => {
    event.preventDefault();
    onLogin();
    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');
    login({
        email, 
        password
    });
});
