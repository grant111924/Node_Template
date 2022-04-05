import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

const router = express.Router()
const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'REST - Swagger',
      version: '1.0.0',
      description: 'REST API with Swagger doc',
      contact: {
        email: 'grant111924@gmail.com'
      }
    },
    tags: [
      {
        name: 'Auth',
        description: 'Verify API Auth'
      },
      {
        name: 'Users',
        description: 'API to manage your users.'
      }
    ],
    schemes: ['http:127.0.0.1:3112'],
    host: 'localhost:3112',
    basePath: '/swagger',
    components: {
      securitySchemes: {
        jwt: {
          type: "http",
          scheme: "bearer",
          in: "header",
          bearerFormat: "JWT"
        },
      }
    },
    security: [{
      jwt: []
    }],
  }, // 下面記得要寫上要讀哪邊的註解
  apis: ['./src/routes/*.js','./src/controllers/*.js','./src/models/*.js']
}


const swaggerSpec = swaggerJSDoc(options)

router.get('/json', function (req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.send(swaggerSpec)
})

router.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

export default router;