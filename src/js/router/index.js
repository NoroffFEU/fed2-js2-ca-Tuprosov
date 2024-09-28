// This function controls which JavaScript file is loaded on which page
// In order to add additional pages, you will need to implement them below
// You may change the behaviour or approach of this file if you choose
import { readPosts } from "../api/post/read.js";

export default async function router(pathname = window.location.pathname) {
  const base = '/fed2-js2-ca-Tuprosov'
  switch (pathname) {
    case base:
    case `${base}/index.html`:
      await import("./views/home.js");
      break;
    case `${base}/auth/login`:
    case `${base}/auth/login/index.html`:
      await import("./views/login.js");
      break;
    case `${base}/auth/register`:
    case `${base}/auth/register/index.html`:
      await import("./views/register.js");
      break;
    case `${base}/post`:
    case `${base}/post/index.html`:
      await import("./views/post.js");
      break;
    case `${base}/post/listing`: 
    case `${base}/post/listing/listing.html`:
      await readPosts();
      break;
    case `${base}/post/edit`:
    case `${base}/post/edit/index.html`:
      await import("./views/postEdit.js");
      break;
    case `${base}/post/create`:
    case `${base}/post/create/index.html`:
      await import("./views/postCreate.js");
      break;
    case `${base}/profile`:
    case `${base}/profile/index.html`:
      await import("./views/profile.js");
      break;
    default:
      await import("./views/notFound.js");
  }
}
