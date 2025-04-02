const BeyondTheKitchen = () => {
  return (
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
  );
};

export default BeyondTheKitchen;