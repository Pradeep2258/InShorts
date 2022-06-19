import React,{useState,message} from 'react'
import Newslist from './NewsList';

export const SearchNews = () => {
    const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);

    console.log('value is:', event.target.value);
  };

  const handleClick = event => {
    event.preventDefault();
    // 👇️ value of input field
    console.log('handleClick 👉️', message);
    <Newslist message={message}></Newslist>
    
  };
  return (
    <div className='news-app'>
      <input
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={message}
        autoComplete="off"
      />
      <button onClick={handleClick}>Click</button>
      <div><Newslist message={message}></Newslist></div>
    </div>
  )
}

export default SearchNews
