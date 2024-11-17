import { User } from "../models/user.js";

export const seedUsers = async () => {
  await User.bulkCreate(
    [
      { username: "Mando", password: "password" },
      { username: "geralt", password: "password" },
      { username: "joel", password: "password" },
    ],
    { individualHooks: true }
  );
};
