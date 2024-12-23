import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SongCard from "./components/SongCard";

function App() {
  const data = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1723809791931-ea96a277bebe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
      artist: "Atif Aslam",
      name: "Pagal",
      added: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1734466649856-6f7677852131?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      artist: "Ed shereen",
      name: "wonder",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1734312621516-3d258db95e76?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      artist: "Weekend",
      name: "Playboi",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1729109083465-66dfbffb1de8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      artist: "Travis Scott",
      name: "fein",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1730292422392-ebe05786caa7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      artist: "Rafeh Fateh",
      name: "Pria",
      added: false,
    },
  ];
  const [songData, setSongData] = useState(data);
  const handleAddFavourite = (index) => {
    setSongData((prev) => {
      return prev.map((item, itemindex) => {
        if (itemindex === index) {
          return { ...item, added: !item.added };
        }
        return item;
      });
    });
  };
  return (
    <div className="grid grid-cols-5">
      {songData.map((item, index) => (
        <SongCard
          song={item}
          index={index}
          handleAddFavourite={handleAddFavourite}
          key={index}
        />
      ))}
    </div>
  );
}

export default App;
