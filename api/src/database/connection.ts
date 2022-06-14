import { AppDataSource } from "./data-source"

AppDataSource.initialize()
    .then(() => console.log('DB CONNECTED'))
    .catch(e => {console.log('ERROR IN DB CONNECTION'); console.log(e)})