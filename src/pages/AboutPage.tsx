import Recommendations from "../components/Recommendations";

const AboutPage = () => {
  return (
    <div className="pt-4 bg-gray-50">
      {/* Hero Section */}
      <section className="pt-16 bg-white">
        <div className="container mx-auto flex flex-wrap items-center px-4 md:px-0">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <img className="md:max-h-xl mx-auto" loading="eager" data-pin-nopin="true" alt="Lindsay" width="475" height="600" src="https://delayfoto.ru/wp-content/uploads/2012/06/153447.jpg" />
          </div>
          <div className="w-full md:w-1/2 px-4 order-1 md:order-2">
            <nav aria-label="Breadcrumb" className="flex">
              <ol role="list" className="flex space-x-2">
                <li>
                  <div>
                    <a href="/" className="flex items-center text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5">
                        <path fill-rule="evenodd" d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z" clip-rule="evenodd"></path>
                      </svg>
                      <span className="ml-2">Home</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-gray-500">
                      <path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path>
                    </svg>
                    <span className="ml-2 text-gray-500">About</span>
                  </div>
                </li>
              </ol>
            </nav>
            <h1 className="mt-4 lg:mt-3 md:mt-0 font-domaine mb-6 text-4xl md:text-5xl lg:text-6xl text-cyan-600">About Me</h1>
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-600">Hi, my name is <span className="text-cyan-600">Sam!</span></h3>
            <p className="text-base md:text-lg mb-6 text-gray-700">Piece of Cake is where I share my passion for delicious flavors and culinary creativity!</p>
            <p className="text-base md:text-lg mb-6 text-gray-600">What started as a hobby in 2010 experimenting with recipes in my tiny kitchen has grown into a community that inspires millions of people to cook with joy. I love proving that delicious food doesn’t have to be complicated.</p>
            <p className="text-base md:text-lg mb-6 text-gray-600">I live in St. Paul, Minnesota with my wife, two curious kids, and a countertop perpetually covered in crumbs. I love farmers markets, kitchen gadgets, and lively family dinners where mismatched plates and laughter are always on the menu.</p>
            <p className="text-base md:text-lg mb-6 text-gray-600">My philosophy? Tradition meets innovation! I reimagine classics like fluffy gluten-free bread, vegan chocolate cake, or gochujang mac and cheese.</p>
            <p className="text-base md:text-lg mb-6 text-gray-600">But Piece of Cake is more than just recipes, it's a connection. Food is a universal language, and every dish tells a story. Let's grab a whisk, embrace the mess, and create something delicious together!</p>
          </div>
        </div>
      </section>

      {/* Flavor Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">I Live for Flavor!</h2>
            <p className="text-lg mb-6 text-gray-700">Here, I focus on creating dishes that are not only delicious but also fun to make. From savory main courses to delightful desserts, my mission is to help you enjoy every moment in the kitchen.</p>
            <div className="flex justify-between bg-gray-100 border-l-4 border-cyan-500 py-4 px-6 mb-6 ">
              <p className="text-gray-700 italic font-medium">"Inspiration exists, but it has to find you working"</p>
              <p className="text-gray-700 italic font-medium text-right">- Pablo Picasso</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond Kitchen Section */}
      <section className="py-16 bg-gray-100 bg-opacity-60">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Beyond the Kitchen</h2>
          <p className="text-lg mb-12 text-gray-700 text-center max-w-3xl mx-auto">I love sharing stories about my culinary journey, family moments, and my passion for all things food-related.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Culinary Adventures Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <img src="https://www.marincountyvisitor.com/wp-content/uploads/2024/11/Marin-County-Culinary-Adventures-1024x536.jpg" alt="Culinary Adventures" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-gray-800">Culinary Adventures</h3>
                <p className="text-gray-600 mb-4">From cooking classes to food festivals, join me on my culinary adventures around the world.</p>
                <a href="#" className="text-cyan-600 font-semibold hover:text-cyan-800 inline-flex items-center">
                  Explore adventures
                  <svg className="w-4 h-4 mt-1 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
              </div>
            </div>

            {/* Family Moments Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <img src="https://www.discoverpuertorico.com/sites/default/files/styles/horizontal_wide_1280x600/public/2019-06/annies-place-restaurant-cabo-rojo.jpg?h=4982dd8c&itok=yOB0TmIQ" alt="Family Moments" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-gray-800">Family Moments</h3>
                <p className="text-gray-600 mb-4">Sharing meals with family is one of my greatest joys. Here are some of our favorite moments.</p>
                <a href="#" className="text-cyan-600 font-semibold hover:text-cyan-800 inline-flex items-center">
                  Read more
                  <svg className="w-4 h-4 mt-1 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
              </div>
            </div>

            {/* Kitchen Gadgets Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <img src="https://www.eatthis.com/wp-content/uploads/sites/4/2022/09/Spiralizer-.jpg?quality=82&strip=1" alt="Kitchen Gadgets" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-gray-800">Kitchen Gadgets</h3>
                <p className="text-gray-600 mb-4">I love trying out new kitchen gadgets. Here are some of my reviews and favorite picks.</p>
                <a href="#" className="text-cyan-600 font-semibold hover:text-cyan-800 inline-flex items-center">
                  See gadgets
                  <svg className="w-4 h-4 mt-1 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
              </div>
            </div>

            {/* Market Finds Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <img src="https://www.boomermagazine.com/wp-content/uploads/2021/07/20210719qprse-steves-800.jpg" alt="Market Finds" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-gray-800">Market Finds</h3>
                <p className="text-gray-600 mb-4">Exploring local markets is one of my favorite activities. Discover some of my best finds.</p>
                <a href="#" className="text-cyan-600 font-semibold hover:text-cyan-800 inline-flex items-center">
                  Discover more
                  <svg className="w-4 h-4 mt-1 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
              </div>
            </div>

            {/* Cooking Classes Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <img src="https://www.nyctourism.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F1aemqu6a6t65%2F1Y00StOLNkMC7POQwawwkv%2Fa35838c737436fee88e545c7aa50a8b5%2FCozymeal-Cooking-Class-Manhattan-NYC-Photo-Courtesy-Cozymeal-2.jpg%3Fh%3D%26w%3D1200%26fit%3Dfill%26f%3Dcenter%26q%3D75%26fm%3Dwebp&w=3840&q=75" alt="Cooking Classes" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-gray-800">Cooking Classes</h3>
                <p className="text-gray-600 mb-4">Join me in my cooking classes where we explore new recipes and techniques together.</p>
                <a href="#" className="text-cyan-600 font-semibold hover:text-cyan-800 inline-flex items-center">
                  Join a class
                  <svg className="w-4 h-4 mt-1 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
              </div>
            </div>

            {/* Personal life */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-48 flex items-center justify-center">
                <img src="/Alone tourist in black waiting for morning sun in mountains.png" alt="Cooking Classes" className="w-full h-48 object-cover object-bottom" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-gray-800">Personal Life</h3>
                <p className="text-gray-600 mb-4">"Your body is not a temple, it's an amusement park. Enjoy the ride." - Anthony Bourdain</p>
                <a href="#" className="text-cyan-600 font-semibold hover:text-cyan-800 inline-flex items-center">
                  Join a class
                  <svg className="w-4 h-4 mt-1 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Recommendations />
    </div>
  );
};

export default AboutPage;