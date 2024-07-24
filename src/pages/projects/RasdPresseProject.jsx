import React from "react";
import ProjectDetailsCard from "@/components/Cards/ProjectDetailsCard";

function RasdPresseProject() {
  return (
    <div className="w-full min-h-screen">
      <ProjectDetailsCard
        title={"Rasd Presse News Site"}
        websiteType={"WordPress News Site"}
        devPeriod={"2 Days"}
        projectSummary={
          "Rasd Presse is a news site created using the Jannah theme. It offers comprehensive news coverage with a focus on readability and performance. The site incorporates various plugins to enhance functionality and user experience."
        }
        objective={
          "The objective was to develop a news platform that is user-friendly, SEO-optimized, and rich in features. The site is designed to provide up-to-date news with easy navigation and an appealing layout."
        }
        featureTitles={[
          "Responsive & Mobile-Friendly",
          "AdSense Integration",
          "Spam Protection",
          "Broken Link Checker",
          "Classic Editor Support",
          "Custom Permalinks",
          "Easy Table of Contents",
          "Watermark Images",
          "Inline Related Posts",
          "Jetpack Integration",
          "Performance Optimization",
          "Advanced SEO",
          "Backup & Restore",
          "Cache Optimization",
          "External Link Management"
        ]}
        featureDescriptions={[
          "The site adapts to various screen sizes and devices, ensuring a seamless user experience.",
          "Integrates with AdSense to optimize ad placements and revenue.",
          "Utilizes Akismet Anti-spam to protect against spam comments.",
          "Checks for broken links, particularly for YouTube content, enhancing SEO.",
          "Supports the Classic Editor for a traditional content editing experience.",
          "Allows custom permalinks for better URL structure and SEO.",
          "Includes an easy-to-use table of contents for long articles.",
          "Applies watermarks to images to protect content.",
          "Displays related posts inline to keep readers engaged.",
          "Leverages Jetpack for site management and performance improvements.",
          "Uses Perfmatters to optimize performance and loading times.",
          "Employs Rank Math SEO PRO for advanced search engine optimization.",
          "Backs up the site regularly with UpdraftPlus.",
          "Optimizes the database and caches content with WP-Optimize.",
          "Manages external links to enhance SEO and user experience."
        ]}
        image_1={"/images/rasd1.PNG"}
        image_2={"/images/rasd2.PNG"}
        image_3={"/images/rasd3.PNG"}
        image_4={"/images/rasd4.PNG"}
        image_5={"/images/rasd5.PNG"}
        image_6={"/images/rasd6.PNG"}
        image_7={"/images/rasd7.PNG"}
        resultDescription={
          "Rasd Presse effectively delivers news content with a robust and user-friendly design. The site excels in performance, SEO, and content management, making it a reliable source for news."
        }
        visitSiteUrl={"https://rasd-presse.com"}
      />
    </div>
  );
}

export default RasdPresseProject;
