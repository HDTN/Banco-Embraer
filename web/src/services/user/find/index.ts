import api from '../../api'

export default (query: any) => {
    return api().get('/user/find', { params: { ...query } })
        .then((result: { data: any }) => result.data)
        .catch((e: { response: { data: any } }) => e.response.data)
}