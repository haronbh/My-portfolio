import InfoCard from "@/components/Cards/InfoCard";
import { LiaBrainSolid } from "react-icons/lia";
import { TbListDetails } from "react-icons/tb";
import { LuUsers2, LuHeadphones } from "react-icons/lu";
import Stacks from "@/components/Cards/Stacks";
import Link from "next/link";
import ProjectCard from "@/components/Cards/ProjectCard";
import Image from "next/image";
import Slider from "@/components/Swiper";
import { motion } from "framer-motion";

function Home() {
  return (
    <section className="min-h-screen">
      <div className="flex flex-col min-h-fit w-full gap-4">
        <motion.div
          className="min-h-fit bg-dark-200 shadow-sm rounded-3xl flex items-start justify-center lg:justify-start lg:items-center lg:flex-row flex-col gap-8 p-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: [0, 0.8, 1], x: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: 0.22,
            type: "spring",
          }}
        >
          {/* Header */}
          <div className="lg:w-2/3 flex flex-col gap-4 w-full">
            <h1 className="text-3xl uppercase font-bold text-white mb-2">
              Hello! i&apos;m haroun.
            </h1>
            <p className="text-md font-light text-gray-300">
              With a strong foundation in Computer Science, I excel in software engineering and web development. I bring hands-on experience in multi-project development, with expertise in Java, SQL, and JavaScript frameworks. Known for attention to detail and a commitment to high-quality solutions, I am passionate about tackling complex challenges and leveraging emerging technologies.
            </p>
            <Link
              className="btn btn-sm lg:w-36 w-full my-2 border border-opacity-0 rounded-3xl self-start hover:border-opacity-0 bg-green-700 text-gray-100 hover:bg-blue-600"
              href={
                "https://drive.google.com/file/d/1Pq-CKlvh_QZ2cOqXhtLVEgMY28BW5i1o/view?usp=sharing"
              }
              rel="noopener noreferrer"
              target="_blank"
            >
              Download CV
            </Link>
          </div>
          <figure className="h-48 w-48 lg:block hidden">
            <Image
              src="/images/avatar_1.png"
              alt=""
              height={500}
              width={500}
              priority
              className="w-full h-full object-cover rounded-2xl"
            />
          </figure>
        </motion.div>
        {/* Second Section */}
        <div className="flex xl:flex-row flex-col w-full min-h-fit gap-5">
          {/* About */}
          <motion.div
            className="flex flex-col xl:w-[60%] w-full min-h-fit"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: [0, 0.7, 1], x: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              delay: 0.2,
              type: "spring",
            }}
          >
            <h1 className="pl-2 py-3 text-2xl uppercase font-bold text-white">
              About
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <motion.div
                className="lg:col-span-2 col-span-4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: [0, 0.7, 1], x: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                  delay: 0.2,
                  type: "spring",
                }}
              >
                <InfoCard
                  title={"Problem Solver"}
                  description={
                    "Fresh perspective, passionate about innovative solutions."
                  }
                  icon={<LiaBrainSolid />}
                />
              </motion.div>
              <motion.div
                className="lg:col-span-2 col-span-4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: [0, 0.7, 1], x: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                  delay: 0.3,
                  type: "spring",
                }}
              >
                <InfoCard
                  title={"Detail Oriented"}
                  description={
                    "Detail-oriented, aligning pixels with precision."
                  }
                  icon={<TbListDetails />}
                />
              </motion.div>
              <motion.div
                className="col-span-4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: [0, 0.7, 1], x: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                  delay: 0.4,
                  type: "spring",
                }}
              >
                <InfoCard
                  title={"Team Player & Fast Learner"}
                  icon={<LuUsers2 />}
                  description={
                    "In the dynamic world of web development, collaboration is key. I thrive in team environments, fostering open communication and working seamlessly with designers and fellow developers."
                  }
                />
              </motion.div>
              <motion.div
                className="col-span-4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: [0, 0.7, 1], x: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                  delay: 0.4,
                  type: "spring",
                }}
              >
                <InfoCard
                  title={"Customer Focus"}
                  icon={<LuHeadphones />}
                  description={
                    "Deliver exceptional value by prioritizing user needs and providing attentive, personalized service to each client."
                  }
                />
              </motion.div>
            </div>
          </motion.div>
          {/* Stack */}
          <motion.div
            className="flex flex-col xl:w-[40%] w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: [0, 0.7, 1], x: 0 }}
            transition={{
              duration: 0.15,
              ease: "easeInOut",
              delay: 0.2,
              type: "spring",
            }}
          >
            <div className="pl-2 py-3 flex justify-between items-center">
              <h1 className="text-2xl w-full uppercase font-bold text-white">
                Stack
              </h1>
              <Link
                className="btn btn-sm rounded-2xl  bg-green-700 border border-opacity-0 hover:border-opacity-0 text-gray-100 hover:bg-blue-600 w-28 lg:w-24"
                href={"/stack"}
              >
                View All
              </Link>
            </div>
            <div className="flex flex-col gap-5 h-full w-full">
              <motion.div
                initial={{ opacity: 0, x: 70 }}
                animate={{ opacity: [0, 0.7, 1], x: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: 0.3,
                  type: "spring",
                }}
              >
                <Stacks technology={"Html/Css/JavaScript"} image={"/images/htmlcssjs.PNG"} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 70 }}
                animate={{ opacity: [0, 0.7, 1], x: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: 0.4,
                  type: "spring",
                }}
              >
                <Stacks technology={"JAVA"} image={"/images/java.png"} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 70 }}
                animate={{ opacity: [0, 0.7, 1], x: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: 0.5,
                  type: "spring",
                }}
              >
                <Stacks
                  technology={"Flutter"}
                  image={"/images/flutter.png"}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 70 }}
                animate={{ opacity: [0, 0.7, 1], x: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: 0.6,
                  type: "spring",
                }}
              >
                <Stacks
                  technology={"Wordpress"}
                  image={"/images/wordpress.png"}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 70 }}
                animate={{ opacity: [0, 0.7, 1], x: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: 0.6,
                  type: "spring",
                }}
              >
                <Stacks
                  technology={"SQL"}
                  image={"/images/sql.png"}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 70 }}
                animate={{ opacity: [0, 0.7, 1], x: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: 0.6,
                  type: "spring",
                }}
              >
                <Stacks
                  technology={"Node.js"}
                  image={"/images/nodejs.png"}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 70 }}
                animate={{ opacity: [0, 0.7, 1], x: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: 0.6,
                  type: "spring",
                }}
              >
                <Stacks
                  technology={"BOOTSTRAP"}
                  image={"/images/bootstrap.png"}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
        {/* Projects Section */}
        <motion.div
          className="w-full min-h-fit mb-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: [0, 0.7, 1], x: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.25,
            type: "spring",
          }}
        >
          <div className="flex items-center justify-between w-full min-h-fit">
            <h1 className="pl-2 py-3 text-2xl uppercase text-white font-bold mb-2 lg:mt-0 mt-2">
              Recent Projects
            </h1>
            <Link
              className="btn btn-sm rounded-2xl bg-green-700 border border-opacity-0 hover:border-opacity-0 text-gray-100 hover:bg-blue-600 w-28 lg:w-24"
              href={"/projects"}
            >
              View All
            </Link>
          </div>
          <div className="flex flex-col lg:flex-row w-full min-h-fit gap-5">
            <Link
              href={"/projects/gym-management"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ProjectCard
                title={"Full Gym Management System"}
                imageUrl={"/images/gym.png"}
                websiteType={"For client & admin"}
                tech_1={"Flutter"}
              />
            </Link>
            <Link
              href={"/projects/RasdPresseProject"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ProjectCard
                title={"News site project"}
                imageUrl={"/images/rasd1.PNG"}
                websiteType={"News Platform"}
                tech_1={"Wordpress"}
              />
            </Link>
            <Link
              href={"/projects/Cinema-Management-System-with-java"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ProjectCard
                title={"Cinema Management"}
                imageUrl={"/images/c8.PNG"}
                websiteType={"MiniProject with database"}
                tech_1={"JAVA"}
                tech_2={"SQL"}
                tech_3={"GUI"}
              />
            </Link>
          </div>
        </motion.div>
        {/* Testimonials */}
        
      </div>
    </section>
  );
}

export default Home;
