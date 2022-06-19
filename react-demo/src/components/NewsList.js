import React,{useState,useEffect} from 'react'
import axios from 'axios'
import NewsItem from './NewsItem'

const Newslist = ({message}) => {
   
    const[articles,setarticles] = useState([]) 
   
    useEffect(()=> {
        const getArticels = async () => {
            const response = await axios.get('https://newsapi.org/v2/everything',
            { params: { 
              q: message ,
              from: '2022-05-19',
              sortBy: 'publishedAt',
              apiKey:'3a56fa6053044332bf911d7527d26e1a'} })           
            setarticles(response.data.articles)
        }
        getArticels()
    },[])
    return (
      <div>
         {articles.map(article=>{
            return (
              <NewsItem 
                url = {article.url}
                urlToImage = {article.urlToImage}
                title = {article.title}
                description = {article.description}
              />
              )
         })}
      </div>
    )
}

export default Newslist