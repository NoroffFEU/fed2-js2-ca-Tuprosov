// This function controls which JavaScript file is loaded on which page
// In order to add additional pages, you will need to implement them below
// You may change the behaviour or approach of this file if you choose
import { readPosts } from "../api/post/read.js";

export default async function router(pathname = window.location.hash.replace('#', '') || '/') {

  switch (pathname) {
    case "/":
    case "./index.html":
      await import("./views/home.js");
      break;
    case "./auth/login":
    case "./auth/login/index.html":
      await import("./views/login.js");
      break;
    case "./auth/register":
    case "./auth/register/index.html":
      await import("./views/register.js");
      break;
    case "./post":
    case "./post/index.html":
      await import("./views/post.js");
      break;
    case "./post/listing":
      await readPosts();
      break;
    case "./post/edit":
    case "./post/edit/index.html":
      await import("./views/postEdit.js");
      break;
    case "./post/create":
    case "./post/create/index.html":
      await import("./views/postCreate.js");
      break;
    case "./profile":
    case "./profile/index.html":
      await import("./views/profile.js");
      break;
    default:
      await import("./views/notFound.js");
  }
}
