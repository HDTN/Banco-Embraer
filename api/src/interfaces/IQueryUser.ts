import { ObjectID } from "mongodb";

export default interface IQueryUser {
    _id?: ObjectID,
    email?: string,
}