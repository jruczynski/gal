import express from "express";
import cors from "cors";
import {ApolloServer} from '@apollo/server';
import {expressMiddleware} from "@apollo/server/express4";
import students from "../data/students.json" assert { type: "json" };
import courses from "../data/courses.json" assert { type: "json" };
import lecturers from "../data/lecturers.json" assert { type: "json" };
import rooms from "../data/rooms.json" assert { type: "json" };
import groups from "../data/groups.json" assert { type: "json" };

const typeDefs = `#graphql
    type Student {
        id: Int
        name: String
        surname: String
        email: String
        assignedGroups: [Int]
    }

    type Group {
        id: Int
        students: [Int]
    }

    type Date {
        start: String
        end: String
    }

    type Course {
        id: Int
        name: String
        description: String
        lecturerId: Int
        lecturer: Lecturer
        group: Int
        room: String
        date: Date
    }

    type Lecturer {
        id: Int
        name: String
        surname: String
        email: String
        assignedCourses: [Int]
    }

    type Room {
        id: String
        courses: [Int]
    }

    type Query {
        students: [Student]
        student(id: Int!): Student
        lecturers: [Lecturer]
        courses: [Course]
        course(id: Int!): Course
    }
`;
const resolvers = {
    Query: {
        students: () => students,
        student: (parent, args) => students.find(s => s.id === args.id),
        courses: () => courses,
        course: (parent, args) => courses.find(c => c.id === args.id),
    },
    Course: {
        lecturerId: (parent) => parent.lecturer,
        lecturer: (parent) => lecturers.find(l => l.id === parent.lecturer),
    }
};

const server = new ApolloServer({typeDefs, resolvers});
await server.start();

const app = express();
app.use('/graphql', cors(), express.json(), expressMiddleware(server));

app.use(cors({
    origin: '*'
}));

app.listen(8989, () => {
    console.log("Started of http://localhost:8989")
});