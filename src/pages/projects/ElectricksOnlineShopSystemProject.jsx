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
          "Electricks Online Shop System is a robust eCommerce platform designed to provide shops or stores with an online presence where customers can browse and order products. The system supports two types of users: administrators and customers/guests. Administrators manage the product list and stocks, while customers can browse products, manage their shopping cart, and place orders."
        }
        objective={
          "The objective of this project was to create a functional and user-friendly eCommerce website that allows administrators to manage products and stocks efficiently, and customers to browse and order products easily. The project was developed for presentation at Southern Luzon State University - Lucban."
        }
        featureTitles={[
          "Admin Side Features",
          "Customer Side Features",
          "Technology Stack",
          "Setup Instructions",
          "System Requirements",
          "User Management",
          "Order Management",
          "Customization Options"
        ]}
        featureDescriptions={[
          "Manage Suppliers: Admins can add, edit, and remove suppliers to keep track of where products are sourced from. Manage Products: Admins can add new products, update product details, and remove products that are no longer available. Manage Stocks: Admins can monitor and update product stock levels to ensure availability. Manage Users: Admins can add, edit, and remove users with different roles and permissions. Manage System Administrator: Admins can add other administrators to help manage the site.",
          "Login/Logout: Customers can create accounts and log in to access personalized features. Browse Products: Customers can explore the wide range of products available in the store. Search Product: Customers can use the search functionality to find specific products quickly. Add Product to Shopping Cart: Customers can add products to their shopping cart for later purchase. Manage Shopping Cart: Customers can view and manage the items in their shopping cart. Place Order: Customers can place orders and choose their preferred payment method.",
          "Developed using PHP/Mysqli for server-side scripting. MySQL Database for data storage and management. HTML, CSS, and Bootstrap for responsive and visually appealing design. Javascript (jQuery and Ajax) for interactive and dynamic features.",
          "Open your XAMPP/WAMP's Control Panel and start the 'Apache' and 'MySQL'. Extract the downloaded source code file. If you are using XAMPP, copy the extracted source code folder and paste it into the XAMPP's 'htdocs' directory. And If you are using WAMP, paste it into the 'www' directory. Browse the PHPMyAdmin in a browser. i.e. http://localhost/phpmyadmin. Create a new database naming 'electricks'. Import the provided SQL file. The file is known as 'electricks.sql' located inside the extracted source code folder. Browse the Electricks Online Shop System in a browser. i.e. http://localhost/Electricks/Electricks-shop/ for the website and http://localhost/Electricks/Electricks-shop/pages/admin_login_page.php for the admin side.",
          "Download and Install any local web server such as XAMPP/WAMP. Make sure your server supports PHP and MySQL.",
          "Admins can manage different types of users including customers and other administrators. Each user role has specific permissions.",
          "The system provides comprehensive order management features including order tracking, updating order status, and managing payment details.",
          "The source code is modular and well-documented, making it easy to customize the system to meet specific business needs. Users can modify the source code to add new features or change existing functionalities."
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
