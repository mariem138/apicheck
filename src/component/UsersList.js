import React, {useState} from 'react'
import Cards from './Cards'
import axios from 'axios'

const Users = () => {
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((err)=>console.log(err))
          },
       [])

    const {listOfuser, setUsers}=setState(null)
    return (
        <div>
            { 
             users ? listOfuser.map((el,i) => (

                <Cards key={i} user={el} />
             ))  : <div class="spinner-border" role="status">
             <span class="visually-hidden">Loading...</span>
         </div>
            }
           
        </div>
    )
}

export default Users
