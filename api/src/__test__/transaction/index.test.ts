import request  from 'supertest'
import { app }  from '../../app'
import { AppDataSource } from '../../database/data-source';

describe('testes envolvendo a rota de transação de um usuario', () => {


    beforeEach(() => {
        return AppDataSource.initialize()
    });


    afterEach(() => {
        return AppDataSource.destroy()
    });  


    it('deve ser capaz de criar um transacao de saque valida', async () => {
        const res = await request(app)
            .post('/api/transaction/create')
            .send({_id: '62a7500667c14a5f3a37b063', amount: 10, type: false})
        
        expect(res.body.status).toBe(true)
    })


    it('deve ser capaz de criar um transacao de saque invalida pela quantidade requerida', async () => {
        const res = await request(app)
            .post('/api/transaction/create')
            .send({_id: '62a7500667c14a5f3a37b063', amount: 10.35, type: false})
        
        expect(res.body.status).toBe(false)
    })


    it('deve ser capaz de criar um transacao de saque invalida pelo saldo disponivel do usuário', async () => {
        const res = await request(app)
            .post('/api/transaction/create')
            .send({_id: '62a7500667c14a5f3a37b063', amount: 1000000, type: false})
        
        expect(res.body.status).toBe(false)
    })



    it('deve ser capaz de criar um transacao de depósito valida', async () => {
        const res = await request(app)
            .post('/api/transaction/create')
            .send({_id: '62a7500667c14a5f3a37b063', amount: 10, type: true})
        
        expect(res.body.status).toBe(true)
    })


    it('deve ser capaz de criar um transacao de depósito invalida pela quantidade requerida', async () => {
        const res = await request(app)
            .post('/api/transaction/create')
            .send({_id: '62a7500667c14a5f3a37b063', amount: 10.35, type: true})
        
        expect(res.body.status).toBe(false)
    })


})