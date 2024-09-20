export function saveInLocalStorage(post) {
    localStorage.setItem('currentPost', JSON.stringify(post));
}