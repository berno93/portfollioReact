import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navigation = ({ children }) => {
  return (
    <>
      <header style={{ padding: '2%', backgroundColor: 'lightgrey' }}>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/projects">Expériences</Link>
          </li>
          <li>
            <Link to="/skills">Compétences</Link>
          </li>
        </ul>
      </header>

      {children}
    </>
  );
};

export default Navigation;
