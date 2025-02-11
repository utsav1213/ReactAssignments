import React from 'react'

const UserList = () => {
    const users = [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 22 },
      ];
  return (
    <div>
            <h2>User list:</h2>
            <ul>
                {users.map((user)=>(
                    <li key={user.id}>
                        {user.name}-{user.age}
                    </li>
                ))}
            </ul>
      
    </div>
  )
}

export default UserList
