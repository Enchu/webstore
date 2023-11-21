import React, {FC} from 'react';

const Admin: FC<any> = () => {
    return (
        <div className="d-flex flex-column">
            <button className="mt-4 p-2">Добавить итем</button>
            <button className="mt-4 p-2">Добавить категорию</button>
        </div>
    );
};

export default Admin;