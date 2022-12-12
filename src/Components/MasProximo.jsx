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

export default function MasProximo(){
  const game = [
    new Question("¿CUÁNTOS SCHTROUMPFS SE PUEDEN COMER AL DÍA?","252"),
    new Question("¿Cuál es el tamaño de la Torre Eiffel ?","5cm"),
    new Question("¿Con cuántos Pokémon Markiplier querría tener sexo?", "72"),
    new Question("¿Cuántos días podemos estar despiertos?","11"),
    new Question("¿Cuántas horas estuvo atrapado el personaje de las 127h?","127h"),
    new Question("¿Cuántos espejos hay que romper para estar maldito?","42"),
    new Question("¿Cuántos metros se necesitan para detenerse cuando se conduce a 50 km/h?","12"),
    new Question("¿A cuántos kilómetros por hora hay que conducir para matar a alguien?","70Km/h"),

  ]


  function handleChange(index){
    document.getElementById(index).style.filter = "blur(0)"
  }

  return (
    <div className="Panel">
      <h1>Mas Proximo</h1>
        {game.map((question,index) => {
            return (
              <div className="question">
                <h2>{question.getQuestions()}</h2>
                <p id={index.toString()} className="MasProximo" onClick={() => handleChange(index)}>{question.getAnswers()}</p>
              </div>
            )
          })}
    </div>
  );
}