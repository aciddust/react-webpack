import { Link } from 'react-router-dom';
import Layout from './Layout';
const Home = () => {
  return (
    <Layout>
      <h2>Page: Home</h2>
      <p>
        <Link to="/fragment">/fragment 으로 이동하는 링크</Link>
      </p>
    </Layout>
    
  );
};
export default Home;