import React from 'react'
import axios from "axios";
import { useState, useEffect } from 'react';
import Card from "../components/Card"


const User = () => {
    const [users, setUsers] = useState([]);
    const fetchUsers = async () =>{
        try{
            const response = await axios.get('http://localhost:9291/user/all');
            const data = await response.data;
            return await setUsers(data)
        }
        catch(err){
            console.log({err})
            return err
        }
    }

    const updateUser =async (id, email) => {
        try {
            const response = await axios.put(`http://localhost:9291/user/${id}`, {email})
            const data = await response.data;
            await console.log({data});
            return data
        } catch (error) {
            console.log({error})
            return error
        }
    }

    useEffect(() => {
      fetchUsers();
    }, [])
    
  return (
    <ul>{users && users.map(user=>(
        <li key={user.id}>
            <Card  user={user} updateUser={updateUser}/>
        </li>
    ))}</ul>
  )
}

export default User