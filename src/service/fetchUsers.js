import { getUsers } from "../CRUD/crud";

export default function fetchUsers(setLoading) {
  const users = localStorage.getItem("users");
  if (!users) {
    if (setLoading) setLoading(true);
    getUsers().then((data) => {
      if (setLoading) setLoading(false);
      localStorage.setItem("users", JSON.stringify(data));
      return JSON.parse(localStorage.getItem("users"));
    });
  }
  return JSON.parse(users);
}
