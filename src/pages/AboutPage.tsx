import BeyondTheKitchen from "../components/BeyondTheKitchen";
import Hero from "../components/Hero";
import Recommendations from "../components/Recommendations";

const AboutPage = () => {
  return (
    <div className="pt-4 bg-gray-50">
      <Hero />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">I'm foodie!</h2>
            <p className="text-lg mb-6 text-gray-700">Here, I focus on creating dishes that are not only delicious but also fun to make. From savory main courses to delightful desserts, my mission is to help you enjoy every moment in the kitchen.</p>
            <div className="flex justify-between bg-gray-100 border-l-4 border-cyan-500 py-4 px-6 mb-6 ">
              <p className="text-gray-700 italic font-medium">"Inspiration exists, but it has to find you working"</p>
              <p className="text-gray-700 italic font-medium text-right">- Pablo Picasso</p>
            </div>
          </div>
        </div>
      </section>

      <BeyondTheKitchen />
      <Recommendations />
    </div>
  );
};

export default AboutPage;