import { authGuard } from "../../utilities/authGuard.js";
import { setLogoutListener } from "../../ui/global/logout.js";

authGuard();
setLogoutListener();

const logOut = document.getElementById('logout');
logOut.addEventListener('click', ()=> {
    localStorage.clear();
    alert('You have logged out!')
    authGuard();
})