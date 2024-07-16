import StackCard from "@/components/Cards/StackCard";
import { motion } from "framer-motion";

function StackPage() {
  return (
    <motion.div className="min-h-screen w-full">
      {/* Tech Skills Header */}
      <motion.div
        className="h-80 bg-dark-200 rounded-3xl p-6 flex flex-col justify-end"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: [0, 0.8, 1], x: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 0.22,
          type: "spring",
        }}
      >
        <h1 className="md:text-3xl text-2xl uppercase text-white font-bold">
          Tech Skills
        </h1>
        <p className="text-md text-gray-200">
          My top tools, languages, and resources
        </p>
      </motion.div>
      
      {/* Programming Languages */}
      <motion.div className="w-full min-h-fit grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-6">
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
            title={"HTML"}
            description={"Markup language for web documents."}
            imageUrl={"/images/html.png"}
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
            title={"CSS"}
            description={"Styling language for web design."}
            imageUrl={"/images/css.png"}
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
            title={"JavaScript"}
            description={"Dynamic scripting for web interactivity."}
            imageUrl={"/images/javascript.png"}
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
            title={"Python"}
            description={"General-purpose programming language."}
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
            title={"Java"}
            description={"Object-oriented programming language."}
            imageUrl={"/images/java.png"}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: [0, 0.8, 1], x: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
            delay: 0.9,
            type: "spring",
          }}
        >
          <StackCard
            title={"C++"}
            description={"General-purpose programming language."}
            imageUrl={"/images/cpp.png"}
          />
        </motion.div>
      </motion.div>
      
      {/* Frameworks */}
      <motion.div className="w-full min-h-fit grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-6">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: [0, 0.8, 1], x: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
            delay: 1,
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
            delay: 1.1,
            type: "spring",
          }}
        >
          <StackCard
            title={"Tailwind CSS"}
            description={"Utility-first CSS framework for flexibility."}
            imageUrl={"/images/tailwind.png"}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: [0, 0.8, 1], x: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
            delay: 1.2,
            type: "spring",
          }}
        >
          <StackCard
            title={"Material UI"}
            description={"React UI framework with components."}
            imageUrl={"/images/mui.png"}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: [0, 0.8, 1], x: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
            delay: 1.3,
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
            delay: 1.4,
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
            delay: 1.5,
            type: "spring",
          }}
        >
          <StackCard
            title={"Angular"}
            description={"Platform for building mobile and desktop web applications."}
            imageUrl={"/images/angular.png"}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default StackPage;
