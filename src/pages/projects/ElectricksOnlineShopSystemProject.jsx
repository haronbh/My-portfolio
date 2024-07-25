import React from "react";
import ProjectDetailsCard from "@/components/Cards/ProjectDetailsCard";

function ElectricksOnlineShopSystemProject() {
  return (
    <div className="w-full min-h-screen">
      <ProjectDetailsCard
        title={"Electricks Online Shop System"}
        websiteType={"eCommerce Website"}
        devPeriod={"Developed as part of a university project"}
        projectSummary={
          "Electricks Online Shop System is an eCommerce platform designed to provide shops or stores with an online presence where customers can browse and order products. The system supports two types of users: administrators and customers/guests. Administrators manage the product list and stocks, while customers can browse products, manage their shopping cart, and place orders."
        }
        objective={
          "The objective of this project was to create a functional and user-friendly eCommerce website that allows administrators to manage products and stocks efficiently, and customers to browse and order products easily. The project was developed for presentation at Southern Luzon State University - Lucban."
        }
        featureTitles={[
          "Admin Side Features",
          "Customer Side Features",
          "Technology Stack"
        ]}
        featureDescriptions={[
          "Manage Suppliers, Manage Products, Manage Stocks, Manage Users, Manage System Administrator.",
          "Login/Logout, Browse Products, Search Product, Add Product to Shopping Cart, Manage Shopping Cart, Place Order.",
          "Developed using PHP/Mysqli, MySQL Database, HTML, CSS, Javascript (jQuery and Ajax), and Bootstrap."
        ]}
        image_1={"/images/k1.PNG"}
        image_2={"/images/k2.PNG"}
        image_3={"/images/k3.PNG"}
        image_4={"/images/k4.PNG"}
        image_5={"/images/k5.PNG"}
        image_6={"/images/k6.PNG"}
        image_7={"/images/k7.PNG"}
        image_8={"/images/k8.PNG"}
        image_9={"/images/k9.PNG"}
        resultDescription={
          "The Electricks Online Shop System successfully provides an online platform for shops and customers, facilitating efficient product management and a seamless shopping experience. The system is robust, user-friendly, and fully functional, with features that meet the needs of both administrators and customers."
        }
        githubUrl={"https://github.com/your-repo/electricks-online-shop-system"}
      />
    </div>
  );
}

export default ElectricksOnlineShopSystemProject;
