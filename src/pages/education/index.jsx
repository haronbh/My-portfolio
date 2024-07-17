import EducationCard from "@/components/Cards/EducationCard"
import { motion } from "framer-motion"
import Image from "next/image"

function EducationPage() {
  return (
    <section className="min-h-screen w-full">
      <div className="flex flex-col w-full min-h-fit gap-6 mb-6">
        {/* Header */}
        <motion.div
          className="lg:h-80 min-h-fit w-full rounded-3xl shadow-sm p-8 bg-dark-200"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: [0, 0.8, 1], x: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: 0.22,
            type: "spring",
          }}
        >
          <div className="flex flex-col h-full gap-3 w-full lg:w-[70%] justify-end">
            <h1 className="text-4xl uppercase font-bold text-white">
              Work & Education
            </h1>
            <p className="text-md text-gray-300 font-light">
              This section highlights not only my academic
              achievements and work experience but also emphasizes the specific
              soft skills cultivated throughout my educational journey,
              contributing to my effectiveness as a dynamic professional.
            </p>
          </div>
        </motion.div>
        <div className="flex lg:flex-row flex-col w-full min-h-fit gap-5">
          <div className="flex flex-col gap-6 lg:w-[60%] w-full">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: [0, 0.8, 1], x: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: 0.4,
                type: "spring",
              }}
            >
              <EducationCard
                title={"Bachelor's Degree in Computer Science specializing in Information Systems"}
                organization={"University of Béjaia"}
                description_1={
                  "Throughout my Bachelor's Degree in Computer Science specializing in Information Systems, I gained comprehensive knowledge in various domains including algorithms, data structures, database management, web development, operating systems, and computer networks. Additionally, I developed skills in programming languages such as Java, Python, C, and C++."
                }
                description_2={
                  "I also learned about software engineering principles, machine learning, artificial intelligence, mobile application development, system security, and data analysis. This diverse education equipped me with a robust foundation to tackle complex problems in the tech industry."
                }
                year={"2021 - 2024"}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: [0, 0.8, 1], x: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: 0.5,
                type: "spring",
              }}
            >
              <EducationCard
                title={"Technical Support Specialist"}
                organization={"Center «Espace Informatique» (Internet Cafe)"}
                description_1={
                  "Provided comprehensive technical support services to clients at a cyber café."
                }
                description_2={
                  "Diagnosed and resolved a wide range of software & some hardware issues on clients' devices, including troubleshooting operating system errors, application crashes, and connectivity problems."
                }
                description_3={
                  "Developed and maintained office documents in various formats such as PDF, Word, and Excel ...etc for client communication, administrative and more purposes."
                }
                year={"2018 - 2022"}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: [0, 0.8, 1], x: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: 0.6,
                type: "spring",
              }}
            >
              <EducationCard
                title={"Freelance Web Developer & Webmaster"}
                organization={"Freelance/Remote"}
                description_1={
                  "As a webmaster, I managed and developed multiple WordPress sites, ensuring they were optimized for performance and user experience. Utilizing the best themes and plugins, I tailored each site to meet specific needs. My responsibilities included regular updates, troubleshooting issues, content creation & updates and content writers team leading. I also handled data migration."
                }
                description_2={
                  "I administered servers using Unix, Linux, cPanel, and Plesk, maintaining a secure and stable hosting environment. This involved routine backups, security audits, and performance optimization. I ensured that all websites had minimal downtime and were protected against potential security threats. My server management skills included configuring server settings, managing databases, and troubleshooting any server-related issues that arose."
                }
                description_3={
                  "I implemented strategic SEO practices to drive organic traffic to tech-related websites. This included conducting keyword research, optimizing content, and building backlinks to improve search engine rankings. I monitored website analytics to track performance and adjust strategies as needed. My SEO efforts significantly increased website visibility and user engagement, leading to higher traffic and improved site metrics."
                }
                description_4={
                  "I provided web development and SEO services to clients. This involved customizing solutions to meet their specific needs and delivering comprehensive technical support. I communicated with clients to understand their requirements and offered consulting to enhance their online presence."
                }
                year={"2020 - Now"}
              />
            </motion.div>
          </div>
          <div className="flex flex-col gap-6 min-h-fit lg:w-[40%] w-full">
            <motion.div
              className="min-h-fit w-full bg-dark-200 p-6 rounded-3xl"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: [0, 0.8, 1], x: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: 0.5,
                type: "spring",
              }}
            >
              <div className="min-h-fit w-full flex flex-col gap-3 p-4">
                <h1 className="md:text-3xl text-2xl font-bold uppercase text-white">
                  Soft Skills
                </h1>
                <ul className="list-disc w-full p-5 text-md font-light text-gray-200 flex flex-col gap-3">
                  <li>Research</li>
                  <li>Web Design</li>
                  <li>Project Management</li>
                  <li>Time Management</li>
                  <li>Front-End Development</li>
                  <li>Code Review</li>
                  <li>Attention to Detail</li>
                  <li>Collaboration</li>
                  <li>Teamwork</li>
                  <li>Team Leadership</li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              className="w-full h-full p-6 bg-dark-200 rounded-3xl"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: [0, 0.8, 1], x: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: 0.6,
                type: "spring",
              }}
            >
              <h1 className="md:text-3xl text-2xl font-bold uppercase text-white p-4 mb-2">
                Certifications
              </h1>
              <div className="w-full min-h-fit p-4">
                <a
                  href="https://www.credential.net/fcaf13d7-eb4c-4b68-bbf5-48deb48dd14e#gs.5zc6jz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-105 transition duration-500 cursor-pointer"
                >
                  <li className="text-md text-gray-200 font-light hover:text-blue-600">
                    Front-End Web Development Certificate
                  </li>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationPage
