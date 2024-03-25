import React from 'react';

const About = ({darkMode}) => {
  return (
    <section id="about" className={`${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">About</h2>
          <div className={`${darkMode ? 'text-gray-400': 'text-gray-500'}`}>
            <p className="mb-4 font-light">
                Carpooling, also known as car-sharing or ride-sharing, is a transportation arrangement where multiple individuals travel together in the same vehicle. It's a sustainable and cost-effective way to commute, as it reduces traffic congestion, lowers fuel consumption, and decreases carbon emissions.
                By sharing rides, commuters can split the cost of fuel and tolls, making it more economical compared to driving alone. Carpooling also promotes social interaction and networking opportunities among passengers, as they spend time together during the commute.          </p>
            <p className="mb-4 font-medium">
                RideLink is such a webapp that enable you to find a passenger/ a driver on the way to the office.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
