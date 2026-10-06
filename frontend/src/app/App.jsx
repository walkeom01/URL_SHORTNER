import React, { useState, useEffect } from 'react'
import axios from "axios"


const App = () => {

  const [inputvalue, setInputvalue] = useState();
  const [url, setUrl] = useState();
  const [currenturl, setCurrenturl] = useState();

  async function fetchUrl() {
    let res = await axios.get("http://localhost:5173/api/url")
    console.log(res.data)

    const responseData = res.data;

    setUrl(responseData.data.urls)

  }

  async function createShortUrl(){
    const response = await axios.post("http://localhost:5173/api/url",{
      url:inputvalue
    })

    setCurrenturl({
      originalUrl:response.data.data.originalUrl,
      shortencode:response.data.data.shortenUrl
    })

    fetchUrl()

  }

  async function deletUrl(id) {
    await axios.delete(`http://localhost:5173/api/url/${id}`)  
    
    fetchUrl()
  }

  useEffect(() => {
    fetchUrl()
  }, [])

  return (
    <div> UI will be available soon

     
    </div>
  )
}

export default App