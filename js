import React, { useState, useEffect } from 'react';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/api/groundwater-data/')
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div>
            <h1>Groundwater Level Predictor</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>
                        Location: {item.location}, Groundwater Level: {item.groundwater_level}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
