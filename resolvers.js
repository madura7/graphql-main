import { nanoid } from "nanoid";

class User {
  constructor(id, { firstName, lastName, email, gender }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
  }
}

const userHolder = {};

const resolvers = {
  getUser: ({ id }) => {
    return new User(id, userHolder[id]);
  },
  createUser: ({ input }) => {
    let id = nanoid();
    userHolder[id] = input;
    return new User(id, input);
  },
};

export default resolvers;
