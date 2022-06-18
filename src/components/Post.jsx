import React from 'react'
import {useParams} from 'react-router-dom'

/*
I dont think I need to explain what is going on here ATM, it seems self explanatory
*/

const Post = () => {
  const params = useParams()

  return (
    <div>
      <h1>Post ID: {params.id}</h1>
      <h2>Post ID: {params.name}</h2>
    </div>
  )
}

export default Post

/* 
He is going over a redirect, not going to put that in here since it is optional.  Good to know though
He imported {Navigate, useNavigate} from 'react-router-dom' and he got rid of the const param and useParams
He also made a new const called status and set it to 200, with a conditional to make sure it did not switch to 
404. 

Another side note, in the App.js he had to change /post => /post/* for the redirect.  Not putting it all in
since it was a onclick he made a handler for and made a <Routes><Route path='/show' element={<h1>Hello</h1>}
inside of this file. 
*/