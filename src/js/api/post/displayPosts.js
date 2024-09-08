export function displayPosts(data){
    const ul = document.getElementById('postsList');
    ul.innerHTML = '';

    // Loop through the data array and create list items for each post
    data.forEach(post => {
        const li = document.createElement('li');

        // Assuming each post has properties like 'title', 'body', and 'author'
        li.innerHTML = `
            <h3>${post.title}</h3>
            <img src="${media.url}" alt="${media.alt}">
            <p>${post.body}</p>
            <small>By: ${post.author}</small>
        `;

        // Append the list item to the unordered list
        ul.appendChild(li);
    });
}