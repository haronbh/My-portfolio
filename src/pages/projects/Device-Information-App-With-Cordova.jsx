import ProjectDetailsCard from "@/components/Cards/ProjectDetailsCard";
import React from "react";

function DeviceInformationAppWithCordovaPage() {
  return (
    <div className="w-full min-h-screen">
      <ProjectDetailsCard
        title={"Device Information App with Cordova"}
        websiteType={"Cordova Mobile Application"}
        devPeriod={"2 days"}
        projectSummary={
          "This Cordova-based mobile application displays essential device information including battery status, device details, network connectivity, and geolocation data. It leverages Cordova plugins for cross-platform compatibility and ease of development."
        }
        objective={
          "The objective of this project was to develop a cross-platform mobile application that provides users with critical device information using Cordova plugins, enhancing both development efficiency and user experience."
        }
        featureTitles={[
          "Battery Status",
          "Device Information",
          "Network Information",
          "Geolocation",
          "Supported Platforms",
          "Installation",
          "Usage"
        ]}
        featureDescriptions={[
          "Monitor battery level and charging status.",
          "Display device model, platform, version, and unique identifier (UUID).",
          "Detect network connection type and online status.",
          "Retrieve and display current geographic coordinates.",
          "Android, iOS, Web (Browser-based)",
          "To run the app locally:\n\n1. Clone this repository.\n2. Navigate to the project directory.\n3. Install dependencies with npm install.\n4. Add desired platforms with `cordova platform add <platform>` (e.g., `cordova platform add android`).",
          "Run the app on a simulator or connected device using `cordova run <platform>`.\nTest web version locally with `cordova run browser`."
        ]}
        image_1={"/images/device-info.png"}
        resultDescription={
          "This Cordova-based mobile application successfully demonstrates the use of Cordova plugins to access and display essential device information. It provides a seamless user experience across multiple platforms including Android, iOS, and Web."
        }
        githubUrl={"https://github.com/harounbouhroude/Get-Device-Information-App-with-Cordova"}
      />
    </div>
  );
}

export default DeviceInformationAppWithCordovaPage;
