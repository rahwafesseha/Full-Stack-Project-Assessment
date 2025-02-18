import React, { useState } from "react";
import thumbsUp from "../src/images/thumbsUp.png";
import thumbsDown from "../src/images/thumbsDown.png";


const RenderVideos = ({ video, deleteVideos }) => {
  const [count, setCount] = useState(video.rating);
  //create count function to  increase the votes

  const numberLVotes = () => {
    setCount(count + 1);
  };
  //create count function to decrease the votes
  const numberDVotes = () => {
    setCount(count - 1);
  };
  return (
    <section>
      {video.title}
      <div className="video">
        <iframe
         
          src={`https://www.youtube.com/embed/${video.url.split("v=")[1]}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <button onClick={() => deleteVideos(video)}> Delete </button>

      <img src={thumbsUp} onClick={numberLVotes} alt="" width="100px" />
      {count}

      <img src={thumbsDown} onClick={numberDVotes} alt="" width="100px" />
    </section>
  );
};
export default RenderVideos;
