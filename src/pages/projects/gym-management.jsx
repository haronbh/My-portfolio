import ProjectDetailsCard from "@/components/Cards/ProjectDetailsCard";
import React from "react";

function GymManagement() {
  const projectSummary = (
    <>
      The Gym Management Application is a comprehensive solution designed to streamline the operations of a gym. It provides functionalities for both users and administrators, including user authentication, exercise tracking, nutrition guidance, problem reporting, and product sales.
      <div className="mt-4">
        <a
          href="https://www.mediafire.com/file/0rbm2zfbtiox8ba/gym_projet.zip/file"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm bg-blue-500 text-white hover:bg-blue-700 rounded-md"
        >
          Read Full App Report
        </a>
      </div>
    </>
  );

  return (
    <div className="w-full min-h-screen">
      <ProjectDetailsCard
        title={"Gym Management Application"}
        websiteType={"Mobile Application"}
        devPeriod={"4 months"}
        projectSummary={projectSummary}
        objective={
          "The objective of this project is to create a mobile application that enhances the user experience and improves the efficiency of gym management. It focuses on user-friendly interfaces, real-time updates, and robust data management."
        }
        featureTitles={[
          "User Authentication",
          "Exercise Tracking",
          "Nutrition Guidance",
          "Problem Reporting",
          "Product Sales",
          "Recipe Management",
          "Admin Dashboard",
          "User Needs Calculation",
          "Contact Us",
          "Working Hours Management",
          "Meal Planning",
          "Inscriptions Management",
          "Responsive Design",
          "User Interaction",
          "Real-time Data Updates",
          "Future Enhancements"
        ]}
        featureDescriptions={[
          "Secure login and registration system for users and administrators.",
          "Users can browse and track exercises, categorized by body part.",
          "Provides users with personalized nutrition and diet plans.",
          "Allows users to report issues directly to the administration.",
          "Users can browse and purchase gym-related products and supplements.",
          "Admins can add, edit, or delete recipes, while users can view detailed recipes.",
          "A comprehensive dashboard for administrators to manage gym operations.",
          "Users can calculate their caloric and protein needs based on personal data.",
          "A contact page including conditions of use, contact details, and a guest gallery.",
          "Admins can update the gym's working hours, visible to all users.",
          "Admins can manage meal plans, while users can view and follow them.",
          "Admins can manage user inscriptions, and users can view their subscription status.",
          "Optimized for various screen sizes, ensuring a seamless user experience on any device.",
          "Enhanced user interaction through detailed profiles, progress tracking, and community features.",
          "Real-time updates and notifications for users and administrators.",
          "Future plans include advanced analytics, machine learning integration for personalized recommendations, and expanded community features."
        ]}
        image_1={"/images/p1.png"}
        image_2={"/images/p2.png"}
        image_3={"/images/p3.png"}
        image_4={"/images/p4.png"}
        image_5={"/images/p5.png"}
        image_6={"/images/p6.png"}
        image_7={"/images/p7.png"}
        image_8={"/images/p8.png"}
        image_9={"/images/p9.png"}
        image_10={"/images/p10.png"}
        image_11={"/images/p11.png"}
        image_12={"/images/p12.jpg"}
        image_13={"/images/p13.png"}
        image_14={"/images/p14.jpg"}
        image_15={"/images/p15.png"}
        image_16={"/images/p16.jpg"}
        resultDescription={
          "The Gym Management Application successfully integrates multiple features to provide a comprehensive solution for gym management. It enhances the user experience with a responsive design, real-time data updates, and a user-friendly interface. Future enhancements aim to further improve functionality and user engagement."
        }
        githubUrl={"https://www.mediafire.com/file/0rbm2zfbtiox8ba/gym_projet.zip/file"}
      />
    </div>
  );
}

export default GymManagement;
