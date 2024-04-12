const login = prompt("Enter your login:");
const password = "1261";

if (login == "Admin") {
  const userPassword = prompt("Enter your password:");

  if (userPassword == password) {
    alert("Welcome");
  } else {
    alert("Invalid password");
  }
} else {
  alert("Access denied");
}
