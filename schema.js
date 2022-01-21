import { buildSchema } from "graphql";

const schema = buildSchema(`
    type User {
        id: ID
        firstName: String
        lastName: String
        email: String
        gender: Gender
    }

    enum Gender {
        MALE
        FEMALE
    }

    type Query {
        getUser(id: ID): User
    }

    input UserInput {
        id: ID
        firstName: String
        lastName: String
        email: String
        gender: Gender
    }

    type Mutation {
        createUser(input: UserInput): User
    }

`);

export default schema;
