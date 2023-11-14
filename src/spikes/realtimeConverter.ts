export function textToJSON(texto: string) {
  const questions = texto
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
          const isCorrect = answer.includes("(Correcto)");
          const texto = answer
            .replaceAll("\n", "")
            .trim()
            .replace("(Correcto)", "");
          return {
            answer: texto,
            correct: isCorrect,
          };
        });

      return {
        question: pregunta.replaceAll("\n", "<br/>").replaceAll('"', ""),

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

          .replaceAll("\n", "<br/>")

          .replaceAll('"', ""),
        references: question
          .slice(question.indexOf("Referencias:"))
          .replaceAll("Referencias:", "")
          .trim()

          .replaceAll("\n", "<br/>")

          .replaceAll('"', ""),
      };
    });
  return questions;
}
