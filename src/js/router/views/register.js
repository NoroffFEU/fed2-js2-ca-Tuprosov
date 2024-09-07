import { onRegister } from "../../ui/auth/register.js";
import { register } from "../../api/auth/register.js";


const form = document.forms.register;

form.addEventListener("submit", () => {
    event.preventDefault();
    onRegister();
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    register({
        name,
        email,
        password
    });
});
