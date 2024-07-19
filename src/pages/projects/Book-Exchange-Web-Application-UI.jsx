import ProjectDetailsCard from "@/components/Cards/ProjectDetailsCard";
import React from "react";

function BookExchange() {
  return (
    <div className="w-full min-h-screen">
      <ProjectDetailsCard
        title={"BookExchange: A Responsive Web Application for Used Book Exchange"}
        websiteType={"Web Application"}
        devPeriod={"4 Months"}
        projectSummary={
          "BookExchange is a responsive web application designed to facilitate the exchange of used books among authenticated users. The project focuses on creating a multi-platform front-end using Bootstrap and NodeJS, aiming to provide a seamless user experience across various devices."
        }
        objective={
          "The objective of this project was to build a web application that enables users to exchange used books efficiently. It emphasizes responsive design, user-friendly interfaces, and local storage handling, with future plans for backend integration and enhanced features."
        }
        featureTitles={[
          "Responsive Design",
          "Landing Page",
          "Book Cards",
          "Authors Page",
          "Books Page",
          "Users Page",
          "Bootstrap Form Design",
          "Local Storage Handling",
          "Technologies Used",
          "Installation",
          "Usage",
          "Responsiveness",
          "Future Enhancements"
        ]}
        featureDescriptions={[
          "Optimized for different screen sizes, ensuring a good user experience on small, medium, large, very large, and extremely large screens.",
          "A welcoming page summarizing the application's functionalities and providing easy navigation.",
          "Displays latest and exchanged books with details such as title, author, publisher, year, user description, and cover photo.",
          "Lists authors with details and a link to their books, allowing users to explore different authors.",
          "Focuses on books with a similar layout to the Authors Page, listing various books available in the system.",
          "Displays a list of application users with relevant details, enhancing user interaction within the app.",
          "Form fields for book title, author, publication year, description, and illustration. Includes file input for selecting photos and a button to capture photos using the device camera.",
          "Saves book details, including the uploaded photo, locally using localStorage upon form submission. Provides a preview area for user confirmation.",
          "Bootstrap for responsive design and components, NodeJS for future back-end functionality, HTML/CSS/JavaScript for front-end development, and Cordova for Android compatibility.",
          "Clone the repository with `git clone https://github.com/harounbouhroude/Book-Exchange-Web-Application-UI`, navigate to the project directory, install dependencies with `npm install`, and run the application with `npm start`.",
          "Open `http://localhost:3000` in your browser to view the application. Navigate through the menu to explore different sections and use the account page to add new books with photos.",
          "Responsive design accommodates various screen sizes: 1 book per row on small screens, 2 books per row on medium screens, 3 books per row on large screens, 4 books per row on very large screens, and 6 books per row on extremely large screens.",
          "Future plans include backend integration with NodeJS, advanced search functionality, enhanced user authentication, and continuous UI/UX improvements."
        ]}
        image_1={"/images/b1.PNG"}
        image_2={"/images/b2.PNG"}
        image_3={"/images/b3.PNG"}
        image_4={"/images/b4.PNG"}
        image_5={"/images/b5.PNG"}

        resultDescription={
          "The BookExchange application successfully facilitates the exchange of used books with a responsive design and user-friendly interface. It provides a robust platform for users to manage their book collections and interact with others, with future enhancements planned for backend integration and improved functionality."
        }
        githubUrl={"https://github.com/harounbouhroude/Book-Exchange-Web-Application-UI"}
      />
    </div>
  );
}

export default BookExchange;
