import StackCard from "@/components/Cards/StackCard";
import { motion } from "framer-motion";

function StackPage() {
  return (
    <motion.div className="min-h-screen w-full">
      {/* Programming Languages Section */}
      <motion.div className="flex flex-col gap-6 min-h-fit mb-6">
        {/* Programming Languages Header */}
<motion.div
  className="h-80 bg-dark-200 rounded-3xl p-6 border-2 border-gray-800 w-3/5"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: [0, 0.8, 1], x: 0 }}
  transition={{
    duration: 0.5,
    ease: "easeInOut",
    delay: 0.22,
    type: "spring",
  }}
>
  <div className="h-full flex flex-col gap-3 w-full justify-end p-4">
    <h1 className="md:text-3xl text-2xl uppercase text-white font-bold">
      Programming Languages
    </h1>
    <p className="text-md text-gray-200">
      My top programming languages
    </p>
  </div>
</motion.div>

        {/* Programming Languages Cards */}
        <motion.div className="w-full min-h-fit grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
              delay: 0.4,
              type: "spring",
            }}
          >
            <StackCard
              title={"HTML,CSS,JS"}
              description={"Essential web technologies: HTML, CSS, and JavaScript."}
              imageUrl={"/images/htmlcssjs.PNG"}
            />
          </motion.div>
                    <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
              delay: 0.7,
              type: "spring",
            }}
          >
            <StackCard
              title={"XML,DTD,XSD,XPATH"}
              description={"Essential for defining, validating, and querying structured data in XML files."}
              imageUrl={"/images/xml.png"}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
              delay: 0.5,
              type: "spring",
            }}
          >
            <StackCard
              title={"JAVA"}
              description={"Java GUI development with OOP principles."}
              imageUrl={"/images/java.png"}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
              delay: 0.6,
              type: "spring",
            }}
          >
            <StackCard
              title={"Python"}
              description={"Python scripting for versatile applications."}
              imageUrl={"/images/python.png"}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
              delay: 0.8,
              type: "spring",
            }}
          >
            <StackCard
              title={"SQL,SQLite"}
              description={"Language for managing and querying relational databases."}
              imageUrl={"/images/sql.png"}
            />
          </motion.div>
            <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
              delay: 0.6,
              type: "spring",
            }}
          >
            <StackCard
              title={"C,C++"}
              description={"Mastered for high-performance and system-level programming."}
              imageUrl={"/images/cc.png"}
            />
          </motion.div>
                  <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
              delay: 0.6,
              type: "spring",
            }}
          >
            <StackCard
              title={"Flutter"}
              description={"Developing cross-platform mobile applications with a focus on elegant UI/UX and robust functionality."}
              imageUrl={"/images/flutter.png"}
            />
          </motion.div>

                    </motion.div>
                  <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
              delay: 0.6,
              type: "spring",
            }}
          >
            <StackCard
              title={"PHP"}
              description={"Skilled in PHP for creating dynamic and interactive web applications."}
              imageUrl={"/images/php.png"}
            />
          </motion.div>

        
                  <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
              delay: 0.6,
              type: "spring",
            }}
          >
            <StackCard
              title={"Matlab"}
              description={"Proficient in MATLAB for mathematical computation and algorithm development."}
              imageUrl={"/images/matlab.png"}
            />
          </motion.div>    
        </motion.div>
      </motion.div>

      {/* Frameworks Section */}
      <motion.div className="flex flex-col gap-6 min-h-fit mb-6">
        {/* Frameworks Header */}
        <motion.div
          className="h-80 bg-dark-200 rounded-3xl p-6 border-2 border-gray-800"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: [0, 0.8, 1], x: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: 0.22,
            type: "spring",
          }}
        >
          <div className="h-full flex flex-col gap-3 w-full justify-end p-4">
            <h1 className="md:text-3xl text-2xl uppercase text-white font-bold">
              Frameworks
            </h1>
            <p className="text-md text-gray-200">
              My top frameworks
            </p>
          </div>
        </motion.div>
        {/* Frameworks Cards */}
        <motion.div className="w-full min-h-fit grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
              delay: 0.4,
              type: "spring",
            }}
          >
            <StackCard
              title={"React.js"}
              description={"JavaScript library for building interfaces."}
              imageUrl={"/images/react.png"}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
              delay: 0.5,
              type: "spring",
            }}
          >
            <StackCard
              title={"Vue.js"}
              description={"Progressive JavaScript framework."}
              imageUrl={"/images/vue.png"}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
              delay: 0.6,
              type: "spring",
            }}
          >
            <StackCard
              title={"Angular"}
              description={"Platform for building mobile and desktop web applications."}
              imageUrl={"/images/angular.png"}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
              delay: 0.7,
              type: "spring",
            }}
          >
            <StackCard
              title={"Bootstrap"}
              description={"Responsive framework for web development."}
              imageUrl={"/images/bootstrap.png"}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
              delay: 0.8,
              type: "spring",
            }}
          >
            <StackCard
              title={"TailwindCSS"}
              description={"Utility-first CSS framework for flexibility."}
              imageUrl={"/images/tailwind.png"}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default StackPage;
