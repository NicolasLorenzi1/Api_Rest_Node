const { db } = require("../config/firebase");

const getAllUsers = async () => {
  const snapshot = await db.collection("users").get();
  const users = [];
  snapshot.forEach(doc => users.push({ id: doc.id, ...doc.data() }));
  return users;
};

const createUser = async (data) => {
  const userRef = await db.collection("users").add(data);
  const newUser = await userRef.get();
  return { id: userRef.id, ...newUser.data() };
};

module.exports = { getAllUsers, createUser };
