import './home.css';
import Header from '../../header/Header';
import Posts from '../../posts/Posts';
import SideBar from '../../sideBar/SideBar';

const Home = () => {
    return (
        <div>
          <Header></Header>
          <div className="home">
            <Posts></Posts>
            <SideBar></SideBar>
          </div>
        </div>
    );
};

export default Home;