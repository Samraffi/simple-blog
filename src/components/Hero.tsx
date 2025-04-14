import { DESCRIPTION_OF_PIECE_OF_CAKE } from "../constants/about";

const Hero = () => {
  return (
    <section className="container mx-auto flex flex-wrap items-center px-4 md:px-0">
      <div className="w-full md:w-1/2 order-2 md:order-1">
        <img className="md:max-h-xl mx-auto" loading="eager" data-pin-nopin="true" alt="Lindsay" width="475" height="600" src="https://delayfoto.ru/wp-content/uploads/2012/06/153447.jpg" />
      </div>
      <div className="w-full md:w-1/2 px-4 order-1 md:order-2">
        <h1 className="md:mt-0 font-domaine mb-6 text-4xl md:text-5xl lg:text-6xl text-cyan-600">About Me</h1>
        <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-600">Hi, my name is <span className="text-cyan-600">Sam!</span></h3>
        {DESCRIPTION_OF_PIECE_OF_CAKE.map((paragraph, index) => (
          <p
            key={index}
            className="text-base md:text-lg mb-6 text-gray-700"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Hero;
