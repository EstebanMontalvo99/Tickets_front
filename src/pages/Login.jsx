import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import { AuthContext } from '../context/AuthProvider';

const Login = () => {
  const { login } = useContext(AuthContext); // Obtiene la función de inicio de sesión del contexto de autenticación
  //Estados
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, postData, hasError] = useFetch('client/login'); // Utiliza el hook personalizado para manejar las solicitudes
  const navigate = useNavigate(); // Hook para la navegación

  // Función para manejar el envío del formulario de inicio de sesión
  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = { email, password };
    await postData(credentials);
  };
  useEffect(() => {
    // Verifica si no hay errores y si hay datos después de la solicitud
    if (!hasError && data) {
      login(data);
      navigate('/');
    }
  }, [data, hasError, login, navigate]);

  return (
    <div className='App'>
      <div className="main_container">
        <h2 className='main_container_title'>Login</h2>
        <form className='main_container_form' onSubmit={handleSubmit}>
          <label>Correo:</label>
          <input
            type="email"
            placeholder='Tucorreo@hotmail.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Contraseña:</label>
          <input
            type="password"
            placeholder='Contraseña'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        {hasError ? <p>Error al iniciar sesión.</p> : ""}
      </div>
    </div>
  );
};

export default Login;
