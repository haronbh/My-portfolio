import ProjectDetailsCard from "@/components/Cards/ProjectDetailsCard";
import React from "react";

function AssemblyLanguageProjects() {
  return (
    <div className="w-full min-h-screen">
      <ProjectDetailsCard
        title={"Assembly Language Projects"}
        websiteType={"Assembly Programs"}
        devPeriod={"3 days"}
        projectSummary={
          "This repository contains two Assembly language programs: Count Positive Elements and Decimal to Binary Conversion. These programs are designed to demonstrate fundamental Assembly language operations, including iterating through arrays and performing mathematical conversions."
        }
        objective={
          "The main objective of this project is to showcase the use of Assembly language for basic computational tasks. These programs are intended to help understand low-level programming concepts and the functionality of Assembly language in solving simple problems."
        }
        featureTitles={[
          "Count Positive Elements",
          "Decimal to Binary Conversion",
          "Getting Started",
          "Prerequisites",
          "Usage Instructions",
          "Code Explanation",
          "Result Analysis",
          "Future Enhancements"
        ]}
        featureDescriptions={[
          "This program iterates through an array and counts the number of elements that are strictly positive.",
          "This program takes a decimal number and converts it to its binary representation.",
          "Instructions to get a copy of the project up and running on your local machine for development and testing purposes.",
          "An x86-64 assembler and linker, such as NASM and LD. Suggested: R3000 assembler.",
          "Detailed usage instructions for running the Assembly programs on a local machine.",
          "Explanation of the code for both programs, including the logic and operations performed.",
          "Analysis of the results obtained from running the programs, including expected outputs and any limitations.",
          "Potential future improvements, such as optimizing the code for better performance or expanding functionality."
        ]}
        image_1={"/images/assembly.png"}

        resultDescription={
          "The Assembly Language Projects successfully demonstrate basic computational tasks using Assembly language. The programs count positive elements in an array and convert decimal numbers to binary, providing a foundation for understanding low-level programming. Future enhancements may include optimization and additional features."
        }
        githubUrl={"https://github.com/harounbouhroude/mips-assembly-language"}
      />
    </div>
  );
}

export default AssemblyLanguageProjects;
