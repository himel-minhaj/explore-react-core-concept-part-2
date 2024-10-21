import { useState } from "react";

export default function Team() {
  const [team, setTeam] = useState(11);
  const handleAdd = () => {
    const newTeam = team + 1;
    setTeam(newTeam);
  };
  const handleRemove = () => {
    const newTeam = team - 1;
    setTeam(newTeam);
    //setTeam(team-1)
  };
  const teamStyle = {
    border: "2px solid yellow",
    margin: "15px",
    padding: "20px",
    borderRadius: "15px",
  };
  return (
    <div style={teamStyle}>
      <h3>players:{team}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}
