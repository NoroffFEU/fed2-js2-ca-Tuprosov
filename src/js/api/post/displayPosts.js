export function displayPosts(data){
    const ul = document.getElementById('postsList');
    ul.style.listStyle = 'none';
    ul.innerHTML = '';
    console.log(data)

    // Loop through the data array and create list items for each post
    data.forEach(post => {
        const li = document.createElement('li');
        li.setAttribute('id', `${post.id}`)
        li.style.cursor = 'pointer';
        li.style.border = '1px solid black';

        if (!post.media) {
            createMedia(post)
        }
    
        li.innerHTML = `
            <h3>${post.title}</h3>
            <img src="${post.media.url}" alt="${post.media.alt}">
            <p>${post.body}</p>
            <button id="Edit">Edit post</button>
            <button id="Delete">Delete post</button>
        `;

        // set event listener
        li.addEventListener('click', () => {
            window.location.href = `index.html?id=${post.id}`
        })
        // Append the list item to the unordered list
        ul.appendChild(li);
    });
}

function createMedia(post) {
    post.media = {};
    post.media.url  = 'https://as2.ftcdn.net/v2/jpg/07/50/96/13/1000_F_750961330_OBCPAVhuMuaEudMMtGgVbRHPmLM3GWKD.jpg';
    post.media.alt = 'placeholderImage';
    return post;
}

export function displayTargetPost(post){
    console.log(post)
    const title = document.getElementById('title');
    const body = document.getElementById('body')
    title.textContent = post.title;

    const main = document.createElement('main');
    const paragraph = document.createElement('p');
    const img = document.createElement('img');

    paragraph.textContent = post.body;

    if (!post.media) {
        createMedia(post)
    }

    img.src = post.media.url;
    img.alt = post.media.alt;
    

    // Append the content to main body
    main.append(img, paragraph)
    body.appendChild(main)
}