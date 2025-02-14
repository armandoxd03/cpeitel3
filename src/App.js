import './App.css';
import { useState } from "react";

function Display({ display }) {
  return <>{display}</>;
}

function Key({ label, onClick, className }) {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}

function App() {
  const values = [
    "Having A Strong Work Ethic",
    "Being On Time",
    "Making An Effort",
    "Being High Energy",
    "Having A Positive Attitude",
    "Being Passionate",
    "Using Good Body Language",
    "Being Coachable",
    "Doing A Little Extra",
    "Being Prepared"
  ];

  const [disp, setDisp] = useState("C-PEITEL3 EXPECTATIONS");
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [op, setOp] = useState(null);

  const numClickHandler = (e) => {
    e.preventDefault();
    const index = parseInt(e.target.innerHTML);
    if (op === null) {
      setNum1(index);
      setDisp(values[index]);
    } else {
      setNum2(index);
      setDisp(values[index]);
    }
  };

  const opClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setOp(value);
    setDisp(value);
  };

  const eqClickHandler = (e) => {
    e.preventDefault();
    if (op === "+") {
      setDisp(values[num1] + " + " + values[num2]);
    } else if (op === "-") {
      setDisp(values[num1] + " - " + values[num2]);
    } else {
      setDisp("ERROR");
    }
  };

  const clrClickHandler = (e) => {
    setNum1(null);
    setNum2(null);
    setOp(null);
    setDisp("10 Things That Require Zero Talent");
  };

  return (
    <div className="App">
      <h1>JOHN ROY DUCUT - IT3A</h1>
      <div className="Calc">
        <div className="Disp">
          <Display display={disp} />
        </div>  
        <div className="Border">
          <div className="Buttons">
            <Key label={"What I learned?"} onClick={() => setDisp("The course taught me valuable IT and software development skills, including frontend and API development, CRUD operations, and testing. It provided hands-on experience with technologies like React, Next.js, Java Spring Boot, and JMeter. Lastly, which I believe is the most important thing I learned, are the 10 Things That Require Zero Talent, which will be crucial when I join the industries. ")} className="full-width gray-button" />
            <Key label={"What I want to learn?"} onClick={() => setDisp("I want to continue learning moI want to learn more ways to efficiently create and design a website. And if it is a part of it again in our course, I want to learn more ways to secure the website. I would like to learn more techniques and ethics that I will need when I join the workforce in the future.")} className="full-width gray-button" />
            <Key label={"How will I learn"} onClick={() => setDisp("I will learn by diligently listening to the class, participating in every lesson, and accomplishing all the activities that I will be tasked with. I strive to do better and research the things I have yet to understand, especially those that I believe will be crucial. I will continue to make an effort to be on time in passing and accomplishing my task, and I will put energy into learning and opening myself to accept the teaching, advice, and guidance of other people.")} className="full-width gray-button" />
            <Key label={1} onClick={numClickHandler} />
            <Key label={2} onClick={numClickHandler} />
            <Key label={3} onClick={numClickHandler} />
            <Key label={4} onClick={numClickHandler} />
            <Key label={5} onClick={numClickHandler} />
            <Key label={6} onClick={numClickHandler} />
            <Key label={7} onClick={numClickHandler} />
            <Key label={8} onClick={numClickHandler} />
            <Key label={9} onClick={numClickHandler} />
            <Key label={"Reset"} onClick={clrClickHandler} className="blue-button" />
            <Key label={0} onClick={numClickHandler} />
            <Key label={"Name"} onClick={() => setDisp("JOHN ROY DUCUT")} className="red-button" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;