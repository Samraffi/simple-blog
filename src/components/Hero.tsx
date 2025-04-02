import ChevronRightIcon from "./Icons/ChevronRightIcon";
import HomeIcon from "./Icons/HomeIcon";

const Hero = () => {
  return (
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
                    <HomeIcon />
                    <span className="ml-2">Home</span>
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRightIcon />
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
  );
};

export default Hero;