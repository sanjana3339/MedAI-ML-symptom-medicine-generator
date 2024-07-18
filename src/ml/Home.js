import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MHome() {
    const [symptom1, setSymptom1] = useState('');
    const [symptom2, setSymptom2] = useState('');
    const [symptom3, setSymptom3] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/suggest', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "symptom1": symptom1, "symptom2": symptom2, "symptom3": symptom3 }),
        });
        const data = await response.json();
        navigate('/after', { state: { suggestion: data.suggestion } });
    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: 'url(https://t4.ftcdn.net/jpg/06/44/71/59/360_F_644715970_ms6pbT1zagBprZPT0mv9yoAgi2zJ4U2c.jpg)',
        backgroundSize: 'cover',
        fontFamily: 'Arial, sans-serif',
    };

    const formContainerStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: '32px',
        borderRadius: '10px',
        textAlign: 'center',
    };

    const selectStyle = {
        padding: '10px',
        margin: '5px',
        borderRadius: '5px',
    };

    return (
        <div style={containerStyle}>
            <div style={formContainerStyle}>
                <h1>MEDICINE SUGGESTION</h1>
                <br/><br/>
                <form onSubmit={handleSubmit}>
                    <label>Symptom 1:</label>
                    <select style={{
        padding: '10px',
        margin: '5px',
        borderRadius: '5px',
        border: '1px solid #ccc', // Add border
        fontSize: '16px', // Font size
        backgroundColor: '#f9f9f9', }} value={symptom1} onChange={(e) => setSymptom1(e.target.value)}>
                        <option value="">Select Symptom 1</option>
                        <option value="Fever">Fever</option>
                        <option value="Sore throat">Sore throat</option>
                        <option value="Runny nose">Runny nose</option>
                        <option value="Headache">Headache</option>
                        <option value="Fatigue">Fatigue</option>
                        <option value="Cough">Cough</option>
                        <option value="Stomach ache">Stomach ache</option>
                        <option value="Chest pain">Chest pain</option>
                        <option value="Joint pain">Joint pain</option>
                        <option value="Skin rash">Skin rash</option>
                        <option value="Nausea">Nausea</option>
                    </select>
                    <label>Symptom 2:</label>
                    <select style={{
        padding: '10px',
        margin: '5px',
        borderRadius: '5px',
        border: '1px solid #ccc', // Add border
        fontSize: '16px', // Font size
        backgroundColor: '#f9f9f9', // Light background
    }} value={symptom2} onChange={(e) => setSymptom2(e.target.value)}>
                        <option value="">Select Symptom 2</option>
                        <option value="Cough">Cough</option>
                        <option value="Sore throat">Sore throat</option>
                        <option value="Fever">Fever</option>
                        <option value="Muscle pain">Muscle pain</option>
                        <option value="Weakness">Weakness</option>
                        <option value="Sneezing">Sneezing</option>
                        <option value="Diarrhea">Diarrhea</option>
                        <option value="Shortness of breath">Shortness of breath</option>
                        <option value="Swelling">Swelling</option>
                        <option value="Itching">Itching</option>
                        <option value="Vomiting">Vomiting</option>
                    </select>
                    <label>Symptom 3:</label>
                    <select style={{
        padding: '10px',
        margin: '5px',
        borderRadius: '5px',
        border: '1px solid #ccc', // Add border
        fontSize: '16px', // Font size
        backgroundColor: '#f9f9f9', // Light background
    }} value={symptom3} onChange={(e) => setSymptom3(e.target.value)}>
                        <option value="">Select Symptom 3</option>
                        <option value="Headache">Headache</option>
                        <option value="Body ache">Body ache</option>
                        <option value="Congestion">Congestion</option>
                        <option value="Nausea">Nausea</option>
                        <option value="Fever">Fever</option>
                        <option value="Swollen glands">Swollen glands</option>
                        <option value="Loss of appetite">Loss of appetite</option>
                    </select>
                    <br/><br/>
                    <button
    type="submit"
    style={{
        margin:'20px',
        padding: '10px 20px',
        backgroundColor: 'blue', // Green background
        color: 'white', // White text
        border: 'none', // No border
        borderRadius: '5px', // Rounded corners
        cursor: 'pointer', // Pointer cursor on hover
        fontSize: '16px', // Font size
    }}
>
    SUGGEST!
</button>

                </form>
            </div>
        </div>
    );
}

export default MHome;

