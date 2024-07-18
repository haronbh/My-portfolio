import ProjectDetailsCard from "@/components/Cards/ProjectDetailsCard";
import React from "react";

function FSAIdentifierValidatorPage() {
  return (
    <div className="w-full min-h-screen">
      <ProjectDetailsCard
        title={"Finite State Automaton (FSA) Identifier Validator"}
        websiteType={"Java Program"}
        devPeriod={"2 days"}
        projectSummary={
          "This Java program implements a finite state automaton (FSA) to validate whether a given string is a valid identifier based on specific rules. The identifier can start with a letter and can include letters, digits, and underscores. It cannot start with a digit or an underscore and cannot contain any other characters."
        }
        objective={
          "The objective of this project was to develop a Java program that uses an FSA to validate identifiers according to specific rules. The FSA checks each character in the input string to ensure it conforms to the identifier rules, demonstrating proficiency in automaton theory and string validation."
        }
        featureTitle={"Finite State Automaton Implementation"}
        featureDescription={
          "Implemented a finite state automaton to validate identifiers. The FSA uses a state-based approach with the following states: Q0 (initial state), Q1 (state after reading the first letter), Q2 (state for continuing valid characters), Q3 (state for digits after the first letter), Q4 (state for underscores), and Q5 (trap state for invalid inputs)."
        }
        featureTitle_1={"State Transition Rules"}
        featureDescription_1={
          "Defined the state transition rules for the FSA as follows: Q0 transitions to Q1 on a letter, to Q5 on a digit or underscore, and remains in Q5 on other characters. Q1 transitions to Q1 on a letter, to Q2 on a digit, to Q4 on an underscore, and to Q5 on other characters. Q2 continues to Q2 on letters, digits, or underscores and moves to Q5 on other characters. Q3 transitions to Q2 on letters and digits, to Q4 on underscores, and to Q5 on other characters. Q4 transitions to Q4 on letters, digits, or underscores and remains in Q4 on other characters. Q5 is a trap state where any input is invalid."
        }
        featureTitle_2={"Character Validation"}
        featureDescription_2={
          "Validated each character in the input string according to the FSA rules. Ensured that identifiers start with a letter and can contain letters, digits, and underscores while rejecting invalid characters and ensuring correct transitions between states."
        }
        featureTitle_3={"Error Handling"}
        featureDescription_3={
          "Implemented error handling to provide feedback when the input string does not conform to the identifier rules. The program outputs whether the string is valid or invalid based on the FSA's evaluation."
        }
        image_1={"/images/automata.png"}
        resultDescription={
          "The FSA Identifier Validator effectively validates whether a string is a valid identifier according to the defined rules. The program demonstrates a comprehensive understanding of finite state automata, string validation techniques, and error handling in Java."
        }
        githubUrl={"https://github.com/harounbouhroude/finite-state-automaton-with-java"} 
      />
    </div>
  );
}

export default FSAIdentifierValidatorPage;
