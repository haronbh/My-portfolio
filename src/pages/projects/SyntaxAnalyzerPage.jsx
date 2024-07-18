import ProjectDetailsCard from "@/components/Cards/ProjectDetailsCard";
import React from "react";

function SyntaxAnalyzerPage() {
  return (
    <div className="w-full min-h-screen">
      {/* Syntax Analyzer Project */}
      <ProjectDetailsCard
        title={"Syntax Analyzer using Recursive Descent Method in Java"}
        websiteType={"Java Program"}
        devPeriod={"1 day"}
        projectSummary={
          "This project involves writing a syntax analyzer using the recursive descent method in Java. It implements grammar rules to parse and analyze input strings based on two different grammars."
        }
        objective={
          "The objective of this project was to implement a syntax analyzer using the recursive descent method in Java. The analyzer needed to correctly parse and validate input strings according to the specified grammars (G1 and Exercise2). This exercise aimed to demonstrate understanding and proficiency in recursive descent parsing techniques."
        }
        featureTitle={"Recursive Descent Implementation"}
        featureDescription={
          "Implemented recursive descent parsing to handle grammar rules and parse input strings accordingly."
        }
        featureTitle_1={"Grammar 1 & 2 Implementation"}
        featureDescription_1={
          "Developed parsing rules based on Grammar G1 (S -> x/y/(T), T -> S/SA, A -> SA/ε) and Exercise 2 (S-->CSd/AB A-->aAb/ε B-->bB/ε C-->cC/ε)."
        }
        featureTitle_2={"Java Programming"}
        featureDescription_2={
          "Utilized Java for its object-oriented capabilities and implemented parsing algorithms efficiently."
        }
        image_1={"/images/recursive-descent.png"} 

        resultDescription={
          "The Syntax Analyzer project successfully implements a recursive descent parser in Java, capable of parsing input strings according to specified grammars (G1 and Exercise2). It demonstrates proficiency in parsing techniques, grammar implementation, and Java programming."
        }
        githubUrl={"https://github.com/harounbouhroude/recursive-descent-method"}
      />
    </div>
  );
}

export default SyntaxAnalyzerPage;
