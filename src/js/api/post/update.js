import { API_SOCIAL_POSTS } from "../constants.js";
import { headers } from "../headers.js";

export async function updatePost(id, updatedPost, form) {
    const url = API_SOCIAL_POSTS + '/' + id

    let messageParagraph;
    if (!messageParagraph) {
        messageParagraph = document.createElement('p');
        messageParagraph.id = 'messageParagraph';
        form.insertAdjacentElement('afterend', messageParagraph);
    }

    try {
        const response = await fetch(url, {
            method: 'PUT', 
            headers: headers(),
            body: JSON.stringify(updatedPost)  // Send the updated post data as a JSON string
        });

        // Handle the API response
        if (response.ok) {
            const result = await response.json();
            console.log('Successfully updated:', result);
            // show a success message
            messageParagraph.textContent = 'Your post was successfully updated!';
            messageParagraph.style.color = 'green';

        } else {
            messageParagraph.textContent = `Something went wrong. Please try again later.`;
            messageParagraph.style.color = 'red';
            console.error('Failed to update the post:', response.statusText);
        }
    } catch (error) {
        console.error('Error while updating the post:', error);
    }
}
