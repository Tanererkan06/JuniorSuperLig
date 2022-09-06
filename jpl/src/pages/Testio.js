//import "./App.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import AntrenorHocaServis from "../services/AntrenorHocaService";
import AntrenorHocaServis2 from "../services/AntrenorHocaService";

const socket = io.connect("http://localhost:3001");
const AntrenorHoca = io.connect("http://localhost:3001/AntrenorHoca");
var maxStack = 10000; 
const num = 0; 
const _antrenorHocaServis=new AntrenorHocaServis2();

function App() {
  //Room State
 
  const [room, setRoom] = useState("");

  // Messages States
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const [adi, setAdi] = useState("");
  const [soyadi, setSoyadi] = useState("");
  const [telefon, setTelefon] = useState("");
  const [eposta, setEposta] = useState("");

  function gelenveri() {
    
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
      console.log(data.message)
    });
  }
 
   
  
  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };
  const sendMessage = () => {
   _antrenorHocaServis.sendMessage(room,message);
  };
  socket.on("receive_message", (data) => {
    setMessageReceived(data.message);
  });

  /* const Listele = () => {

     AntrenorHocaServis.getAll();
  };

  const Kaydet = (adi,soyadi,telefon,eposta,message) => {
   console.log(message)
   // AntrenorHocaServis.create(message)
 }; */


//create


useEffect(() => {
  

  gelenveri();

}, [socket]);
  return (
    <div className="App">
      <input
        placeholder="Room Number..."
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      />
      <button onClick={joinRoom}> Join Room</button>
      <input
        placeholder="Message..."
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />
      <button onClick={sendMessage}> Send Message</button>
      <h1> Message:</h1>
      
      {messageReceived}  

      {/* <div>
        <label htmlFor='Adi'>Adı: </label>
        <input type="text" placeholder='Adı' name="adi"    onChange={(event) => {
          setAdi(event.target.value);
        }}  />
        <label htmlFor='Soyadi'>Soyadı: </label>
        <input type="text" placeholder='Soyadı' name="soyadi"    onChange={(event) => {
          setSoyadi(event.target.value);
        }}  />
        <label htmlFor='Telefon'>Telefon: </label>
        <input type="text" placeholder='Telefon' name="telefon"    onChange={(event) => {
          setTelefon(event.target.value);
        }}   />
        <label htmlFor='Eposta'>E-posta: </label>
        <input type="email" placeholder='E-posta' name="eposta"    onChange={(event) => {
          setEposta(event.target.value);
        }}  />

         <button onClick={Kaydet}> Kaydet</button>

        <button onClick={Listele}> Listele</button>
       
        <button onClick={Listele}> Ara</button>
        <button onClick={Listele}> Guncelle</button>
        <button onClick={Listele}> Sil</button>



      </div> */}
    </div>
  );
}

export default App;