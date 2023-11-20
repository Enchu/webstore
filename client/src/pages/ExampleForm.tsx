import React, {FC, useEffect, useState} from 'react';

interface User{
    name: string;
}

const ExampleForm : FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const usersList = users.map((item, index) => <li key={index}>{item.name}</li>);

    const getUsers = async () => {
        try{
            const response = await fetch('api/users', { method: 'get' });
            const responseJson = await response.json();
            setUsers(responseJson);
        }catch (e){
            console.error('Error fetching data:', e);
        }
    }

    return (
        <div>
            <button onClick={() => getUsers()}>Загрузить список пользователей</button>
            <ul>{usersList}</ul>
        </div>
    );
};

export default ExampleForm;