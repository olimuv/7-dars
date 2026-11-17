import { useEffect, useState } from 'react'
import {Link} from 'react-dom'

function User() {
  const [users, setUsers] = useState([])
  console.log(Users) 

  useEffect(() => {
    const getUser = async () => {
      let res = await fetch("https://jsonplaceholder.typicode.com/users")
      let date = await res.json()
      console.log(date)
    }

    getUser()
  }, [])

  return 
    <>
    <ul>
      { users.map( user => (
        <li>{ user.name}</li>
      ))}
    </ul>
      
    </>
  
}

export default User
