import React, { useState } from 'react';
import './form.css';

const Form = () => {
  const [meme, getMeme] = useState({
    topText: '',
    bottomText: '',
    imgUrl: 'https://i.imgflip.com/1ur9b0.jpg',
  });

  const [memesList, setMemesList] = useState('');
  const handleSubmit = (event) => {
    let temp = Math.floor(Math.random() * 100);
    console.log(temp);
    getMeme((prev) => {
      return {
        ...prev,
        imgUrl: memesList.data.memes[temp].url,
      };
    });
  };

  const handleChange = (event) => {
    getMeme((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  React.useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((data) => {
        setMemesList(data);
      }, []);
  });

  return (
    <div className="form-wrapper">
      <div className="form-input-wrapper">
        <input
          name="topText"
          type="text"
          placeholder="Top Text"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          name="bottomText"
          type="text"
          placeholder="Bottom Text"
          value={meme.bottomText}
          onChange={handleChange}
        />
      </div>
      <button className="form-btn" onClick={handleSubmit}>
        Get a new meme
      </button>
      <div className="body-meme">
        <img className="memeImage" src={meme.imgUrl} alt="meme" />
        <h2 className="body-meme-top">{meme.topText}</h2>
        <h2 className="body-meme-bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
};

export default Form;
