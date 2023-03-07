import { getUsers } from "../CRUD/crud";

export default function fetchUsers(setLoading) {
  const users = localStorage.getItem("users");
  if (!users) {
    setLoading(true);
    getUsers().then((data) => {
      setLoading(false);
      localStorage.setItem("users", JSON.stringify(data));
      return JSON.parse(localStorage.getItem("users"));
    });
  }
  return JSON.parse(users);
}
