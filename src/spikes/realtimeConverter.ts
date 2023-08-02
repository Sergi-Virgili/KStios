export function textToJSON(texto: string) {
  let questions = texto
    .replaceAll(/\*/g, "")
    .replaceAll("[ ]", "")
    .split("Pregunta")
    .splice(1)
    .map((question) => {
      const pregunta = question
        .split("Explicación")[0]
        .split("•")[0]
        .trim()
        .slice(3)
        .replaceAll("Omitido", "")
        .trim();

      const respuestas = question
        .split("Explicación")[0]
        .split("•")
        .filter((_x: string, index: number) => index != 0)
        .map((answer: string) => {
          let isCorrect = answer.includes("(Correcto)");
          let texto = answer
            .replaceAll("\n", "")
            .trim()
            .replace("(Correcto)", "");
          return {
            answer: texto,
            correct: isCorrect,
          };
        });

      return {
<<<<<<< HEAD
        question: pregunta.replaceAll("\n", "<br/>").replaceAll('"', ""),
=======
        question: pregunta.replaceAll("\n", "<br />").replaceAll('"', ""),
>>>>>>> 378870e6817db7fe2579227c639ca094c6633939
        answers: respuestas,
        explanation: question
          .slice(
            question.indexOf("Explicación"),
            question.indexOf("Las otras opciones son incorrectas:")
          )
          .replace("Explicación", "")

          .replaceAll("\n", " <br/> ")
          .replaceAll('"', ""),
        incorrect: question
          .slice(
            question.indexOf("Las otras opciones son incorrectas:"),
            question.indexOf("Referencias:")
          )
          .replaceAll("Las otras opciones son incorrectas:", "")
          .trim()
<<<<<<< HEAD
          .replaceAll("\n", "<br/>")
=======
          .replaceAll("\n", "<br />")
>>>>>>> 378870e6817db7fe2579227c639ca094c6633939
          .replaceAll('"', ""),
        references: question
          .slice(question.indexOf("Referencias:"))
          .replaceAll("Referencias:", "")
          .trim()
<<<<<<< HEAD
          .replaceAll("\n", "<br/>")
=======
          .replaceAll("\n", "<br />")
>>>>>>> 378870e6817db7fe2579227c639ca094c6633939
          .replaceAll('"', ""),
      };
    });
  return questions;
}
