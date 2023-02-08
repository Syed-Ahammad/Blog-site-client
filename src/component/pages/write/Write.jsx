import './write.css';

const Write = () => {
  return (
    <div className="write">
        <img src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__340.jpg" alt="" className="writeImg" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            autoFocus={true}
            className="writeInput"
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            name=""
            type="text"
            className="writeInput writeText"
            placeholder='Tell your story...'
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
};

export default Write;
