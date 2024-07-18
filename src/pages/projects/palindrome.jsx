import ProjectDetailsCard from "@/components/Cards/ProjectDetailsCard";
import React from "react";

function PalindromeCheckerPage() {
  return (
    <div className="w-full min-h-screen">
      <ProjectDetailsCard
        title={"Palindrome Checker"}
        websiteType={"C++ Program"}
        devPeriod={"1 day"}
        projectSummary={
          "This project involves writing a C++ program that checks if a word is a palindrome. A palindrome is a word that reads the same forwards and backwards. The program provides feedback on whether the input word exhibits this characteristic."
        }
        objective={
          "The objective of this project was to create a C++ program capable of determining if a word is a palindrome. The program needed to efficiently check and validate whether a given string is the same when read forwards and backwards."
        }
        featureTitle={"Palindrome Verification"}
        featureDescription={
          "Implemented logic to verify if a word is a palindrome using C++ string manipulation techniques."
        }
        featureTitle_1={"Input Handling"}
        featureDescription_1={
          "Handled user input to accept and process words for palindrome checking."
        }
        featureTitle_2={"C++ Programming"}
        featureDescription_2={
          "Utilized C++ for its efficient string handling capabilities and logical operations."
        }
        featureTitle_3={"Output Feedback"}
        featureDescription_3={
          "Provided clear feedback to the user on whether the input word is a palindrome."
        }
        image_1={"/images/palindrome.jpg"} 

        resultDescription={
          "The Palindrome Checker project resulted in a functional C++ program that accurately identifies whether a word is a palindrome. It effectively demonstrates proficiency in string manipulation and logical operations in C++ programming."
        }
        githubUrl={"https://github.com/harounbouhroude/palindrome"}
      />
    </div>
  );
}

export default PalindromeCheckerPage;
