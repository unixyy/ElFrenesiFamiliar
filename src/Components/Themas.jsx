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

export default function Themas(){
  const game = [
    new Question("¿Quiénes construyeron las pirámides?",
    [
      "Los Egipcios",
      "Los extraterrestres",
      "Los reptilianos",
      "Elon Musk"
      ]
    ),
    new Question(
      "¿Por qué está inclinada la torre de Pisa?",
      [
        "Mala construccion",
        "El arquitecto era ciego",
        "Elon Musk la ha “mejorado”",
        "Para que los turistas la fotografíen"
      ]
    ),
    new Question(
      "¿En qué año fuimos a la luna?",
      [
        "420",
        "1961",
        "1969",
        "Nunca"
      ]
    ),
    new Question(
      "¿ La Tierra es ? ",
      [
        "Plana",
        "Esferica",
        "En forme de Bagel",
        "En forma de Pringles"
      ]
    ),
    new Question(
      "¿Cuántos proyectos puede tener un alumno al mismo tiempo en Polytech Montpellier?",
      [
        "3",
        "5",
        "7",
        "Sin límite"
      ]
    ),
    new Question(
      "¿Cuál es el coche de vuestro presentador?",
      [
        "Lamborghini",
        "Jaguar",
        "Bugatti",
        "Bicicleta"
      ]
    ),
    new Question(
      "¿ Quién es el actor más grande del mundo ?",
      [
        "Leonardo DiCaprio",
        "Robert Downey Jr",
        "Tom Cruise",
        "Troy McClure"
      ]
    ),
    new Question(
      "¿Qué es lo que el presentador quiere hacer ahora?",
      [
        "Ir a la playa",
        "comprar pistolas de dardos",
        "dormir",
        "salir de aquí"
      ]
    )
  ]
    return(
      <div className="Panel">
        <h1>Panel</h1>
        {game.map((question) => {
          return (
            <div className="question">
              <h2>{question.getQuestions()}</h2>
              <ul>
                {question.getAnswers().map((answer) => {
                  return (
                    <li className="ThemasLi">{answer}</li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    );
}