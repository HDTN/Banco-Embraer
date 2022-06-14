import { Entity, ObjectIdColumn, Column } from "typeorm"
import { ObjectID } from "mongodb"
import { Transaction } from "./Transaction"

@Entity()
export class User {

    @ObjectIdColumn()
    _id: ObjectID

    @Column()
    email: string

    @Column()
    name: string

    @Column()
    password: string

    @Column()
    birth_date: string

    @Column()
    balance: number

    @Column()
    transactions?: Array<Transaction>

    @Column()
    documents?: Array<Doc>

    constructor(User){
        Object.assign(this, User)
        if(!this.balance){
            this.balance = 10000
        }
    }

}

interface Doc {
    type: string,
    value: string,
}
