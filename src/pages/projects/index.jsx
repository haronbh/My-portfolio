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
              href={"/projects/automata-method"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ProjectCard
                title={"Automaton method compilation"}
                imageUrl={"/images/automaton.PNG"}
                websiteType={"Java code"}
                tech_1={"JAVA"}
              />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: [0, 0.7, 1], x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 0.4,
              type: "spring",
            }}
          >
            <Link
              href={"/projects/reelio"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ProjectCard
                title={"Reelio"}
                imageUrl={"/images/reelio-1.png"}
                websiteType={"Movie Platform"}
                tech_1={"Next.js"}
                tech_2={"TailwindCSS"}
                tech_3={"IMdb.API"}
              />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: [0, 0.7, 1], x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 0.4,
              type: "spring",
            }}
          >
            <Link
              href={"/projects/reelio"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ProjectCard
                title={"Reelio"}
                imageUrl={"/images/reelio-1.png"}
                websiteType={"Movie Platform"}
                tech_1={"Next.js"}
                tech_2={"TailwindCSS"}
                tech_3={"IMdb.API"}
              />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: [0, 0.7, 1], x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 0.5,
              type: "spring",
            }}
          >
            <Link
              href={"/projects/neon"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ProjectCard
                title={"Neon City"}
                imageUrl={"/images/neoncity.png"}
                websiteType={"Mini Game"}
                tech_1={"HTML"}
                tech_2={"CSS"}
                tech_3={"Vanilla JS"}
              />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: [0, 0.7, 1], x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 0.6,
              type: "spring",
            }}
          >
            <Link
              href={"/projects/alibabalite"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ProjectCard
                title={"Alibaba Lite"}
                imageUrl={"/images/alibabalite.png"}
                websiteType={"E-Commerce Website"}
                tech_1={"Next.js"}
                tech_2={"TailwindCSS"}
                tech_3={"Firebase"}
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsPage
