import { ObjectID } from "mongodb"

export class Transaction {

    _id: ObjectID

    time: Date

    type: Boolean

    amount: Number

    constructor(Transaction){
        Object.assign(this, Transaction)
        this.time = new Date()
    }

}
