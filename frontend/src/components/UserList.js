import React, { useState, useEffect } from 'react'

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        let url = "https://jsonplaceholder.typicode.com/users"
        
        fetch(url)
            .then(response => response.json())
            .then(json => {
                json.forEach(element => {
                    let userData = {
                        id: element.id,
                        name: element.name,
                        website: element.website
                    }
                    setUsers(users => [...users, userData])
                });
            })
    }, [])

    return (
        <>
            <h3>JsonPlaceHolder User List</h3>
            {users.map(userData => (
                <figure key={userData.id}>
                    <figcaption>{userData.name}</figcaption>
                    <figcaption>{userData.website}</figcaption>
                </figure>
            ))}
        </>
    )
}

export default UserList