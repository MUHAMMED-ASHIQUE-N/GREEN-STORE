import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'


    const FeatureSection = ({ icon, title, description }) => (
        <div className="md:w-1/3 flex items-center flex-col md:flex-row gap-3">
          <div className="bg-[#5c9735] flex items-center justify-center w-12 h-12 rounded-full">
            <FontAwesomeIcon icon={icon} className="text-lg text-white" />
          </div>
          <div className="text-center md:text-left">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div >
      );
 export default FeatureSection