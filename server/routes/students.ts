import express from "express";
import {generateStudent} from "../../data/generator";
export const studentsRouter = express.Router();

studentsRouter.get('/:id', (req, res) => {
    /**
     * #swagger.tags = ['Students']
     * #swagger.description = 'Endpoint to get a student by id'
     * #swagger.parameters['id'] = {description: 'Student id'}
     * #swagger.responses[200] = {description: 'Student found', schema: { $ref: "#/definitions/Student" }}
     *
     */
    res.send(generateStudent(req.params.id));
})


studentsRouter.get<
    {id: string},
    string,
    null,
    {from: string, to: string}>
('/:id/schedule', (req, res) => {
    const from = new Date(req.query.from);
    const to = new Date(req.query.to);
    //res.send(getCourse(req.params.id, from, to));
    res.send("2")
});