import {headers} from "../../api/headers.js";
import {API_SOCIAL_POSTS} from "../constants.js"

export async function createPost({ title, body, tags, media }, form) {
    let messageParagraph;
    if (!messageParagraph) {
        messageParagraph = document.createElement('p');
        messageParagraph.id = 'messageParagraph';
        form.insertAdjacentElement('afterend', messageParagraph);
    }

    try {
        const response = await fetch(API_SOCIAL_POSTS, {
          method: 'POST',
          headers: headers(),
          body: JSON.stringify({
            title: title,
            body: body,
            tags: tags, 
            media: media 
          }),
        });
    
        if (response.ok) {
          console.log('Post created successfully!');
          messageParagraph.textContent = 'Your post was successfully published!';
          messageParagraph.style.color = 'green';
          form.reset(); // Clear the form after successful submission
        } else {
          console.error('Failed to create post.');
        }
      } catch (error) {
        console.error('Error:', error);
        messageParagraph.textContent = `Something went wrong. Please try again later.`;
        messageParagraph.style.color = 'red';
      }
}
