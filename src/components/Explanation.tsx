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
    <>
      <p className="py-5 ">
        <h3 className="my-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Explicación
        </h3>
        {explanation}
      </p>
      <p className="py-5 ">
        <h3 className="my-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Las otras opciones son incorrectas
        </h3>
        {incorrect}
      </p>
      <p className="py-5 ">
        <h3 className="my-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Referencias
        </h3>
        {parse(references)}
      </p>
    </>
  );
}
