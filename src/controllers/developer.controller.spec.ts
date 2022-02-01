import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../app.module';

describe('Developer', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();

    app = moduleFixture.createNestApplication();

    await app.init();
  });

  it('/api/developer (POST) - Success', async () => {
    const developer = {
      nivel: 'Pleno D',
      nome: 'João Paulo Fernandes Brasil',
      sexo: 'Masculino',
      datanascimento: '07/07/1997',
      idade: 24,
      hobby: 'Programar o dia Todo'
    };

    const result = await request(app.getHttpServer())
      .post('/api/developer')
      .send(developer)
      .set('Accept', 'application/json');

    expect(result.status).toBe(201);
    expect(result.body).toEqual({
      error: false,
      message: 'Cadastro efetuado com Sucesso !',
      statusCode: 200
    });
  });

  it('/api/developer (PUT)', async () => {
    const developer = {
      nivel: 'Pleno A',
      nome: 'João Paulo Fernandes Brasil',
      sexo: 'Masculino',
      datanascimento: '07/07/1997',
      idade: 24,
      hobby: 'Programar o dia Todo'
    };

    const result = await request(app.getHttpServer())
      .put(`/api/developer/61f976276e58dc3939d81f90`)
      .send(developer)
      .set('Accept', 'application/json');

    expect(result.body).toEqual({
      error: false,
      message: 'Dados alterado com Sucesso !',
      statusCode: 200
    });
  });

  it('/api/developer (GET) - ALL', async () => {
    return await request(app.getHttpServer()).get('/api/developer').expect(200);
  });

  it('/api/developer (GET) ', async () => {
    const id = '61f976276e58dc3939d81f90';
    return await request(app.getHttpServer())
      .get(`/api/developer/${id}`)
      .expect(200);
  });

  it('/api/developer (DELETE) - Error', async () => {
    const result = await request(app.getHttpServer())
      .delete('/api/developer/61f8233d979297d15438f569')
      .set('Accept', 'application/json');

    expect(result.body).toEqual({
      error: true,
      message:
        'Não foi ecnontrado nenhum desenvolvedor com esse id: 61f8233d979297d15438f569',
      statusCode: 404
    });
  });
  it('/api/developer (DELETE) - Success', async () => {
    const id = '61f976276e58dc3939d81f90';
    const result = await request(app.getHttpServer())
      .delete(`/api/developer/${id}`)
      .set('Accept', 'application/json');

    expect(result.status).toBe(200);
    expect(result.body).toEqual({
      error: false,
      statusCode: 200,
      message: 'Deletado com Sucesso !'
    });
  });
});
