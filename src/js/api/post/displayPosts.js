import { saveInLocalStorage } from "../../utilities/savePost.js";
import { deletePost } from "./delete.js";

export function displayPosts(data){
    const ul = document.getElementById('postsList');
    ul.style.listStyle = 'none';
    ul.innerHTML = '';
    console.log(data)

    // Loop through the data array and create list items for each post
    data.forEach(post => {
        const li = document.createElement('li');
        const editBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');
        const h3 = document.createElement('h3');
        const img = document.createElement('img');
        const p = document.createElement('p');

        li.setAttribute('id', `${post.id}`);
        li.style.cursor = 'pointer';
        li.style.border = '1px solid black';

        // populate elements
        h3.textContent = `${post.title}`;
        p.textContent = `${post.body}`;
        if (!post.media) {
            createMedia(post)
        }
        img.src = post.media.url;
        img.alt = post.media.alt;
        editBtn.textContent = 'Edit post';
        deleteBtn.textContent = 'Delete post';
    
        // set event listeners
        li.addEventListener('click', () => {
            window.location.href = `../index.html?id=${post.id}`
        })

        editBtn.addEventListener('click', () => {
            event.stopPropagation();
            saveInLocalStorage(post)
            window.location.href = `../edit/index.html?id=${post.id}`
        })

        deleteBtn.addEventListener('click', () => {
            event.stopPropagation();
            const confirmed = confirm('Are you sure you want to delete this post?')
            if(confirmed) {
                deletePost(post.id);
            }else {
                alert('Deletion cancelled')
            }
        })

        // append buttons to li
        li.append(h3, img, p, editBtn, deleteBtn);
    
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