import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../app.module';

describe('Level', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();

    app = moduleFixture.createNestApplication();

    await app.init();
  });

  it('/api/level (POST) - Success', async () => {
    const level = {
      nivel: 'Pleno A'
    };

    const result = await request(app.getHttpServer())
      .post('/api/level')
      .send(level)
      .set('Accept', 'application/json');

    expect(result.status).toBe(201);
    expect(result.body).toEqual({
      error: false,
      message: 'Cadastro efetuado com Sucesso !',
      statusCode: 200
    });
  });

  it('/api/level (PUT)', async () => {
    const level = {
      nivel: 'Pleno B'
    };

    const result = await request(app.getHttpServer())
      .put(`/api/level/61f831b655f59d10374f0169`)
      .send(level)
      .set('Accept', 'application/json');

    expect(result.body).toEqual({
      error: false,
      message: 'Dados alterado com Sucesso !',
      statusCode: 200
    });
  });

  it('/api/level (GET) - ALL', async () => {
    return await request(app.getHttpServer()).get('/api/level').expect(200);
  });

  it('/api/level (GET) ', async () => {
    const id = '61f831b655f59d10374f0169';
    return await request(app.getHttpServer())
      .get(`/api/level/${id}`)
      .expect(200);
  });

  it('/api/level (DELETE) - Error', async () => {
    const result = await request(app.getHttpServer())
      .delete('/api/level/61f8233d979297d15438f569')
      .set('Accept', 'application/json');

    expect(result.body).toEqual({
      error: true,
      message:
        'Não foi ecnontrado nenhum Nível com esse id: 61f8233d979297d15438f569',
      statusCode: 404
    });
  });
  it('/api/level (DELETE) - Success', async () => {
    const id = '61f831b655f59d10374f0169';
    const result = await request(app.getHttpServer())
      .delete(`/api/level/${id}`)
      .set('Accept', 'application/json');

    expect(result.status).toBe(200);
    expect(result.body).toEqual({
      error: false,
      statusCode: 200,
      message: 'Deletado com Sucesso !'
    });
  });
});
