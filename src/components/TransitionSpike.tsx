import { Button } from "flowbite-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function TransitionSpike() {
  const [showBox, setShowBox] = useState(false);

  return (
    <>
      <AnimatePresence>
        {showBox ? (
          <motion.div
            className="w-40 h-40 bg-red-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 5,
            }}
          ></motion.div>
        ) : (
          <div className="w-40 h-40"></div>
        )}
      </AnimatePresence>
      <Button onClick={() => setShowBox(!showBox)}>visibidad</Button>
    </>
  );
  // return <h1>hola</h1>;
}

//
///// ////////////////////// - Vanilla Spike - ///////////////////////////////////

// import { Button } from "flowbite-react";
// import { useState } from "react";

// export default function TransitionSpike() {
//   const [isVisible, setIsVisible] = useState(true);

//   return (
//     <div className="p-10">
//       <Button onClick={() => setIsVisible(!isVisible)}>visibidad</Button>
//       <div
//         className={`w-40 h-40 bg-red-600  ${
//           isVisible ? "opacity-100" : "opacity-0"
//         } transition-opacity duration-1000`}
//       ></div>
//     </div>
//   );
// }
