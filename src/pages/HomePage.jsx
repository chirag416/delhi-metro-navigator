import React from 'react';

const HomePage = () => {
  return (
    <div className="h-full w-full bg-gray-100 flex flex-col justify-center items-center m-4 rounded-xl">
      <div className="text-center max-w-3xl">
        {/* Header Section */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          🚇<br/> Welcome <br />to <br /> the Delhi Metro Navigator App!
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Your one-stop solution to effortlessly navigate the Delhi Metro network.
        </p>

        {/* Key Features Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-secondary mb-4">✨ Key Features:</h2>
          <ul className="text-gray-600 text-md space-y-2 text-left md:text-center">
            <li>✅ Find the <strong>fastest routes</strong> between any two metro stations.</li>
            <li>✅ Explore our <strong>maps</strong> for better route visualization.</li>
            <li>✅ Calculate <strong>fare estimates</strong> for your journey with ease.</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-secondary mb-4">📞 Contact Me:</h2>
          <p className="text-gray-600 mb-4">
            Have queries, found a bug, or want to suggest improvements? Feel free to reach out!
          </p>
          
        </div>


      </div>
    </div>
  );
};

export default HomePage;
