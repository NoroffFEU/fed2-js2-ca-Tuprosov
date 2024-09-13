export function displayPosts(data){
    const ul = document.getElementById('postsList');
    ul.style.listStyle = 'none';
    ul.innerHTML = '';
    console.log(data)

    // Loop through the data array and create list items for each post
    data.forEach(post => {
        const li = document.createElement('li');
        li.setAttribute('id', `${data.post.id}`)

        // Assuming each post has properties like 'title', 'body', and 'author'
        li.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `;

        // Append the list item to the unordered list
        ul.appendChild(li);
    });
}