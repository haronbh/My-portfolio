import React, { useState } from 'react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

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
  visitSiteUrl,  // New prop for visit site URL
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

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

  function openModal(imageSrc) {
    setModalImage(imageSrc);
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
    setModalImage('');
  }

  return (
    <div className="flex flex-col gap-6 mb-5">
      <motion.div
        className="h-80 bg-dark-200 rounded-3xl p-6 w-full"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: [0, 0.8, 1], x: 0 }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
          delay: 0.22,
          type: 'spring',
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
              {visitSiteUrl ? (
                <a
                  href={visitSiteUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="btn btn-sm w-1/2 lg:w-24 bg-green-700 text-gray-100 hover:bg-blue-600 hover:text-gray-100 self-end rounded-3xl"
                >
                  Visit Site
                </a>
              ) : (
                <a
                  href={githubUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="btn btn-sm w-1/2 lg:w-24 bg-green-700 text-gray-100 hover:bg-blue-600 hover:text-gray-100 self-end rounded-3xl"
                >
                  Code <FaGithub className="text-md" />
                </a>
              )}
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
          ease: 'easeInOut',
          delay: 0.3,
          type: 'spring',
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
              ease: 'easeInOut',
              delay: 0.4,
              type: 'spring',
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
              ease: 'easeInOut',
              delay: 0.4,
              type: 'spring',
            }}
          >
            <div className="flex flex-col gap-6 p-4">
              <h1 className="text-2xl text-white font-bold">Features & Details</h1>
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
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: [0, 0.8, 1], x: 0 }}
              transition={{
                duration: 0.8,
                ease: 'easeInOut',
                delay: 0.5 + 0.1 * index,
                type: 'spring',
              }}
            >
              <Image
                src={image}
                alt={`project-img-${index + 1}`}
                layout="responsive"
                width={800} // Or any other fixed width for the thumbnail
                height={600} // Or any other fixed height for the thumbnail
                className="w-full h-full object-cover rounded-3xl cursor-pointer"
                onClick={() => openModal(image)}
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
          ease: 'easeInOut',
          delay: 0.8,
          type: 'spring',
        }}
      >
        <div className="w-full h-full flex flex-col gap-2 p-4 ">
          <h1 className="text-2xl text-white font-bold">Results</h1>
          <p className="font-light text-gray-300">{resultDescription}</p>
        </div>
      </motion.div>

      {/* Modal for fullscreen image preview */}
      {modalIsOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative max-w-screen-lg max-h-screen p-4">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl"
            >
              &times;
            </button>
            <Image
              src={modalImage}
              alt="Fullscreen preview"
              layout="intrinsic"
              width={1200} // Set to the actual width of the image
              height={800} // Set to the actual height of the image
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectDetailsCard;
