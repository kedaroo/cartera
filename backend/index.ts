import * as dotenv from 'dotenv'
import { app } from './app'
dotenv.config()

const PORT = process.env.PORT

if (PORT !== undefined) app.listen(PORT, () => console.log(`server is running on ${PORT}...`))
