import { RequestHandler } from "express";
import { Unit } from "../models/unit";

const units: Unit[] = [
    {
        id: "1",
        name: "SL unit 1"
    },
    {
        id: "2",
        name: "SL unit 2"
    }
];

export const getUnits: RequestHandler = (request, response, next) => {
    response.json({ units: units })
};