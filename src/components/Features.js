import React from 'react';

const BusinessFeatures = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div className="max-w-screen-md mb-8 lg:mb-16 mx-auto flex flex-col items-center">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Designed for business teams like yours</h2>
        <p className="text-gray-500 sm:text-xl dark:text-gray-400 text-center">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
    </div>

        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <FeatureCard
            title="Marketing"
            description="Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan."
          />
          <FeatureCard
            title="Legal"
            description="Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you."
          />
          <FeatureCard
            title="Business Automation"
            description="Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started."
          />
          <FeatureCard
            title="Finance"
            description="Audit-proof software built for critical financial operations like month-end close and quarterly budgeting."
          />
          <FeatureCard
            title="Enterprise Design"
            description="Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration."
          />
          <FeatureCard
            title="Operations"
            description="Keep your company’s lights on with customizable, iterative, and structured workflows built for all efficient teams and individual."
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
        <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          {/* SVG Path */}
        </svg>
      </div>
      <h3 className="mb-2 text-xl font-bold dark:text-white">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  );
};

export default BusinessFeatures;
