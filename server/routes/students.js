import express from "express";
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

const packageDefinition = protoLoader.loadSync('grpc/proto/schedule.proto');
const scheduleProto = grpc.loadPackageDefinition(packageDefinition);

const client = new scheduleProto.ScheduleService('127.0.0.1:9090', grpc.ChannelCredentials.createInsecure());

export const studentsRouter = express.Router();

studentsRouter.get('/:id', (req, res) => {
    /**
     * #swagger.tags = ['Students']
     * #swagger.description = 'Endpoint to get a student by id'
     * #swagger.parameters['id'] = {description: 'Student id'}
     * #swagger.responses[200] = {description: 'Student found', schema: { $ref: "#/definitions/Student" }}
     *
     */
    /*client.GetStudent({studentId: "1"},(err, response) => {
        if(err!==null){
            console.error(err);
        }
        res.send(response);
    });*/
    res.send({id: 1, name: "Mohamed", surname: "Amine", email: "", age: 23});
}).get('/:id/schedule', (req, res) => {
    const from = new Date(req.query.from);
    const to = new Date(req.query.to);
    //res.send(getCourse(req.params.id, from, to));
});