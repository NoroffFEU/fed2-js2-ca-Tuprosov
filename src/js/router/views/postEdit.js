import { onUpdatePost } from "../../ui/post/update.js";
import { updatePost } from "../../api/post/update.js";
import { authGuard } from "../../utilities/authGuard.js";

authGuard();
// get id 
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

// get edit form
const form = document.forms.editPost;
const post = JSON.parse(localStorage.getItem('currentPost'));

// populate the form with the current values
form.title.value = post.title || " "; 
form.body.value = post.body || " ";
form.imageUrl.value = post.media.url || " ";
form.tags.value = post.tags.join(', ');

// handle submission
form.addEventListener("submit", () => {
    event.preventDefault();

    const updatedPost = {
        title: form.title.value,           
        body: form.body.value,             
        media: {
            url: form.imageUrl.value,
            alt: 'sample picture',
        },
        tags: form.tags.value.split(',').map(tag => tag.trim()).filter(tag => tag !== '') // Convert string back to array
    };

    // push it back to api
    updatePost(postId, updatedPost, form)
});
