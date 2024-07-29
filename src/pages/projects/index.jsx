import ProjectCard from "@/components/Cards/ProjectCard"
import Link from "next/link"
import { motion } from "framer-motion"

function ProjectsPage() {
  return (
    <section className="min-h-screen w-full">
      <div className="flex flex-col w-full min-h-fit gap-2">
        {/* Header */}
        <motion.div
          className="bg-dark-200 h-80 w-full rounded-3xl p-8 shadow-sm"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: [0, 0.8, 1], x: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: 0.22,
            type: "spring",
          }}
        >
          <div className="flex flex-col h-full gap-3 lg:w-1/2 w-full justify-end">
            <h1 className="text-4xl uppercase font-bold text-white">
              Projects
            </h1>
            <p className="text-md text-gray-200 font-light">
              This section serves as a portfolio showcase, featuring a
              compilation of my latest work.
            </p>
          </div>
        </motion.div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 h-full w-full mb-8 mt-6">
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 0.3,
              type: "spring",
            }}
          >
            <Link
              href={"/projects/gym-management"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ProjectCard
                title={"Mobile Gym Management App"}
                imageUrl={"/images/gym.png"}
                  websiteType={"Mobile App"}
                tech_1={"Flutter"}
                tech_2={"SqFLite"}
              />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 0.3,
              type: "spring",
            }}
          >
            <Link
              href={"/projects/APKStoreProject"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ProjectCard
                title={"Download Monbile Apps"}
                imageUrl={"/images/s1.PNG"}
                  websiteType={"Website"}
                tech_1={"SMMpanel"}
              />
            </Link>
          </motion.div>    
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 0.3,
              type: "spring",
            }}
          >
            <Link
              href={"/projects/Cinema-Management-System-with-java"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ProjectCard
                title={"Manage Cinema Software"}
                imageUrl={"/images/c8.PNG"}
                  websiteType={"Windows Software"}
                tech_1={"JAVA"}
                tech_2={"GUI"}
                tech_3={"SQL"}
              />
            </Link>
          </motion.div>   
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 0.3,
              type: "spring",
            }}
          >
            <Link
              href={"/projects/SMMTargetProject"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ProjectCard
                title={"Sell Social Media Followers"}
                imageUrl={"/images/smm4.PNG"}
                  websiteType={"Website"}
                tech_1={"Wordpress"}
              />
            </Link>
          </motion.div>   
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 0.3,
              type: "spring",
            }}
          >
            <Link
              href={"/projects/ElectricksOnlineShopSystemProject"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ProjectCard
                title={"Online Shop System"}
                imageUrl={"/images/k1.PNG"}
                  websiteType={"Website"}
                tech_1={"PHP"}
                tech_2={"SQL"}
                tech_3={"BOOTSTRAP"}
              />
            </Link>
          </motion.div>   

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 0.3,
              type: "spring",
            }}
          >
            <Link
              href={"/projects/RasdPresseProject"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ProjectCard
                title={"Online News Site"}
                imageUrl={"/images/rasd1.PNG"}
                  websiteType={"Website"}
                tech_1={"Wordpress"}
              />
            </Link>
          </motion.div>  

           <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 0.3,
              type: "spring",
            }}
          >
            <Link
              href={"/projects/BMI-and-calorie-and-protein-Calculator"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ProjectCard
                title={"Online News Site"}
                imageUrl={"/images/snip3.PNG"}
                  websiteType={"Mobile App"}
                tech_1={"Flutter"}
              />
            </Link>
          </motion.div> 

          
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 0.3,
              type: "spring",
            }}
          >
            <Link
              href={"/projects/Book-Exchange-Web-Application-UI"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ProjectCard
                title={"Responsive Design for Book Exchange"}
                imageUrl={"/images/b2.PNG"}
                websiteType={"Website"}
                tech_1={"Cordova"}
                tech_2={"Bootstrap"}
                tech_3={"LocalStorage"}
              />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 0.3,
              type: "spring",
            }}
          >
            <Link
              href={"/projects/Device-Information-App-With-Cordova"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ProjectCard
                title={"Device Information with Cordova"}
                imageUrl={"/images/device-info.png"}
                websiteType={"Website"}
                tech_1={"Cordova"}
                tech_2={"JS"}
              />
            </Link>
          </motion.div>

             <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 0.3,
              type: "spring",
            }}
          >
            <Link
              href={"/projects/Lexical-analyzer-with-java"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ProjectCard
                title={"Lexical Analyzer in Java"}
                imageUrl={"/images/analyser.png"}
                websiteType={"Script"}
                tech_1={"JAVA"}
              />
            </Link>
          </motion.div>

              <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 0.3,
              type: "spring",
            }}
          >
            <Link
              href={"/projects/SyntaxAnalyzerPage"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ProjectCard
                title={"Syntax Analyzer using Recursive Descent"}
                imageUrl={"/images/recursive-descent.png"}
                websiteType={"Script"}
                tech_1={"JAVA"}
              />
            </Link>
          </motion.div>

              <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 0.3,
              type: "spring",
            }}
          >
            <Link
              href={"/projects/Web-Application-for-Used-Book-Exchange-with-NodeJS-ExpressJS-and-Sequelize"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ProjectCard
                title={"Web Application for Used Book"}
                imageUrl={"/images/b5.PNG"}
                websiteType={"Website"}
                tech_1={"Node.JS"}
                tech_2={"SQLite"}
                 tech_3={"Bootstrap"}
            
              />
            </Link>
          </motion.div>

              <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 0.3,
              type: "spring",
            }}
          >
            <Link
              href={"/projects/XML-Parsing-In-Python"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ProjectCard
                title={"XML Management with Python"}
                imageUrl={"/images/XML-Parsing-In-Python.png"}
                websiteType={"Scripts"}
                tech_1={"XML"}
                tech_2={"PYTHON"}            
              />
            </Link>
          </motion.div>

              <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 0.3,
              type: "spring",
            }}
          >
            <Link
              href={"/projects/advanced-contact-us-page"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ProjectCard
                title={"Contact Us Page App"}
                imageUrl={"/images/contact1.PNG"}
                websiteType={"MOBILE APP"}
                tech_1={"FLUTTER"}
              />
            </Link>
          </motion.div>

              <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 0.3,
              type: "spring",
            }}
          >
            <Link
              href={"/projects/automata-method"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ProjectCard
                title={"Character String Recognizer"}
                imageUrl={"/images/automaton.PNG"}
                websiteType={"Script"}
                tech_1={"Java"}
                tech_1={"automaton"}                
              />
            </Link>
          </motion.div>

              <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 0.3,
              type: "spring",
            }}
          >
            <Link
              href={"/projects/finite-state-automaton-with-java"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ProjectCard
                title={"Assembly Language Projects"}
                imageUrl={"/images/assembly.png"}
                websiteType={"Script"}
                tech_1={"Mips"}
                tech_1={"automaton"}                
              />
            </Link>
          </motion.div>

              <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 0.3,
              type: "spring",
            }}
          >
            <Link
              href={"/projects/palindrome"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ProjectCard
                title={"Palindrome Checker"}
                imageUrl={"/images/palindrome.jpg"}
                websiteType={"Script"}
                tech_1={"c++"}
              />
            </Link>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}

export default ProjectsPage
