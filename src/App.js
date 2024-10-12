import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [ads, setAds] = useState([]);
    const [newAd, setNewAd] = useState('');

    const handleAddAd = () => {
        if (newAd.trim()) {
            setAds([...ads, newAd]);
            setNewAd('');
        }
    };

    const handleDeleteAd = (index) => {
        const updatedAds = ads.filter((_, i) => i !== index);
        setAds(updatedAds);
    };

    return (
        <div className="app">
            <h1>Оголошення</h1>
            <div className="ad-form">
                <input
                    type="text"
                    placeholder="Введіть текст оголошення"
                    value={newAd}
                    onChange={(e) => setNewAd(e.target.value)}
                />
                <button onClick={handleAddAd}>Додати</button>
            </div>
            <ul className="ad-list">
                {ads.map((ad, index) => (
                    <li key={index}>
                        {ad}
                        <button onClick={() => handleDeleteAd(index)}>Видалити</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
