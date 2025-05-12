// import React, { useState, useMemo } from 'react';

// const RegistrationForm = () => {
//     // Stati per ogni campo del form
//     const [fullName, setFullName] = useState('');
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [specialization, setSpecialization] = useState('');
//     const [experience, setExperience] = useState('');
//     const [description, setDescription] = useState('');

//     // Stati per la gestione degli errori
//     const [errors, setErrors] = useState({});
//     const [valid, setValid] = useState({
//         username: false,
//         password: false,
//         description: false,
//     });

//     // Definisci i caratteri validi per username e password
//     const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const numbers = "0123456789";
//     const symbols = "!@#$%^&*()-_=+[]{}|;:'\\\",.<>?/`~";

//     // Validazione username con useMemo
//     const validateUsername = useMemo(() => {
//         return username.length >= 6 &&
//             [...username].every(char => letters.includes(char) || numbers.includes(char)); // Verifica che sia alfanumerico e lungo almeno 6 caratteri
//     }, [username]);

//     // Validazione password con useMemo
//     const validatePassword = useMemo(() => {
//         return password.length >= 8 &&
//             [...password].some(char => letters.includes(char)) && // Contiene almeno una lettera
//             [...password].some(char => numbers.includes(char)) && // Contiene almeno un numero
//             [...password].some(char => symbols.includes(char));  // Contiene almeno un simbolo
//     }, [password]);

//     // Validazione descrizione con useMemo
//     const validateDescription = useMemo(() => {
//         return description.trim().length >= 10 && description.trim().length <= 200; // Verifica la lunghezza della descrizione
//     }, [description]);

//     // Funzione di validazione del form
//     const validateForm = () => {
//         const newErrors = {};

//         // Validazione campi base
//         if (!fullName) newErrors.fullName = 'Il nome completo è richiesto';
//         if (!username) newErrors.username = 'Lo username è richiesto';
//         if (!password) newErrors.password = 'La password è richiesta';
//         if (!specialization) newErrors.specialization = 'La specializzazione è richiesta';
//         if (!experience || experience <= 0) newErrors.experience = 'Gli anni di esperienza devono essere un numero positivo';
//         if (!description) newErrors.description = 'La descrizione è richiesta';

//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0; // Restituisce true se non ci sono errori
//     };

//     // Funzione di submit del form
//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Verifica se il form è valido
//         if (validateForm()) {
//             const userData = {
//                 fullName,
//                 username,
//                 password,
//                 specialization,
//                 experience,
//                 description,
//             };

//             console.log('Form Submitted:', userData);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label>Nome Completo</label>
//                 <input
//                     type="text"
//                     value={fullName}
//                     onChange={(e) => setFullName(e.target.value)}
//                 />
//                 {errors.fullName && <span>{errors.fullName}</span>}
//             </div>

//             <div>
//                 <label>Username</label>
//                 <input
//                     type="text"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                 />
//                 {validateUsername ? <span style={{ color: 'green' }}>Username valido</span> : <span style={{ color: 'red' }}>Username deve contenere almeno 6 caratteri alfanumerici</span>}
//             </div>

//             <div>
//                 <label>Password</label>
//                 <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 {validatePassword ? <span style={{ color: 'green' }}>Password valida</span> : <span style={{ color: 'red' }}>La password deve contenere almeno 8 caratteri, 1 lettera, 1 numero e 1 simbolo</span>}
//             </div>

//             <div>
//                 <label>Specializzazione</label>
//                 <select
//                     value={specialization}
//                     onChange={(e) => setSpecialization(e.target.value)}
//                 >
//                     <option value="">Seleziona</option>
//                     <option value="Full Stack">Full Stack</option>
//                     <option value="Frontend">Frontend</option>
//                     <option value="Backend">Backend</option>
//                 </select>
//                 {errors.specialization && <span>{errors.specialization}</span>}
//             </div>

//             <div>
//                 <label>Anni di Esperienza</label>
//                 <input
//                     type="number"
//                     value={experience}
//                     onChange={(e) => setExperience(e.target.value)}
//                 />
//                 {errors.experience && <span>{errors.experience}</span>}
//             </div>

//             <div>
//                 <label>Breve descrizione</label>
//                 <textarea
//                     value={description}
//                     onChange={(e) => setDescription(e.target.value)}
//                 />
//                 {validateDescription ? <span style={{ color: 'green' }}>Descrizione valida</span> : <span style={{ color: 'red' }}>La descrizione deve contenere tra 10 e 200 caratteri</span>}
//             </div>

//             <button type="submit">Registrati</button>
//         </form>
//     );
// };

// export default RegistrationForm;



// MILESTONE 3

import React, { useState, useMemo, useRef } from 'react';

const RegistrationForm = () => {
    // Campi controllati
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [description, setDescription] = useState('');

    // Campi non controllati (usiamo useRef)
    const fullNameRef = useRef();
    const specializationRef = useRef();
    const experienceRef = useRef();

    // Errori
    const [errors, setErrors] = useState({});

    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()-_=+[]{}|;:'\\\",.<>?/`~";

    const validateUsername = useMemo(() => {
        return username.length >= 6 &&
            [...username].every(char => letters.includes(char) || numbers.includes(char));
    }, [username]);

    const validatePassword = useMemo(() => {
        return password.length >= 8 &&
            [...password].some(char => letters.includes(char)) &&
            [...password].some(char => numbers.includes(char)) &&
            [...password].some(char => symbols.includes(char));
    }, [password]);

    const validateDescription = useMemo(() => {
        return description.trim().length >= 10 && description.trim().length <= 200;
    }, [description]);

    const validateForm = () => {
        const newErrors = {};

        const fullName = fullNameRef.current.value.trim();
        const specialization = specializationRef.current.value;
        const experience = experienceRef.current.value;

        if (!fullName) newErrors.fullName = 'Il nome completo è richiesto';
        if (!username) newErrors.username = 'Lo username è richiesto';
        if (!password) newErrors.password = 'La password è richiesta';
        if (!specialization) newErrors.specialization = 'La specializzazione è richiesta';
        if (!experience || experience <= 0) newErrors.experience = 'Anni di esperienza non validi';
        if (!description) newErrors.description = 'La descrizione è richiesta';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            const userData = {
                fullName: fullNameRef.current.value.trim(),
                username,
                password,
                specialization: specializationRef.current.value,
                experience: experienceRef.current.value,
                description,
            };

            console.log('Form Submitted:', userData);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nome Completo</label>
                <input type="text" ref={fullNameRef} />
                {errors.fullName && <span>{errors.fullName}</span>}
            </div>

            <div>
                <label>Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                {validateUsername ? <span style={{ color: 'green' }}>Username valido</span> : <span style={{ color: 'red' }}>Username deve contenere almeno 6 caratteri alfanumerici</span>}
            </div>

            <div>
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {validatePassword ? <span style={{ color: 'green' }}>Password valida</span> : <span style={{ color: 'red' }}>La password deve contenere almeno 8 caratteri, 1 lettera, 1 numero e 1 simbolo</span>}
            </div>

            <div>
                <label>Specializzazione</label>
                <select ref={specializationRef}>
                    <option value="">Seleziona</option>
                    <option value="Full Stack">Full Stack</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                </select>
                {errors.specialization && <span>{errors.specialization}</span>}
            </div>

            <div>
                <label>Anni di Esperienza</label>
                <input type="number" ref={experienceRef} />
                {errors.experience && <span>{errors.experience}</span>}
            </div>

            <div>
                <label>Breve descrizione</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                {validateDescription ? <span style={{ color: 'green' }}>Descrizione valida</span> : <span style={{ color: 'red' }}>La descrizione deve contenere tra 10 e 200 caratteri</span>}
            </div>

            <button type="submit">Registrati</button>
        </form>
    );
};

export default RegistrationForm;
