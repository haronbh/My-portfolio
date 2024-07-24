import React from "react";
import ProjectDetailsCard from "@/components/Cards/ProjectDetailsCard";

function SMMTargetProject() {
  return (
    <div className="w-full min-h-screen">
      <ProjectDetailsCard
        title={"SMMTarget Social Media Services Site"}
        websiteType={"Service Reselling Site"}
        devPeriod={"5 Days"}
        projectSummary={
          "SMMTarget is a service reselling site based on Socpanel.com, offering social media followers and likes services. It features a comprehensive set of tools for managing promotions, integrations, and user accounts."
        }
        objective={
          "The objective was to create a platform where users can easily purchase social media engagement services using promo codes, PayPal, and Visa cards. The site automates order processing, allowing the site owner to focus on customer acquisition and satisfaction."
        }
        featureTitles={[
          "Promo Codes",
          "Child Panel",
          "Drip Feed",
          "Integrations",
          "SSL Certificates",
          "Powerful Server",
          "Regular Management",
          "Ultra Fast",
          "Cool Functions",
          "Hot Design",
          "Ecosystem"
        ]}
        featureDescriptions={[
          "Create promo codes to attract new users or retain old ones.",
          "Sell your panel franchise to your customers and make money.",
          "Raise social engagement at the desired speed.",
          "A bunch of integrations to fit in your panel development team and designers.",
          "Includes SSL certificates for secure transactions.",
          "Runs on a powerful server to handle high traffic and orders.",
          "Managed regularly to ensure smooth operations.",
          "Ultra-fast loading speed and order synchronization.",
          "Updates every month with new features.",
          "Exceptional design quality that stands out.",
          "Market transparency with a top list of best providers and services."
        ]}
        image_1={"/images/smm1.PNG"}
        image_2={"/images/smm2.PNG"}
        image_3={"/images/smm3.PNG"}
        image_4={"/images/smm4.PNG"}
        image_5={"/images/smm5.PNG"}

        resultDescription={
          "SMMTarget successfully resells social media engagement services with an automated system for handling orders. The platform is secure, fast, and feature-rich, providing a seamless experience for users."
        }
        visitSiteUrl={"https://smmtarget.net"}
      />
    </div>
  );
}

export default SMMTargetProject;
