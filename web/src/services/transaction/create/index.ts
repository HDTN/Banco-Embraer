import api from '../../api'

export default (body: any) => {
    return api().post('/transaction/create', body)
        .then((result: { data: any }) => result.data)
        .catch((e: { response: { data: any } }) => e.response.data)
}