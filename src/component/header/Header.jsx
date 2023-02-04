import './header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blogs</span>
            </div>
            <img className='headerImg' src="https://img.redbull.com/images/c_crop,w_4499,h_2248,x_0,y_387,f_auto,q_auto/c_scale,w_1200/redbullcom/2015/07/27/1331737542701_2/moon-hill-natural-bridge-in-china" alt="" />
        </div>
    );
};

export default Header;