import ProjectDetailsCard from "@/components/Cards/ProjectDetailsCard";
import React from "react";

function BMICalculatorApp() {
  return (
    <div className="w-full min-h-screen">
      <ProjectDetailsCard
        title={"BMI, Protein, and Calorie Calculator"}
        websiteType={"Flutter Application"}
        devPeriod={"4 days"}
        projectSummary={
          "This Flutter application calculates Body Mass Index (BMI), daily protein requirements, and calorie needs based on user input. It provides personalized health insights and advice based on the BMI result, helping users make informed decisions about their health and nutrition."
        }
        objective={
          "The objective of this project was to develop a user-friendly Flutter application that allows users to calculate and understand their BMI, protein needs, and calorie requirements. The app aims to offer personalized health advice and improve users' awareness of their nutritional needs."
        }
        featureTitles={[
          "Gender Selection",
          "Height Adjustment",
          "Weight and Age Adjustment",
          "BMI Calculation",
          "Protein Requirement",
          "Calorie Needs",
          "Getting Started",
          "Prerequisites"
        ]}
        featureDescriptions={[
          "Choose between male and female to ensure accurate calculations based on gender-specific data.",
          "Use a slider to set your height in centimeters or inches.",
          "Adjust your weight and age using the + and - buttons for precise input.",
          "Calculates your BMI and provides personalized health advice based on the result.",
          "Estimates your daily protein needs according to your body weight and activity level.",
          "Estimates your daily calorie requirements based on your BMI and activity level.",
          "To get started, open the app, select your gender, adjust your height, weight, and age, then tap the calculate button. View your results, including BMI, daily protein needs, and calorie requirements, along with personalized advice based on your BMI.",
          "Ensure you have the Flutter SDK installed, along with Android Studio or Visual Studio Code with Flutter and Dart plugins. A device or emulator is also required to run the app."
        ]}
        image_1={"/images/snip3.PNG"}
        image_2={"/images/snip2.PNG"}
        image_3={"/images/snip1.PNG"}
        resultDescription={
          "The BMI, Protein, and Calorie Calculator app offers an intuitive interface for users to input their data and receive accurate calculations and health advice. It helps users track their health metrics and make informed decisions about their diet and fitness."
        }
        githubUrl={"https://github.com/harounbouhroude/BMI-and-calorie-and-protein-Calculator"}
      />
    </div>
  );
}

export default BMICalculatorApp;
