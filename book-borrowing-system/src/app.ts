import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { borrowBookHandler } from './controllers/bookController';

const app = express();
app.use(express.json());

// Swagger setup
const swaggerDocument = {
  openapi: '3.0.0',
  info: {
    title: 'Book Borrowing API',
    version: '1.0.0',
  },
  paths: {
    '/borrow': {
      post: {
        summary: 'Borrow a book',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  memberCode: { type: 'string' },
                  bookCode: { type: 'string' },
                },
                required: ['memberCode', 'bookCode'],
              },
            },
          },
          responses: {
            '200': {
              description: 'Successful response',
            },
            '400': {
              description: 'Error response',
            },
          },
        },
      },
    },
  },
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.post('/borrow', borrowBookHandler);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
