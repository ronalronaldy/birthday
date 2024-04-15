import { useEffect, useState } from "react";
import Card from "./Card";
import "./styles.css";
import Button from '@mui/joy/Button';
import { PlayerPlay } from "tabler-icons-react";
import IntroCard from "./FirstCard";
import Love from "./Love";
import Sound from "./song.mp3";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [cShow, setCshow] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (play === true) {
      new Audio(Sound).play()
    }
  }, [play]);

  const handleCardShow = () => {
    setLoading(true); // Set loading state to true
    setPlay(true); // Start playing audio
    setTimeout(() => {
      setLoading(false); // After 1 second, set loading state to false
      setCshow(true); // Show the IntroCard
    }, 1100);
  }

  const handleCardShow2 = () => {
    setCshow(false);
    setShowCard(true);
  }

  return (
    <div className="App">
      {loading ? (
        // Show loading indicator if loading is true
        <Button variant="soft" size="lg" color="warning" disabled loading >
          Custom
        </Button>
      ) : cShow ? (
        // Show IntroCard if loading is false and cShow is true
        <IntroCard handleClick={handleCardShow2} />
      ) : (
        // Show button if loading is false and cShow is false
        showCard === false &&
        <Button variant="soft" size="lg" color="warning" onClick={handleCardShow}>
          <PlayerPlay />
        </Button>
      )}
      {showCard &&
        <>
          <Card />
          <Love />
        </>
      }
    </div>
  );
}
