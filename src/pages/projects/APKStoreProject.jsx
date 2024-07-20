import React from "react";
import ProjectDetailsCard from "@/components/Cards/ProjectDetailsCard";

function APKStoreProject() {
  // Inline styles for custom button
  const customButtonStyles = {
    display: 'inline-block',
    padding: '12px 24px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#28a745', // Green color
    border: 'none',
    borderRadius: '5px',
    textAlign: 'center',
    textDecoration: 'none',
    marginTop: '20px'
  };

  const customButtonHoverStyles = {
    backgroundColor: '#218838' // Darker green color for hover effect
  };

  // CSS to hide the GitHub button and style the custom button
  const customStyles = `
    .github-button {
      display: none;
    }
    .custom-visit-button {
      display: inline-block;
      padding: 12px 24px;
      font-size: 16px;
      color: #fff;
      background-color: #28a745; /* Green color */
      border: none;
      border-radius: 5px;
      text-align: center;
      text-decoration: none;
      margin-top: 20px;
    }
    .custom-visit-button:hover {
      background-color: #218838; /* Darker green color for hover effect */
    }
  `;

  return (
    <div className="w-full min-h-screen">
      <style>{customStyles}</style>
      <ProjectDetailsCard
        title={"APK Store WordPress Site"}
        websiteType={"WordPress Site"}
        devPeriod={"5 days"}
        projectSummary={
          "The APK Store is a WordPress site designed for downloading Android APKs, using the 5Play WordPress Theme. It focuses on fast loading, SEO, and easy APK management with automatic content generation and a responsive design."
        }
        objective={
          "The objective was to create a highly functional APK download site with an emphasis on speed, ease of use, and effective SEO. The site features automatic post generation, SEO optimization, and a mobile-friendly design."
        }
        featureTitles={[
          "Responsive & Mobile-Friendly",
          "Automatic Content Generation",
          "SEO Friendly",
          "Fast Loading",
          "Adsense Ready",
          "Social Share Buttons",
          "Recent Posts Widget",
          "Smart Download Timing",
          "Automatic Category Management",
          "Page Download",
          "RTL Mode",
          "Dark Mode"
        ]}
        featureDescriptions={[
          "The site design adjusts seamlessly to various screen sizes and devices.",
          "Supports both automatic and manual post creation for APKs.",
          "Optimized for search engines to enhance visibility.",
          "Quick page load times with minimized rendering delays.",
          "Ready for Adsense integration and other advertising methods.",
          "Includes social media sharing options for posts.",
          "Displays recent posts to keep content up-to-date.",
          "Prevents other sites from using your download links.",
          "Automatically creates and assigns categories for posts.",
          "Special page for download links with advertising potential.",
          "Supports RTL (Right-to-Left) language layouts.",
          "Offers a dark mode for user interface customization."
        ]}
        image_1={"/images/s1.PNG"}
        image_2={"/images/s2.PNG"}
        image_3={"/images/s3.PNG"}
        image_4={"/images/s4.PNG"}
        image_5={"/images/s5.PNG"}
        resultDescription={
          "The APK Store WordPress site effectively supports APK downloads with a robust, user-friendly design. The site excels in performance, SEO, and ease of content management, making it a powerful tool for APK distribution."
        }
      <div className="text-center">
        <a
          href="https://traidmod.com"
          className="custom-visit-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit the Site
        </a>
      </div>
      />

    </div>
  );
}

export default APKStoreProject;
