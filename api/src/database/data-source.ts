import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mongodb",
    url: 'mongodb+srv://hybrid_admin:7gGTPVqKfaIEsJ0x@cluster0.7vmbj.mongodb.net/teste-embraer?retryWrites=true&writeConcern=majority',
    synchronize: true,
    logging: false,
    entities: ["src/entities/*.ts"],
    migrations: [],
    subscribers: [],
    useUnifiedTopology: true
})
