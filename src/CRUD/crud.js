//import React from 'react'
import axios from "axios";

//users
export async function createUser(data) {
  try {
    const prom = await axios.post(
      "https://6400744e9f8449102991251c.mockapi.io/TheLandtoTheWest/users",
      data
    );
    return prom.data;
  } catch (err) {
    console.error(err.message);
    return null;
  }
}
export function deleteUser(userID) {}
export async function updateUser(userID, data) {
  try {
    const prom = await axios.put(
      "https://6400744e9f8449102991251c.mockapi.io/TheLandtoTheWest/users/" +
        userID,
      data
    );
    return prom;
  } catch (err) {
    console.error(err.message);
    return null;
  }
}
export async function getUser(userID) {
  try {
    const prom = await axios.get(
      "https://6400744e9f8449102991251c.mockapi.io/TheLandtoTheWest/users/" +
        userID
    );
    return prom.data;
  } catch (e) {
    console.error(e.message);
    return null;
  }
}
export async function getUsers() {
  try {
    const prom = await axios.get(
      "https://6400744e9f8449102991251c.mockapi.io/TheLandtoTheWest/users"
    );
    return prom.data;
  } catch (err) {
    console.error(err.message);
    return null;
  }
}

//monsters
export function createMonster(data) {}
export function deleteMonster(monsterID) {}
export function updateMonster(monsterID, data) {}
export async function getMonster(monsterID) {
  try {
    const prom = await axios.get(
      "https://6400744e9f8449102991251c.mockapi.io/TheLandtoTheWest/monsters/" +
        monsterID
    );
    return prom.data;
  } catch (e) {
    console.error(e.message);
    return null;
  }
}
export async function getMonsters() {
  try {
    const prom = await axios.get(
      "https://6400744e9f8449102991251c.mockapi.io/TheLandtoTheWest/monsters"
    );
    return prom.data;
  } catch (err) {
    console.error(err.message);
    return null;
  }
}
