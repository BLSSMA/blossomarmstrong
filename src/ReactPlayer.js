import ReactPlayer from 'react-player';
import React, { useRef } from 'react';

function PlayerComponent() {
   const playerRef = useRef(null);
   return (
      <div>
         <ReactPlayer ref={playerRef} url="https://drive.google.com/file/d/1UFP61R02J388DeXDsI_h-10iqOVwsA0X/view?usp=sharing" controls={true} />
      </div>
   )
};
export default PlayerComponent;