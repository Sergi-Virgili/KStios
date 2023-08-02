import parse from "html-react-parser";

interface Props {
  explanation: string;
  incorrect: string;
  references: string;
}

export default function Explanation({
  explanation,
  incorrect,
  references,
}: Props) {
  return (
    <section className="text-gray-500 ">
      <div>
        <h3 className="my-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Explicación
        </h3>
        <p>{parse(explanation)}</p>
      </div>
      <div className="py-5 ">
        <h3 className="my-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Las otras opciones son incorrectas
        </h3>
        <p>{parse(incorrect)}</p>
      </div>
      <div className="py-5 ">
        <h3 className="my-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Referencias
        </h3>
        <p>{parse(references)}</p>
      </div>
    </section>
  );
}
