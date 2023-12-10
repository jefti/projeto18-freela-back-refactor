import httpStatus from 'http-status';
import supertest from 'supertest';
import app from '../src/app';

const api = supertest(app);

describe('/health', () => {
  it("Should return 200 and i'm okay!", async () => {
    const { text, status } = await api.get('/health');
    expect(status).toBe(httpStatus.OK);
    expect(text).toBe("I'm ok!");
  });
});
describe('/category Integration test', () => {
  it("Should return 200 and i'm okay!", async () => {
    const { text, status } = await api.get('/health');
    expect(status).toBe(httpStatus.OK);
    expect(text).toBe("I'm ok!");
  });
});
