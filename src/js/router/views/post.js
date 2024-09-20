import { readPost } from "../../api/post/read.js";

alert("Single Post Page");

const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');
await readPost(postId)