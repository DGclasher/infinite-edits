import {google} from 'googleapis'
import dotenv from 'dotenv'
dotenv.config()

const PRIVATE_KEY = process.env.PRIVATE_KEY
const CLIENT_EMAIL = process.env.CLIENT_EMAIL

const client = new google.auth.JWT(CLIENT_EMAIL, undefined, PRIVATE_KEY, ['https://www.googleapis.com/auth/spreadsheets'])

const sheets = google.sheets({
    version: 'v4',
    auth: client
})

export default sheets