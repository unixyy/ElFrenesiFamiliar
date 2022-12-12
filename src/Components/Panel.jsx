import {useState} from "react";
import {Button, TextField} from "@mui/material";

class Question {
  constructor(question,answers) {
    this.questions = question;
    this.answers = answers;
  }

  getQuestions() {
    return this.questions;
  }

  getAnswers() {
    return this.answers;
  }

  getAnswer(index) {
    return this.answers[index];
  }
}

export default function Panel(){
  const [input, UpdateInput] = useState("");

  const game = [
    new Question("¿Cuál es la tarea que siempre se deja para mañana/ más tarde ?",
      [
        "orinar 15%",
        "Sacar al bebé del refrigerador 50%",
        "Lavarse 5%",
        "Suicidarse 9%",
        "Dejar la casa de sus padres y ser independiente 6%",
        "Aprender su texto para la presentación en español  4%"
        ]
    ),
    new Question("¿Quién crees que es el mejor rockstar ?"
      ,[
        "JUL 100% porque es el sangre ",
        "Mariah Carrey 25,12%",
        "Snoop Doggy Dog 420,69%",
        "Reina Elizabeth II -6% (seis pies bajo tierra has visto)"
        ]
    ),
    new Question(
      "¿Cuál es la mejor hamburguesa?",
      [
        "El cheese 0%",
      "El double-cheese 85%",
      "El triple-cheese 27%",
      "El cuadruplicar-cheese 1% + 2%"
      ]
    ),
    new Question(
      "¿Qual es la mejor Escuela/Universidad del mundo ?",
      [
        "Harvard 69 %",
        "Stanford 30 %",
        "Sorbonne 20 %",
        "Polytech 0,00000001%",
        "Polytech Sorbonne -2%",
        "Polytech Harvard ?%",
      ]
    ),
    new Question(
      "¿Como protejarse de un hacker ruso ? ",
      [
        "No le des su correo 100%",
        "No le des su correo 100%",
        "No le des su correo 100%",
        "No le des su correo 100%",
        "No le des su correo 100%",
        "No le des su correo 100%",
      ]
    ),
    new Question(
      "¿Cuál es el cemantix del día (en francés)?",
      [
        "énergétique",
        "environnemental",
        "nucléaire",
        "vital",
        "développement",
        "automassage",
      ]
    ),
  ]

  const handleCheck = () => {
    const allLi = document.querySelectorAll("li");
    allLi.forEach((li) => {
      if (li.innerText.toLowerCase().includes(input.toLowerCase()) && !input.includes(li.innerText)) {
        li.style.filter = "blur(0)";
      }
    });
  }

  const handleInputChange = (event) => {
    UpdateInput(event.target.value);
  }

  return (
    <div className="Panel">
      <h1>Panel</h1>
      {game.map((question) => {
        return (
          <div className="question">
      <div className="container">
      <TextField id="search" label="escribe" variant="filled" onChange={handleInputChange}></TextField>
      <Button id="verify" variant="contained" onClick={handleCheck}>Verificar</Button>
      </div>
            <h2>{question.getQuestions()}</h2>
            <ul>
            {question.getAnswers().map((answer) => {
              return (
                <li>{answer}</li>
              )
            })}
            </ul>
          </div>
        )
      })}
    </div>
  );
}
