import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import useFetch from '../hooks/useFetch';

const Home = () => {
  const { user } = useContext(AuthContext); // Obtiene el usuario del contexto
  const [postData, hasError] = useFetch('ticket/request'); // Hook para manejar solicitudes
  // Estados
  const [email, setEmail] = useState(user?.user?.email || '');
  const [numberOfTickets, setNumberOfTickets] = useState('');
  const [username, setUsername] = useState(user?.user?.name || '');

  const handleBuy = async (e) => {
    e.preventDefault();
    const body = { email, numberOfTickets, name: username };
    await postData(body);

    if (!hasError) {
      // Restablece los campos a sus valores por defecto o placeholders
      setEmail(user?.user?.email || '');
      setNumberOfTickets('');
      setUsername(user?.user?.name || '');
    }
  };

  return (
    <div className='App'>
      <div className="main_container">
        <h1 className='main_container_title'>Comprar Tickets</h1>
        <form className='main_container_form' onSubmit={handleBuy}>
          <label>Correo:</label>
          {user
            ? <input type="email" value={email} disabled />
            : <input
              type="email"
              placeholder='Tucorreo@hotmail.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          }

          <label>Nombre:</label>
          {user
            ? <input type="text" value={username} disabled />
            : <input
              type="text"
              placeholder='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          }

          <label>Cantidad de tickets:</label>
          <input
            type="number"
            placeholder='Ej: 4'
            value={numberOfTickets}
            onChange={(e) => setNumberOfTickets(e.target.value)}
            required
          />

          <button type='submit'>Comprar</button>
        </form>
        {hasError && <p>Error al solicitar los tickets. Por favor, intenta nuevamente.</p>}
      </div>
    </div>
  );
};

export default Home;
