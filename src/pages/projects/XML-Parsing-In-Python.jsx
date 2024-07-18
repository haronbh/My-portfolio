import ProjectDetailsCard from "@/components/Cards/ProjectDetailsCard";
import React from "react";

function XmlManagementWithPythonPage() {
  return (
    <div className="w-full min-h-screen">
      <ProjectDetailsCard
        title={"XML Management with Python"}
        websiteType={"Python Project"}
        devPeriod={"3 Weeks"}
        projectSummary={
          "This project demonstrates how to create, validate, and manage XML files using Python. It includes examples XML files, along with their corresponding DTD (Document Type Definition) and XSD (XML Schema Definition) files. The project also contains Python scripts to create an XML file & extract its content and to validate the XML file against its DTD and XSD."
        }
        objective={
          "The objective of this project was to create a robust system for managing XML files using Python. This includes generating XML files, validating them against DTD and XSD, and extracting data. The aim was to demonstrate proficiency in XML handling and validation techniques within a three-week development period."
        }
        featureTitles={[
          "XML File (example.xml)",
          "DTD File (example.dtd)",
          "XSD File (example.xsd)",
          "Create XML (create_xml.py)",
          "Validate DTD (validate_dtd.py)",
          "Validate XSD (validate_xsd.py)",
          "Extract XML Data",
          "Benefits",
          "Requirements",
          "Getting Started"
        ]}
        featureDescriptions={[
          "This file contains the actual data structured in XML format. It references the DTD to ensure that the XML conforms to the predefined structure.",
          "Defines the structure and legal elements and attributes of the XML document. It is used to validate the XML file ensuring that it adheres to the specified format.",
          "Provides an alternative to DTD for defining the structure, content, and semantics of XML documents. It provides comprehensive validation for the XML file.",
          "This script demonstrates how to create an XML file from scratch using Python. It uses libraries such as xml.etree.ElementTree to build the XML structure programmatically.",
          "This script uses libraries like lxml to parse the XML file and validate it against the DTD file. It ensures that the XML conforms to the structure defined in the DTD.",
          "This script also uses the lxml library to validate the XML file against the XSD file. It checks that the XML elements and attributes adhere to the types and structure defined in the XSD.",
          "This script demonstrates how to extract data from an XML file using Python, ensuring that the data can be used for further processing or analysis.",
          "Modularity: Separation of concerns with distinct files for XML, DTD, and XSD.\nAutomation: Python scripts automate the creation and validation process.\nFlexibility: Using both DTD and XSD provides robust validation options.",
          "Python 3.x\nlxml library (pip install lxml)",
          "Clone the repository: git clone <repository_url>\nNavigate to the project directory: cd my-xml-project\nRun the Python scripts as needed."
        ]}
        resultDescription={
          "This project is a comprehensive guide to managing XML files with Python, providing all necessary tools for creating and validating XML against DTD and XSD. The system is robust, modular, and automated, ensuring efficient XML management."
        }
        images={[
          "/images/XML-Parsing-In-Python.png"
        ]}
        githubUrl={"https://github.com/harounbouhroude/XML-Management-with-Python"}
      />
    </div>
  );
}

export default XmlManagementWithPythonPage;
