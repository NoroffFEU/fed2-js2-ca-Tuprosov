import { onCreatePost } from "../../ui/post/create.js";
import {createPost} from "../../api/post/create.js";
import { authGuard } from "../../utilities/authGuard.js";

authGuard();

const form = document.forms.createPost;

form.addEventListener("submit", () => {
    event.preventDefault();
    onCreatePost();
    const formData = new FormData(form);
    // Collect form data
    const title = formData.get('title');
    const body = formData.get('body');
    const tags = formData.get('tags').split(',').map(tag => tag.trim()).filter(tag => tag !== "");
    const imageUrl = formData.get('imageUrl')
    createPost({
        title,
        body,
        tags,
        media: {"url": imageUrl}
    }, form);
});
