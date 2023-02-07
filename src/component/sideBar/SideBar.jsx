import './sideBar.css'

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className='sidebarImg'
          src="https://previews.123rf.com/images/carballo/carballo1306/carballo130600042/20304502-natural-flower-with-stones-and-water.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi neque
          perspiciatis recusandae autem excepturi ducimus deserunt et quaerat
          explicabo aperiam exercitationem adipisci error accusamus itaque,
          assumenda praesentium quisquam nisi laborum enim? Cupiditate
          reiciendis quis perferendis architecto provident nostrum sunt
          assumenda.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Entertainment</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Story</li>
          <li className="sidebarListItem">History</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i class="sidebarIcon fa-brands fa-square-facebook"></i>
          <i class="sidebarIcon fa-brands fa-square-twitter"></i>
          <i class="sidebarIcon fa-brands fa-square-pinterest"></i>
          <i class="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
