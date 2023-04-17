import axios, { AxiosRequestConfig} from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.API_KEY;
const apiURL = process.env.API_URL;

if (!apiKey) {
    throw new Error('API_KEY não definido no arquivo .env');
}

if (!apiURL) {
    throw new Error ('API_URL não definido no arquivo .env');
}

const config: AxiosRequestConfig = {
    headers: {
        'Client-ID': apiKey,
        'Authorization': 'Bearer ' + apiKey,
    },
};

const igdb = axios.create(config);

export default igdb