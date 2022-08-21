import { useNavigate } from 'react-router-dom';
import { ReactComponent as CatLogo } from '../logo.svg';

function Header() {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate('/');
  };
  return (
    <div role="presentation" className="mb-5 cursor-pointer" onClick={navigateToHome}>
      <CatLogo />
    </div>
  );
}

export default Header;
