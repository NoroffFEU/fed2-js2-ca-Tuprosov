import { onUpdatePost } from "../../ui/post/update.js";
import { authGuard } from "../../utilities/authGuard.js";

authGuard();
const form = document.forms.editPost;
const post = JSON.parse(localStorage.getItem('currentPost'));
console.log(post)
form.title.value = post.title || " "; 
form.body.value = post.body || " ";
form.imageUrl.value = post.media.url || " ";
form.tags.value = post.tags.join(', ');

form.addEventListener("submit", onUpdatePost);
