import React from 'react';

const AdminEvent = () => {
    const handleAddEvent = () =>{
        fetch('http://localhost:5000/addEvent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        })
    }
    return (
        <div>
            <h1>AdminEvent</h1>
            <button onClick={handleAddEvent}>Add Item</button>
        </div>
    );
};

export default AdminEvent;