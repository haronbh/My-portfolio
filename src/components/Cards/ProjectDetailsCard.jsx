import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { RiLinkUnlink } from "react-icons/ri";
import { motion } from "framer-motion";

function ProjectDetailsCard({
  title,
  websiteType,
  devPeriod,
  projectSummary,
  objective,
  featureTitle,
  featureTitle_1,
  featureTitle_2,
  featureTitle_3,
  featureTitles,
  image_1,
  image_2,
  image_3,
  image_4,
  image_5,
  image_6,
  image_7,
  image_8,
  image_9,
  image_10,
  images,
  resultDescription,
  featureDescription,
  featureDescription_1,
  featureDescription_2,
  featureDescription_3,
  featureDescriptions,
  githubUrl,
}) {
  // Combine individual feature titles and descriptions into arrays if arrays are not provided
  const combinedFeatureTitles = featureTitles || [
    featureTitle,
    featureTitle_1,
    featureTitle_2,
    featureTitle_3,
  ].filter(Boolean);
  
  const combinedFeatureDescriptions = featureDescriptions || [
    featureDescription,
    featureDescription_1,
    featureDescription_2,
    featureDescription_3,
  ].filter(Boolean);
  
  // Combine individual images into an array if an array is not provided
  const combinedImages = images || [
    image_1,
    image_2,
    image_3,
    image_4,
    image_5,
    image_6,
    image_7,
    image_8,
    image_9,
    image_10,
  ].filter(Boolean);

  return (
    <div className="flex flex-col gap-6 mb-5">
      <motion.div
        className="h-80 bg-dark-200 rounded-3xl p-6 w-full"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: [0, 0.8, 1], x: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 0.22,
          type: "spring",
        }}
      >
        <div className="flex lg:flex-row flex-col gap-2 h-full w-full justify-between p-2 lg:p-4">
          <div className="lg:w-1/2 w-full h-full lg:flex lg:items-end">
            <h1 className="text-3xl text-gray-100 font-bold">{title}</h1>
          </div>
          <div className="flex flex-col gap-6 justify-end text-start lg:text-end w-full lg:w-1/2">
            <p className="text-md text-white">{websiteType}</p>
            <div className="flex flex-col gap-1">
              <p className="text-md text-white">Development Period</p>
              <p className="text-sm text-gray-200">{devPeriod}</p>
            </div>
            <div className="flex flex-row items-center justify-between lg:justify-end gap-2 mt-2">
              <a
                href={githubUrl}
                rel="noopener noreferrer"
                target="_blank"
                className="btn btn-sm w-1/2 lg:w-24 bg-green-700 text-gray-100 hover:bg-blue-600 hover:text-gray-100 self-end rounded-3xl"
              >
                Code <FaGithub className="text-md" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Summary Section */}
      <motion.div
        className="min-h-fit lg:h-64 bg-dark-200 rounded-3xl p-4 lg:p-6"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: [0, 0.8, 1], x: 0 }}
        transition={{
          duration: 0.7,
          ease: "easeInOut",
          delay: 0.3,
          type: "spring",
        }}
      >
        <div className="flex flex-col gap-3 p-4 justify-center h-full w-full">
          <h1 className="text-2xl text-white font-bold">Project Summary</h1>
          <p className="text-md font-light text-gray-300">{projectSummary}</p>
        </div>
      </motion.div>
      <div className="min-h-fit w-full flex lg:flex-row flex-col gap-6">
        <div className="flex flex-col gap-6 lg:w-[50%] w-full">
          <motion.div
            className="lg:h-80 min-h-fit bg-dark-200 rounded-3xl p-4 lg:p-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
              delay: 0.4,
              type: "spring",
            }}
          >
            <div className="flex flex-col gap-6 justify-center w-full h-full p-4">
              <h1 className="text-2xl font-bold text-white">Objective</h1>
              <p className="text-md font-light text-gray-300">{objective}</p>
            </div>
          </motion.div>
          <motion.div
            className="w-full min-h-fit p-4 lg:p-6 bg-dark-200 rounded-3xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
              delay: 0.4,
              type: "spring",
            }}
          >
            <div className="flex flex-col gap-6 p-4">
              <h1 className="text-2xl text-white font-bold">Features</h1>
              {combinedFeatureTitles.map((title, index) => (
                <div className="flex flex-col gap-2 p-2" key={index}>
                  <h1 className="text-lg text-white font-bold">{title}</h1>
                  <li className="font-light list-disc text-gray-300">
                    {combinedFeatureDescriptions[index]}
                  </li>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col gap-4 lg:gap-6 lg:w-[50%] w-full">
          {combinedImages.map((image, index) => (
            <motion.figure
              className="relative h-full w-full"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: [0, 0.8, 1], x: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
                delay: 0.5 + 0.1 * index,
                type: "spring",
              }}
              key={index}
            >
              <Image
                src={image}
                alt={`project-img-${index + 1}`}
                height={600}
                width={600}
                className="w-full h-full object-cover rounded-3xl"
              />
            </motion.figure>
          ))}
        </div>
      </div>
      <motion.div
        className="w-full min-h-fit p-4 lg:p-6 bg-dark-200 rounded-3xl shadow-sm"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: [0, 0.8, 1], x: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          delay: 0.8,
          type: "spring",
        }}
      >
        <div className="w-full h-full flex flex-col gap-2 p-4 ">
          <h1 className="text-2xl text-white font-bold">Results</h1>
          <p className="font-light text-gray-300">{resultDescription}</p>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectDetailsCard;
