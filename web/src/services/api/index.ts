import axios from 'axios'
import { config } from '../../config'

const ENDPOINT = 'api'

export default () => axios.create({
  baseURL: `http://${config.API_HOST}:${config.API_PORT}/${ENDPOINT}`,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
});

