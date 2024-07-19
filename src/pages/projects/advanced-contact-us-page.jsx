import ProjectDetailsCard from "@/components/Cards/ProjectDetailsCard";
import React from "react";

function ContactUsPageApp() {
  return (
    <div className="w-full min-h-screen">
      <ProjectDetailsCard
        title={"Contact Us Page App"}
        websiteType={"Flutter Application"}
        devPeriod={"2 days"}
        projectSummary={
          "This Flutter application is designed to provide a contact us page with three main functionalities: Terms of Use, Contact Us, and Gallery. It offers an intuitive interface for users to access essential information and connect with the company."
        }
        objective={
          "The objective of this project was to develop a Flutter application that facilitates user engagement by providing a well-organized contact us page with easy access to terms of use, multiple contact methods, and a gallery showcasing the company or its products/services."
        }
        featureTitles={[
          "Terms of Use",
          "Contact Us",
          "Gallery",
          "Installation"
        ]}
        featureDescriptions={[
          "This section provides users with access to the terms and conditions of using the application or service.",
          "Users can contact the company using various methods:\n- Email: Opens the default email client with the company's email address pre-filled.\n- Facebook: Opens the Facebook app or browser to the company's Facebook page.\n- Phone: Initiates a phone call to the company's phone number.\n- Google Maps: Opens the Google Maps app or browser with the company's location.",
          "Displays images of the company or its products/services in a gallery format.",
          "To run this Flutter project locally, ensure you have Flutter installed on your machine. Clone this repository and run:\n\n- `flutter pub get`\n- `flutter run`"
        ]}
        image_1={"/images/contact1.PNG"}
        image_2={"/images/contact2.PNG"}
        image_3={"/images/contact3.PNG"}
        image_4={"/images/contact4.PNG"}
        resultDescription={
          "The Contact Us Page App effectively provides users with a comprehensive contact interface through a well-structured Flutter application. It includes essential sections for terms of use, multiple contact methods, and a visual gallery, enhancing user experience and accessibility."
        }
        githubUrl={"https://github.com/harounbouhroude/advanced-contact-us-page"}
      />
    </div>
  );
}

export default ContactUsPageApp;
