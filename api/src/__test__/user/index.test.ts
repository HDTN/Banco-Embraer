import request  from 'supertest'
import { app }  from '../../app'
import { AppDataSource } from '../../database/data-source';

describe('testes envolvendo a rota de busca por um usuario', () => {

    beforeEach(() => {
        return AppDataSource.initialize()
    });


    afterEach(() => {
        return AppDataSource.destroy()
    });  


    it('deve ser capaz de buscar por um usuario no banco de dados pelo id', async () => {
        const res = await request(app)
            .get('/api/user/find')
            .query({_id: '62a7500667c14a5f3a37b063'})

        expect(res.body.status).toBe(true)
        expect(res.body.response.length > 0 ).toBeTruthy();
    })
})