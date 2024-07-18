import ProjectDetailsCard from "@/components/Cards/ProjectDetailsCard";
import React from "react";

function LexicalAnalyzerPage() {
  return (
    <div className="w-full min-h-screen">
      <ProjectDetailsCard
        title={"Lexical Analyzer in Java"}
        websiteType={"Java Program"}
        devPeriod={"1 day"}
        projectSummary={
          "This Java program functions as a lexical analyzer that validates a given string according to specific lexical rules. The program checks if the input string conforms to a pattern where it starts with two or more 'a' characters, followed by a single 'd', followed by zero or more 'b' characters, and ending with one or more 'c' characters. This is achieved using a series of string checks and validations."
        }
        objective={
          "The goal of this project was to develop a Java program that accurately analyzes and validates a string based on predefined lexical rules. The program demonstrates proficiency in handling string manipulations and implementing pattern matching algorithms in Java."
        }
        featureTitle={"Pattern Validation"}
        featureDescription={
          "Implemented a method to validate strings against a specific pattern, Language: L={aa*db∗c+}."
        }
        featureTitle_1={"String Parsing"}
        featureDescription_1={
          "Developed logic to parse the input string character by character, applying the validation rules effectively."
        }
        featureTitle_2={"User Interaction"}
        featureDescription_2={
          "Created a user-friendly interface that prompts the user for input and provides validation feedback."
        }
        featureTitle_3={"Error Handling"}
        featureDescription_3={
          "Implemented error handling to manage invalid strings and inform users of validation failures."
        }
        image_1={"/images/analyser.png"}
        resultDescription={
          "The Lexical Analyzer program successfully validates input strings based on the specified lexical rules. It effectively demonstrates the application of pattern matching and string parsing techniques in Java, providing accurate results and clear feedback to users."
        }
        githubUrl={"https://github.com/harounbouhroude/Lexical-analyzer-with-java"} 
      />
    </div>
  );
}

export default LexicalAnalyzerPage;
