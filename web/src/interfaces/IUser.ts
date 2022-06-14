export default interface IUser {
    _id: string,
    balance: number,
    email: string,
    documents: Array<IDoc>
    name: string,
    transactions: Array<ITransaction>,
    birth_date: string,
}

interface IDoc {
    type: string,
    value: string,
}

interface ITransaction {
    type: boolean,
    amount: number,
    time: Date
}