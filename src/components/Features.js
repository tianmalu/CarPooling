import React from 'react';

const Service = ({darkMode}) => {
  return (
    <section id='service' className={`${darkMode ? 'bg-gray-900' : "bg-white"}` }>
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div className="max-w-screen-md mb-8 lg:mb-16 mx-auto flex flex-col items-center">
        <h2 className={`mb-4 text-4xl tracking-tight font-extrabold ${darkMode ? 'text-white': 'text-gray-900'}`}>Our Service</h2>
        <p className="text-gray-500 sm:text-xl dark:text-gray-400 text-center">
            Here you can find RideLink's main services.
        </p>
      </div>

        <div className={`space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 ${darkMode ? 'text-white': 'text-gray-900'}`}>
          <FeatureCard
            title="Share Your Car Ride"
            description="Share your commute plans and find colleagues to carpool with. Collaborate seamlessly with your team and streamline your daily commute for a more efficient and sustainable journey to the office."
          />
          <FeatureCard
            title="Book A Car Ride"
            description="Reserve a carpooling ride to the office, ensuring energy conservation while expanding your professional network. Our tailored workflows and customizable permissions provide a secure and compliant journey tailored specifically for your needs."
          />
          <FeatureCard
            title="Ask For A Ride"
            description="Have a planned routine but do not have a car? Don't worry! Post your plan here and maybe you can find a driver partner."
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ title, description }) => {
    return (
      <div>
        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20">
            <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z"/>
          </svg>
        </div>
        <h3 className="mb-2 text-xl font-bold dark:text-white">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    );
  }
  

export default Service;
