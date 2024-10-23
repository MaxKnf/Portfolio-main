import React, { useState, useEffect, useRef } from "react";
import Avatar from "@mui/material/Avatar";

function MyAvatar() {
  // const [isVisible, setIsVisible] = useState(false);
  //   const ref = useRef(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setIsVisible(entry.isIntersecting);
  //     },
  //     {
  //       threshold: 0
  //     }
  //   );
  //   if (ref.current) {
  //     observer.observe(ref.current);
  //   }
  //   return () => {
  //     if (ref.current) {
  //       observer.unobserve(ref.current);
  //     }
  //   };
  // }, []);

  return (
    <div>
      <a href="#about-me" aria-hidden="true" id="about-me"></a>
      <Avatar
        alt="Maxime Kiniffo"
        src="https://i.ibb.co/Wx73r1h/moi-cv2.jpg"
        sx={{ marginTop: "100px", width: 250, height: 250 }}
      />
    </div>
  );
}

export default MyAvatar;
