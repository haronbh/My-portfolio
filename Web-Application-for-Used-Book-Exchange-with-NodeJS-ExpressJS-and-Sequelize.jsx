import ProjectDetailsCard from "@/components/Cards/ProjectDetailsCard";
import React from "react";

function WebBookExchange() {
  return (
    <div className="w-full min-h-screen">
      <ProjectDetailsCard
        title={"Web Application for Used Book Exchange"}
        websiteType={"Web Application"}
        devPeriod={"5 days"}
        projectSummary={
          "This project is a responsive web application designed for exchanging used books. Users can register, log in, and manage book exchanges through an intuitive interface. The back-end is built using NodeJS, ExpressJS, Sequelize, and SQLite, while the front-end utilizes Bootstrap and jQuery for a responsive and interactive user experience."
        }
        objective={
          "The main objective of this project is to develop a full-stack web application that supports used book exchanges. This involves implementing user authentication, managing books and authors, and providing a responsive design. The backend handles CRUD operations and API integration, while the frontend ensures a user-friendly interface."
        }
        featureTitles={[
          "Backend Setup",
          "User Authentication",
          "Book Management (CRUD)",
          "Author Management (CRUD)",
          "Responsive Design",
          "Image Upload and Cropping",
          "LocalStorage",
          "API Integration"
        ]}
        featureDescriptions={[
          "Initialize the NodeJS project, set up folders for models, data, and configuration. Define and configure the SQLite database, establish models and relationships using Sequelize, and create an ExpressJS server to handle API routes.",
          "Implement user registration and login functionality, manage user sessions, and secure access to book and author management features.",
          "CRUD operations for books, allowing users to add, edit, view, and delete book entries. Integrate with the frontend to ensure smooth interaction.",
          "CRUD operations for authors, enabling management of author details and linking with book entries. Ensure proper database relationships using Sequelize.",
          "Ensure the application is responsive across various devices using Bootstrap. Design components and layouts that adapt to different screen sizes.",
          "Allow users to upload book cover images, with cropping functionality for better image management. Integrate with frontend using Cropper.js.",
          "Use localStorage to save user preferences or temporary data, enhancing the user experience with faster access to frequently used information.",
          "Integrate a robust API with fetch capabilities to handle data exchange between the frontend and backend. Ensure smooth communication and data retrieval."
        ]}
        image_1={"/images/b1.PNG"}
        image_2={"/images/b2.PNG"}
        image_3={"/images/b3.PNG"}
        image_4={"/images/b4.PNG"}
        image_5={"/images/b5.PNG"}
        resultDescription={
          "The Web Application for Used Book Exchange successfully integrates a fully functional backend with a responsive frontend. It supports user authentication, book and author management, and provides a seamless experience for book exchanges. Future improvements may include enhanced API features, more advanced user interactions, and further UI/UX refinements."
        }
        githubUrl={"https://github.com/harounbouhroude/Web-Application-for-Used-Book-Exchange-with-NodeJS-ExpressJS-and-Sequelize"}
      />
    </div>
  );
}

export default WebBookExchange;
