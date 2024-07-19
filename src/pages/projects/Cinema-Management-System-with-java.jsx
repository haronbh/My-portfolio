import ProjectDetailsCard from "@/components/Cards/ProjectDetailsCard";
import React from "react";

function CinemaManagementSystem() {
  return (
    <div className="w-full min-h-screen">
      <ProjectDetailsCard
        title={"Cinema Management System"}
        websiteType={"Java Application"}
        devPeriod={"10 days"}
        projectSummary={
          "The Cinema Management System is a Java-based application developed using NetBeans. It allows administrators to manage cinema operations, including adding, editing, and removing reservations, films, and sessions. The system integrates with an SQL database for persistent data storage and efficient management."
        }
        objective={
          "The objective of this project was to create a comprehensive cinema management application that streamlines the administration of cinema operations. It provides functionalities for managing reservations, films, and sessions, while ensuring data consistency through SQL database integration."
        }
        featureTitles={[
          "Login for Admin",
          "Manage Reservations",
          "Manage Films",
          "Manage Sessions",
          "SQL Database Integration",
          "Getting Started",
          "Prerequisites",
          "Installation",
          "Usage"
        ]}
        featureDescriptions={[
          "Secure login system for admin access, ensuring that only authorized personnel can manage the cinema operations.",
          "Functionalities to add, remove, and edit reservations, allowing for efficient management of cinema bookings.",
          "Capabilities to add, remove, and edit film details, keeping the film catalog up to date.",
          "Features to schedule, update, and delete film sessions, providing flexibility in managing cinema schedules.",
          "Persistent data storage using SQL, ensuring that all data related to reservations, films, and sessions is securely stored.",
          "Clone the repository, set up the database, configure the database connection, build, and run the project.",
          "Install JDK 11 or higher, use NetBeans IDE or any other Java IDE, and set up a local host to run the SQL script.",
          "Clone the repository with `git clone https://github.com/harounbouhroude/Cinema-Management-System-with-java.git`. Set up the database by creating a `cinema_db` and executing the SQL script. Configure the database connection details and build the project in NetBeans or your preferred IDE.",
          "Launch the application, log in as admin using the provided credentials, and use the admin panel to manage reservations, films, and sessions. Utilize the functionalities to add, edit, or remove records."
        ]}
        image_1={"/images/c1.PNG"}
        image_2={"/images/c2.PNG"}
        image_3={"/images/c3.PNG"}
        image_4={"/images/c4.PNG"}
        image_5={"/images/c5.PNG"}
        image_6={"/images/c6.PNG"}
        image_7={"/images/c7.PNG"}
        image_8={"/images/c8.PNG"}
        image_9={"/images/c9.PNG"}
        image_10={"/images/c10.PNG"}
        resultDescription={
          "The Cinema Management System efficiently streamlines cinema operations with a user-friendly interface for managing reservations, films, and sessions. It ensures data consistency and security through SQL database integration, providing an effective tool for cinema administrators."
        }
        githubUrl={"https://github.com/harounbouhroude/Cinema-Management-System-with-java"}
      />
    </div>
  );
}

export default CinemaManagementSystem;
