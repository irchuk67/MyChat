import axios from "axios";

const baseURL = 'https://api.chucknorris.io/jokes/';
const chucknorrisJokes = axios.create({
    baseURL: baseURL
})
const randomJoke = async () =>{
    const response = await chucknorrisJokes.get('/random');
    return response.data;
}

export {randomJoke}