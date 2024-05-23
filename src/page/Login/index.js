import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      this is login
      <Link to="/article">to article</Link>
      <button onClick = {() => navigate('/article')}>to article</button>
    </div>
  )
}

export default Login;
