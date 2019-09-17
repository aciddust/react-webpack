import { Link } from 'react-router-dom';
import Layout from './Layout';
import youtube from '../../img/youtube.png';
import ImageSmall from './ImageSmall';
import Counter from './Counter';
const Home = () => {
  return (
    <Layout>
      <h2>Page: Home</h2>
      <p>
        <Link to="/fragment">/fragment 으로 이동하는 링크</Link>
      </p>
      <ImageSmall img={youtube} link='https://youtube.com' txt='Youtube Icon'></ImageSmall>
      <Counter></Counter>
    </Layout>
  );
};
export default Home;