import React from 'react';
import Button from "./components/button/Button";

const App = () => {
    const name='Samat'
    return (
        <div>
            <Button newName={name}/>
        </div>
    );
};

export default App;