export function textToJSON(texto) {
  let questions = texto
    .replace(/\*/g, "")
    .replaceAll("[ ]", "")
    .split("Pregunta")
    .splice(1)
    .map((question) => {
      const pregunta = question
        .split("Explicación")[0]
        .split("•")[0]
        .trim()
        .slice(3)
        .replace("Omitido", "")
        .trim();

      const respuestas = question
        .split("Explicación")[0]
        .split("•")
        .filter((x, index) => index != 0)
        .map((answer) => {
          let isCorrect = answer.includes("(Correcto)");
          let texto = answer.replace("\n", "").trim().replace("(Correcto)", "");
          return {
            answer: texto,
            correct: isCorrect,
          };
        });

      return {
        question: pregunta.replaceAll("\n", "<br />").replaceAll('"', ""),
        answers: respuestas,
        explanation: question
          .slice(
            question.indexOf("Explicación"),
            question.indexOf("Las otras opciones son incorrectas:")
          )
          .replace("Explicación", "")
          .trim()
          .replaceAll("\n", "<br />")
          .replace('"', ""),
        incorrect: question
          .slice(
            question.indexOf("Las otras opciones son incorrectas:"),
            question.indexOf("Referencias:")
          )
          .replace("Las otras opciones son incorrectas:", "")
          .trim()
          .replaceAll("\n", "<br />")
          .replaceAll('"', ""),
        references: question
          .slice(question.indexOf("Referencias:"))
          .replace("Referencias:", "")
          .trim()
          .replaceAll("\n", "<br />")
          .replaceAll('"', ""),
      };
    });
  return questions;
}
