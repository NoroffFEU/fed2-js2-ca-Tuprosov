import {API_SOCIAL_POSTS} from "../constants.js"
import { headers } from "../headers.js";

export async function deletePost(id) {
    const url = API_SOCIAL_POSTS + '/' + id;
    try {
        const response = await fetch(url, {
            method: "DELETE",
            headers: headers()
        })

        if (!response.ok) {
            alert('Error occured while deleting')
            const error = await response.json();
            throw new Error(`Error deleting the post: ${
                error.message
            }`)
        };
        
        alert('Post deleted successfully!');
        location.reload();

    } catch(error) {
        console.error('Error deleting the post', error);
        throw error;
    }
}
