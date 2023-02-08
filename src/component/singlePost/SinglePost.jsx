import './singlePost.css';

const SinglePost = () => {
    return (
        <div className='singlePost'>
           <div className="singlePostWrapper">
            <img 
            className="singlePostImg"
            src="https://previews.123rf.com/images/carballo/carballo1306/carballo130600042/20304502-natural-flower-with-stones-and-water.jpg" alt="" />
           <h1 className="singlePostTitle">
            Lorem, ipsum dolor.
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
            </div>
           </h1>
           <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>Seyd</b></span>
            <span className="singlePostDate">1 hour ago</span>
           </div>
           <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quos odio vero, nulla, nostrum sapiente accusamus magnam aliquam consequuntur, aut maiores quod nobis in deserunt dolor exercitationem porro. Modi non laudantium cum perferendis cupiditate deserunt autem mollitia error deleniti, doloremque molestiae totam reiciendis magnam libero natus labore eaque ipsa nesciunt fuga maxime. Nulla pariatur ipsam provident eum! Ipsum, sed similique?Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quos odio vero, nulla, nostrum sapiente accusamus magnam aliquam consequuntur, aut maiores quod nobis in deserunt dolor exercitationem porro. Modi non laudantium cum perferendis cupiditate deserunt autem mollitia error deleniti, doloremque molestiae totam reiciendis magnam libero natus labore eaque ipsa nesciunt fuga maxime. Nulla pariatur ipsam provident eum! Ipsum, sed similique?Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quos odio vero, nulla, nostrum sapiente accusamus magnam aliquam consequuntur, aut maiores quod nobis in deserunt dolor exercitationem porro. Modi non laudantium cum perferendis cupiditate deserunt autem mollitia error deleniti, doloremque molestiae totam reiciendis magnam libero natus labore eaque ipsa nesciunt fuga maxime. Nulla pariatur ipsam provident eum! Ipsum, sed similique?</p>
           </div>
        </div>
    );
};

export default SinglePost;