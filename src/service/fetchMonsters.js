import { getMonsters } from "../CRUD/crud";

export default function fetchMonsters() {
  const monsters = localStorage.getItem("monsters");
  if (!monsters) {
    getMonsters().then((data) => {
      localStorage.setItem("monsters", JSON.stringify(data));
      return JSON.parse(localStorage.getItem("monsters"));
    });
  }
  return JSON.parse(monsters);
}
