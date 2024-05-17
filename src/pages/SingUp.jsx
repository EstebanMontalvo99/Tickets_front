import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const SignUp = () => {
  //Estados
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate(); // Hook para redirección después del registro exitoso
  const [, postData] = useFetch('client/register');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      name: username,
      email: email,
      password: password
    };
    await postData(newUser);
    if (password !== confirmPassword) {
      setError(true);
      return;
    }
    navigate('/login'); // Redirige al usuario a la página de login
  };


  return (
    <div className='App'>
      <div className="main_container">
        <h2 className='main_container_title'>Sign Up</h2>
        <form className='main_container_form' onSubmit={handleSubmit}>
          <label>
            Nombre:
          </label>
          <input
            type="text"
            placeholder='Nombre'
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label>
            Correo:
          </label>
          <input
            type="email"
            placeholder='Tucorreo@hotmail.com'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>
            Contraseña:
          </label>
          <input
            type="password"
            placeholder='Contraseña'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>
            Repetir contraseña:
          </label>
          <input
            type="password"
            placeholder='Contraseña'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          {error && <p className='error'>'Las contraseñas no coinciden'</p>} {/* Muestra el mensaje de error si las contraseñas no coinciden */}

          <button type='submit'>Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;