import { useEffect, useState } from "react";
import background1 from "/public/images/background1.jpg";
import background2 from "/public/images/background2.jpg";
import background3 from "/public/images/background3.jpg";
import background4 from "/public/images/background4.jpg";
import background5 from "/public/images/background5.jpg";
import background6 from "/public/images/background6.jpg";
import background7 from "/public/images/background7.jpg";
import background8 from "/public/images/background8.jpg";
import background9 from "/public/images/background9.jpg";
import { useTheme } from "next-themes";

const Home = () => {
  const { theme } = useTheme();
  const [selectedPicture, setSelectedPicture] = useState(background1);

  const imagesBackDark = [
    background1,
    background2,
    background3,
    background4,
    background5,
    background6,
  ];

  const imagesBackWhite = [background7, background8, background9];

  const getPicture = (backgroundByTheme) => {
    const randomIndex = Math.floor(Math.random() * backgroundByTheme.length);
    const picture = backgroundByTheme[randomIndex];
    setSelectedPicture(picture);
  };

  useEffect(() => {
    if (theme === "dark") {
      getPicture(imagesBackDark);
    }
    if (theme === "light") {
      getPicture(imagesBackWhite);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  return (
    <div
      className="homeContainer"
      style={{
        backgroundImage: `url(${selectedPicture?.src})`,
      }}
    >
      <div className="filterHome">
        <h1>
          ¡Hola!
          <br />
          Mi nombre es Kevin,
          <br />
          Soy Desarrollador FullStack.
        </h1>
      </div>
      <div className="arrow">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};  

export default Home;
