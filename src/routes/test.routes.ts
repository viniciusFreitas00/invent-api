import { Router } from 'express';

import Test from '../services/Test.services';

const testRouter = Router();

testRouter.get('/', async (request, response) => {
  const test = new Test();

  const aux = await test.getMessage();

  return response.json({ data: aux.rows });
});

export default testRouter;
