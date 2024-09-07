import { onUpdatePost } from "../../ui/post/update.js";
import { authGuard } from "../../utilities/authGuard.js";

authGuard();

const form = document.forms.editPost;

form.addEventListener("submit", onUpdatePost);
