import logo from './Planete1.png';
import './App.css';

import { FaLinkedin } from 'react-icons/fa';
import { useEffect, useState } from 'react';




function App() {
  // const Quote = require('inspirational-quotes');

  const { Configuration, OpenAIApi } = require("openai");


  const configuration = new Configuration({

    apiKey: process.env.REACT_APP_OPENAI_API_KEY,

  });

  const openai = new OpenAIApi(configuration);

  const [aiQuote, setAiQuote] = useState("d");

  useEffect(() => {
    async function fetchData() {
      const completion = await openai.createCompletion({
        model: "text-curie-001",
        prompt: "Motivation quote",
        max_tokens: 100,
      });
      console.log(completion.data)
      setAiQuote(completion.data.choices[0].text)
    }
    fetchData(); 

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <div className='quote mt-8'>
          <a
            href="#"
            class=" w-1/2 rounded-xl animate-border inline-block bg-white from-pink-500 via-red-500 to-yellow-500 bg-[length:400%_400%] p-0.5 bg-gradient-to-r"
          >
            <p className='text-3xl font-bold '>{aiQuote}</p>
            {/* <p className='text-3xl font-bold '>{Quote.getQuote().text}</p> */}

          </a>
          <p>Powered by OpenAi</p>

        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className='linkedin mt-8'>
            <FaLinkedin ></FaLinkedin>
            <p className='name'>Helwan Mandé</p>

          </div>
        </a>

      </header>
    </div>
  );
}

export default App;
