import express from "express";
import {createServer} from "node:http";
import cors from "cors";
import {io} from "./websocket/socket.js";
import {studentsRouter} from "./routes/students.js";
import {coursesRouter} from "./routes/courses.js";
import swaggerUi from "swagger-ui-express";
import swaggerAutogen from "swagger-autogen";

export const app = express();
export const server = createServer(app);

app.use(cors({
    origin: '*'
}));

const options = {
    info: {
        title: "Schedule API",
        version: "1.0.0",
        description: "Schedule API",
    },
    definitions: {
        Student: {
            id: 1,
            name: "John Doe",
            email: "johndoe@gmail.com"
        }
    }
}
const route = ['./server/index.js'];
const def = await swaggerAutogen({openapi: '3.0.0'})
('./swagger.json', route, options);

app.use('/students', studentsRouter);
app.use('/courses', coursesRouter);
if(def){
    app.use('/swagger', swaggerUi.serve, swaggerUi.setup(def.data));
}

server.listen(3000, () => {
    io.listen(server, {
        cors: {
            origin: 'http://localhost:5173',
        }
    });
    console.log('server running at http://localhost:3000');
});