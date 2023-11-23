import {useEffect, useRef, useState} from 'react'
import './App.css'
import {StudentsClient} from "./main.jsx";

function App({socket}) {
  const [time, setTime] = useState("");
  const p2 = useRef(null);
  const [student, setStudent] = useState(null);

  useEffect(() => {
      socket.on('connect', () => {
      });

      socket.on('time', (timeFromSrv)=>{
          setTime(new Date(timeFromSrv).toLocaleTimeString('PL-pl'));
      });

      socket.on('position', (pos)=>{
          if(pos.id === socket.id) return;
          p2.current.style.transform = `translate( ${pos.x}px , ${pos.y}px)`;
      });
    }, [])

  const handleMouseMove = (e) => {
    socket.emit('position', {x: e.pageX, y: e.pageY});
  }

  const clickHandler = () => {
      StudentsClient.studentsIdGet("1", (error, data, response)=>{
          console.log(response)
          setStudent(data);
      });
  }

  return (
    <div style={{width: '100vw', height: '100vh'}} onMouseMove={handleMouseMove}>
      <div style={{width: 50, height:50, transition: '10ms', background: 'red', position: 'fixed'}} ref={p2}>

      </div>
      <h1>{time}</h1>
        <button onClick={clickHandler}>Click me!</button>
        <pre style={{textAlign: "left"}}>
            {JSON.stringify(student, null, 2)}
        </pre>
    </div>
  )
}

export default App
