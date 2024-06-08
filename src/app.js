import express from 'express';
import cors from 'cors';
import hadithroute from './routers/hadiths.js'


const app = express()
app.use(cors())
app.use(hadithroute)

export default app