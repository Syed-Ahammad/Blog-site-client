import './settings.css';
import SideBar from '../../sideBar/SideBar';

const Settings = () => {
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://wallpaperaccess.com/full/393735.jpg" alt="" />
                        <label htmlFor="fileInput">
                        <i className="settingsPPIcon fa-regular fa-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display: 'none'}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='Syed' />
                    <label>Email</label>
                    <input type="email" placeholder='syed@gmail.com' />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <SideBar></SideBar>
        </div>
    );
};

export default Settings;