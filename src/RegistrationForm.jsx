import React, { useState } from 'react';

const RegistrationForm = () => {
    // Stati per ogni campo del form
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [experience, setExperience] = useState('');
    const [description, setDescription] = useState('');

    // Stato per la gestione degli errori
    const [errors, setErrors] = useState({});

    // Funzione di validazione del form
    const validateForm = () => {
        const newErrors = {};

        if (!fullName) newErrors.fullName = 'Il nome completo è richiesto';
        if (!username) newErrors.username = 'Lo username è richiesto';
        if (!password) newErrors.password = 'La password è richiesta';
        if (!specialization) newErrors.specialization = 'La specializzazione è richiesta';
        if (!experience || experience <= 0) newErrors.experience = 'Gli anni di esperienza devono essere un numero positivo';
        if (!description) newErrors.description = 'La descrizione è richiesta';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Restituisce true se non ci sono errori
    };

    // Funzione di submit del form
    const handleSubmit = (e) => {
        e.preventDefault();

        // Verifica se il form è valido
        if (validateForm()) {
            const userData = {
                fullName,
                username,
                password,
                specialization,
                experience,
                description,
            };

            console.log('Form Submitted:', userData);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nome Completo</label>
                <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
                {errors.fullName && <span>{errors.fullName}</span>}
            </div>

            <div>
                <label>Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                {errors.username && <span>{errors.username}</span>}
            </div>

            <div>
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <span>{errors.password}</span>}
            </div>

            <div>
                <label>Specializzazione</label>
                <select
                    value={specialization}
                    onChange={(e) => setSpecialization(e.target.value)}
                >
                    <option value="">Seleziona</option>
                    <option value="Full Stack">Full Stack</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                </select>
                {errors.specialization && <span>{errors.specialization}</span>}
            </div>

            <div>
                <label>Anni di Esperienza</label>
                <input
                    type="number"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                />
                {errors.experience && <span>{errors.experience}</span>}
            </div>

            <div>
                <label>Breve descrizione</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                {errors.description && <span>{errors.description}</span>}
            </div>

            <button type="submit">Registrati</button>
        </form>
    );
};

export default RegistrationForm;
