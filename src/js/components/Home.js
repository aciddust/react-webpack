import { Link } from 'react-router-dom';
import Layout from './Layout';
import youtube from '../../img/youtube.png';

const Home = () => {
  return (
    <Layout>
      <h2>Page: Home</h2>
      <p>
        <Link to="/fragment">/fragment 으로 이동하는 링크</Link>
      </p>
      <img src={youtube} alt="youtube"/>
    </Layout>
    
  );
};
export default Home;