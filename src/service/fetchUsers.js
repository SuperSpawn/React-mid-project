import { getUsers } from "../CRUD/crud";

export default function fetchUsers() {
  const users = localStorage.getItem("users");
  if (!users) {
    getUsers().then((data) => {
      localStorage.setItem("users", JSON.stringify(data));
      return JSON.parse(localStorage.getItem("users"));
    });
  }
  return JSON.parse(users);
}
