export function authGuard() {
  if (!localStorage.token) {
    alert("You must be logged in to view this page");
    window.location.href = "/fed2-js2-ca-Tuprosov/auth/login/index.html";
  }
}
