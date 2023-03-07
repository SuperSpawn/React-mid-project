import { getMonsters } from "../CRUD/crud";

export default function fetchMonsters(setLoading) {
  const monsters = localStorage.getItem("monsters");
  if (!monsters) {
    setLoading(true);
    getMonsters().then((data) => {
      setLoading(false);
      localStorage.setItem("monsters", JSON.stringify(data));
      return JSON.parse(localStorage.getItem("monsters"));
    });
  }
  return JSON.parse(monsters);
}
