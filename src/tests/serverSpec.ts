import supertest from "supertest";
import app from '../server';

const request = supertest(app);


describe('Test main endpoint', () => {
    it('test first endpoint', async () => {
      const response = await request.get('/');
      expect(response.status).toBe(200);
    })
  });
  