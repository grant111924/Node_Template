import express from 'express';
import cors from 'cors';
import index from './routes/index.js';
import swagger from './routes/swagger.js'
process.env.TZ = 'Asia/Taipei';
const app = express()
const port = 3000

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api',index);
app.use('/swagger',swagger)

app.listen(port, () => {
  console.log(`[Server] Example app listening at http://localhost:${port}`)
  console.log('Press Ctrl+C to quit.')
})