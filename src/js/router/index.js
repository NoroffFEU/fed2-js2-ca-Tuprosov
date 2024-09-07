// This function controls which JavaScript file is loaded on which page
// In order to add additional pages, you will need to implement them below
// You may change the behaviour or approach of this file if you choose
export default async function router(pathname = window.location.pathname) {
  switch (pathname) {
    case "/index.html":
      await import("./views/home.js");
      break;
    case "/auth/index.html":
      await import("./views/auth.js");
      break;
    case "/auth/login/index.html":
      await import("./views/login.js");
      break;
    case "/auth/register/index.html":
      await import("./views/register.js");
      break;
    case "/post/index.html":
      await import("./views/post.js");
      break;
    case "/post/edit/index.html":
      await import("./views/postEdit.js");
      break;
    case "/post/create/index.html":
      await import("./views/postCreate.js");
      break;
    case "/profile/index.html":
      await import("./views/profile.js");
      break;
    default:
      await import("./views/notFound.js");
  }
}
