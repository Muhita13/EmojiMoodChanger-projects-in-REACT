function MoodDisplay({ value }) {
  const moods = {
    happy: "Keep Smiling! 😁",
    sad: "It's okay to be sad sometimes 😒",
    excited: "Let's Celebrate! 🤩",
    angry: "Take a deep breath 😊"
  };

  return ( 
    <div className="box">
      {value ? <p>{moods[value]}</p> : <p>"Pick a mood and get inspired!"</p>}
    </div>
  );
}

export default MoodDisplay;
