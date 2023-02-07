import './single.css'
import SideBar from '../../sideBar/SideBar';
import SinglePost from '../../singlePost/SinglePost';

const Single = () => {
    return (
        <div className='single'>
        <SinglePost></SinglePost>
        <SideBar></SideBar>
        </div>
    );
};

export default Single;