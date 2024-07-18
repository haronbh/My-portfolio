import ProjectDetailsCard from "@/components/Cards/ProjectDetailsCard"
import React from "react"

function StringRecognizerPage() {
  return (
    <div className="w-full min-h-screen">
      <ProjectDetailsCard
        title={"Character String Recognizer"}
        websiteType={"JAVA Program"}
        devPeriod={"1 day"}
        projectSummary={
          "This project involves writing a JAVA program that recognizes character strings using the automaton method. The program specifically handles the Lee language of character strings, which consists of a quote followed by a set of characters, and ends with a quote, with a maximum length of 10 characters."
        }
        objective={
          "The objective of this project was to create a JAVA program capable of recognizing character strings using the automaton method. The program needed to handle the Lee language, ensuring strings begin and end with quotes and contain up to 10 characters in between. The aim was to demonstrate proficiency in automaton techniques and string manipulation within a two-week development period."
        }
        featureTitle={"Automaton Method Implementation"}
        featureDescription={
          "Implemented the automaton method to recognize valid character strings in the Lee language."
        }
        featureTitle_1={"String Validation"}
        featureDescription_1={
          "Ensured strings start and end with quotes and contain no more than 10 characters in between."
        }
        featureTitle_2={"Java Programming"}
        featureDescription_2={
          "Utilized Java for its robust string manipulation and automaton implementation capabilities."
        }
        featureTitle_3={"Error Handling"}
        featureDescription_3={
          "Developed comprehensive error handling to manage invalid strings and provide user feedback."
        }
        image_1={"/images/automaton.PNG"}

        resultDescription={
          "The result of the Character String Recognizer project is a reliable JAVA program that accurately identifies valid strings in the Lee language using the automaton method. The project successfully showcases the implementation of automaton techniques and robust string validation, demonstrating proficiency in Java programming and problem-solving."
        }
        githubUrl={"https://github.com/harounbouhroude/automata-method/"}
      />
    </div>
  )
}

export default StringRecognizerPage
