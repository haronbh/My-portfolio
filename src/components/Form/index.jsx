import { useRef, useState } from "react";
import { CiCircleCheck } from "react-icons/ci";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleReturn = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-fit w-full flex flex-col gap-4 p-4 bg-dark-200 rounded-3xl items-center">
      {!isSubmitted ? (
        <>
          <h1 className="font-bold text-gray-200 text-3xl">Ready for Work and Freelancing Tasks</h1>
          <p className="text-md lg:text-lg text-center text-gray-200">
            I am available for work and freelancing tasks. You can contact me via email at
            <a href="mailto:haroun19871987@gmail.com" className="text-blue-500"> haroun19871987@gmail.com</a>.
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:gap-2">
            <motion.a
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: [0, 0.8, 1], x: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: 0.4,
                type: "spring",
              }}
              href="mailto:haroun19871987@gmail.com"
              className="btn bg-green-700 text-white hover:bg-blue-600 hover:text-white rounded-2xl"
            >
              Send Email
            </motion.a>
            <motion.button
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: [0, 0.8, 1], x: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: 0.5,
                type: "spring",
              }}
              onClick={() => setIsSubmitted(true)}
              className="btn bg-green-700 text-white hover:bg-blue-600 hover:text-white rounded-2xl"
            >
              Mark as Submitted
            </motion.button>
          </div>
        </>
      ) : (
        <div className="w-full min-h-fit flex flex-col gap-4 p-4 bg-dark-200 rounded-3xl items-center">
          <CiCircleCheck className="text-6xl" />
          <h1 className="font-bold text-gray-200 text-3xl">Thank You</h1>
          <p className="text-md lg:text-lg text-center text-gray-200">
            Your message was noted successfully.
          </p>
          <button
            onClick={handleReturn}
            className="btn bg-green-600 text-gray-300 hover:bg-blue-500 hover:text-gray-300 rounded-2xl"
          >
            Return to Message
          </button>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
