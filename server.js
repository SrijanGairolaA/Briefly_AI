import express from 'express'
import axios from 'axios'
import cors from 'cors'
import dotenv from 'dotenv';

dotenv.config();


const app = express();
const PORT = 5000;

app.use(cors(
    {
        origin: '*' 
    }
))

app.get('/news/:query', async(req,res)=>{

    const query = req.params.query
    console.log('recived query: ', query)


    if(!query){
        return res.status(400).json({error: 'Quert parameter is required'});
    }

    try {
        const apiKey = process.env.NEWS_API_KEY
        const newsApiUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`

        const response = await axios.get(newsApiUrl);

        if(response){
            res.json(response.data.articles)
        }
        else{
            console.log("Error response isnt coming")
        }

        

    } catch (error) {

        console.error("Error in fetching news: ",error)
        res.status(500).json({error: 'Failed to fetch news from the API'})
        
    }
})

app.listen(PORT, ()=>{
    console.log(`server is running on the ${PORT}`)
})
