import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
        Our algorithm analyzes your symptoms and provides accurate recommendations, ensuring you receive the most suitable medicine options.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Symptoms"
          description="Our application offers a seamless experience for users to input their symptoms, facilitating easy access to relevant medical information. By simply entering your symptoms in the search bar, you can explore a comprehensive list of associated conditions. With personalized recommendations based on the symptoms you provide, you can navigate through the vast array of medical information with confidence and clarity"
          icon={faTruckMedical}
        />

        <InformationCard
          title="Get suggestions"
          description="Discovering the right healthcare products has never been easier with our application's tailored suggestions feature. Our platform provides personalized recommendations, ensuring that you find products aligned with your specific needs and preferences. From vitamins to holistic wellness solutions, our curated selection aims to empower users in making informed decisions about their health and well-being."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Order them"
          description="Streamline your pharmacy shopping experience by effortlessly adding medicines to your virtual cart. Once you've found the products you need, simply click the Add to Cart button to include them in your order. Enjoy the convenience of online shopping with our pharmacy management application, designed to simplify your healthcare needs."
          icon={faTooth}
        />
      </div>
    </div>
  );
}

export default Info;
