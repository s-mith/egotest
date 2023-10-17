import React, { useState, useEffect } from 'react'


const UserList = () => {
    const [users, setUsers] = useState([])

    const getusers = async () => {
      const myPromise = new Promise((resolve, reject) => {
        fetch(`https://`+ process.env.CAPI +`/api/users`)
          .then((response) => response.json())
          .then((data) => {
            resolve(data)
          })
      })
      const result = await myPromise
      setUsers(result.result)
      console.log(users)
  
  
  
  
    }

    const first12 = (mystring) => {
        // return the first 12 characters of a string
        if (mystring.length < 10) {
          return mystring
        }
        return mystring.substring(0, 10)+'...'
    }
  
    // use useEffect to make a GET request to /api/users every 5 seconds
    useEffect(() => {
      getusers()
      const interval = setInterval(() => {
        getusers()
      }, 5000)
      return () => clearInterval(interval)
    }
      , [])

      
    return (
        <div className='h-full bg-leafpink-500'>
            <h3 className='text-leafyellow text-center text-2xl'>Users :P</h3>
            
            {users.length > 0 ? (<ol>
            {
              users.map((user, i) => {
                return (
                  <li key={i} className=' text-leafyellow mb-2 text-center'>
                    {first12(user.name)}
                  </li>
                )
              }
              )
            }
          </ol>) : <p>no users</p>}</div>
    )
}


export default UserList