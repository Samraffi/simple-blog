import React, { useState } from 'react';
import { FaStar, FaRegStar, FaHeart, FaPrint, FaFacebook, FaPinterest, FaInstagram } from 'react-icons/fa';

const RecipePage = () => {
  const [rating, setRating] = useState(4.5);
  const [reviews, setReviews] = useState(1873);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-sans">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-gray-800 mb-2">The Best Soft Chocolate Chip Cookies</h1>

      {/* Rating Section */}
      <div className="flex items-center mb-4">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            i < Math.floor(rating) ?
              <FaStar key={i} className="text-yellow-500" /> :
              i < rating ?
                <div key={i} className="relative">
                  <FaStar className="text-yellow-500 absolute" style={{ clipPath: 'inset(0 50% 0 0)' }} />
                  <FaRegStar className="text-yellow-500" />
                </div> :
                <FaRegStar key={i} className="text-yellow-500" />
          ))}
        </div>
        <span className="ml-2 text-gray-700">{reviews} reviews / {rating} average</span>
      </div>

      {/* Description */}
      <p className="text-lg text-gray-700 mb-6">
        These are THE BEST soft chocolate chip cookies! No chilling required. Just ultra thick, soft, classic chocolate chip cookies!
      </p>

      {/* Jump to Recipe Button */}
      <div className="mb-8">
        <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition">
          Jump to Recipe
        </button>
      </div>

      {/* Main Image */}
      <div className="mb-8">
        <img
          src="https://www.kneadsomesweets.com/wp-content/uploads/2024/11/soft-chocolate-chip-cookies-6.jpg"
          alt="Soft Chocolate Chip Cookies on parchment"
          className="w-full h-auto rounded-lg shadow-md"
        />
        <p className="text-sm text-gray-500 mt-2 italic">Soft Chocolate Chip Cookies on parchment.</p>
      </div>

      {/* Post Content */}
      <div className="prose max-w-none mb-8">
        <p className="mb-4">
          These cookies are soft, thick, bricks of chocolate chunks and buttery dough baked into a heavy, milk-loving cookie that is my most favorite chocolate chip cookie of all time. ♡
        </p>
        <p className="mb-4">
          Wait, though. They are singing a love song to you: BAKE ME.
        </p>
        <p className="mb-4 font-bold text-center">
          BAKE ME IN YOUR OVEN RIGHT NOW.
        </p>
      </div>

      {/* Contents Section */}
      <div className="bg-gray-100 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-bold mb-4">In This Post: Everything You Need For Soft Chocolate Chip Cookies</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li className="text-blue-600 hover:underline cursor-pointer">VIDEO for How To Make The Best Soft Chocolate Chip Cookies</li>
          <li className="text-blue-600 hover:underline cursor-pointer">What Makes These Chocolate Chip Cookies The Best</li>
          <li className="text-blue-600 hover:underline cursor-pointer">Chocolate Chip Cookies: Frequently Asked Questions</li>
          <li className="text-blue-600 hover:underline cursor-pointer">Chocolate Chip Cookie Recipe Troubleshooting</li>
          <li className="text-blue-600 hover:underline cursor-pointer">Favorite Things To Make the Best Chocolate Chip Cookies</li>
          <li className="text-blue-600 hover:underline cursor-pointer">Prefer To Watch Instead Of Read?</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mb-8">
        <div className="w-full aspect-video">
          {/* <iframe width="688" height="387"
            src="https://www.youtube.com/embed/lJ7Ec3bKrxM"
            title="Рецепт лучшего мягкого американского печенья" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/lJ7Ec3bKrxM"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          >
          </iframe>

          <img
            src="https://via.placeholder.com/400x300"
            alt="Inside of Soft Chocolate Chip Cookies"
            className="w-full h-auto rounded-lg"
          />
          <p className="text-sm text-gray-500 mt-1">Inside of Soft Chocolate Chip Cookies.</p>
        </div>
        <div>
          <img
            src="https://via.placeholder.com/400x300"
            alt="Inside of Soft Chocolate Chip Cookies"
            className="w-full h-auto rounded-lg"
          />
          <p className="text-sm text-gray-500 mt-1">Inside of Soft Chocolate Chip Cookies.</p>
        </div>
        <div>
          <img
            src="https://via.placeholder.com/400x300"
            alt="Melted Butter for Soft Chocolate Chip Cookies"
            className="w-full h-auto rounded-lg"
          />
          <p className="text-sm text-gray-500 mt-1">Melted Butter for Soft Chocolate Chip Cookies.</p>
        </div>
        <div>
          <img
            src="https://via.placeholder.com/400x300"
            alt="Chocolate Chips for Soft Chocolate Chip Cookies"
            className="w-full h-auto rounded-lg"
          />
          <p className="text-sm text-gray-500 mt-1">Chocolate Chips for Soft Chocolate Chip Cookies.</p>
        </div>
      </div>

      {/* What Makes These Cookies Special Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">What Makes These Chocolate Chip Cookies The Best</h2>
        <p className="mb-4">
          So where were we? I think we were about to count the number of cookies I've eaten as I've refined this recipe, which is approximately $&@^!# (censored).
        </p>
        <p className="mb-4">
          I've always loved that old Perfect Chocolate Chip Cookie recipe, but I've always kind of been annoyed about it, too. Like why does it need to melt only half of the butter? Does it really not work to melt ALL of it? And why does it need the spoonful of brown sugar? Or does it? Sheesh, how annoying is the person who wrote that recipe anyway? *WOOPS*
        </p>
        <p className="mb-4">
          Now for the good news!
        </p>
        <p className="mb-4">
          I replicated the ULTRA THICK, ULTRA SOFT texture (it called for bold, right?) and maybe even improved the flavor with this version that is similar, but way easier and more sensible than the original.
        </p>
        <p className="mb-4">
          And by sensible, I mean… just… like, lazy sensible, okay? I don't mean THAT kind of sensible. You might need to start looking for another blog if you need your cookies to be sensible.
        </p>
        <p className="mb-4">
          There is nothing sensible about this beautiful sugar and butter perfection.
        </p>
      </div>

      {/* Recipe Card */}
      <div className="border border-gray-200 rounded-lg shadow-lg mb-12">
        <div className="bg-gray-100 p-6 rounded-t-lg">
          <h2 className="text-3xl font-bold mb-2">The Best Soft Chocolate Chip Cookies</h2>

          {/* Rating Stars */}
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="cursor-pointer">
                {i < Math.floor(rating) ?
                  <FaStar className="text-yellow-500 text-xl" /> :
                  <FaRegStar className="text-yellow-500 text-xl" />
                }
              </span>
            ))}
            <span className="ml-2 text-gray-700">4.5 from {reviews} reviews</span>
          </div>

          {/* Time and Actions */}
          <div className="flex flex-wrap justify-between items-center mb-4">
            <div>
              <p className="text-gray-700">Total Time: 20 minutes</p>
              <p className="text-gray-700">Yield: 12 cookies</p>
            </div>
            <div className="flex space-x-3">
              <button className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-md flex items-center">
                <FaPrint className="mr-1" /> Print
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md flex items-center">
                <FaHeart className="mr-1" /> Pin
              </button>
            </div>
          </div>

          <p className="text-gray-700 mb-4">
            These are THE BEST soft chocolate chip cookies! No chilling required. Just ultra thick, soft, classic chocolate chip cookies!
          </p>
        </div>

        {/* Ingredients and Instructions */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Ingredients */}
            <div>
              <h3 className="text-xl font-bold mb-4">Ingredients</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" />
                  <span>8 tablespoons of salted butter</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" />
                  <span>1/2 cup white sugar (I like to use raw cane sugar with a coarser texture)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" />
                  <span>1/4 cup packed light brown sugar</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" />
                  <span>1 teaspoon vanilla</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" />
                  <span>1 egg</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" />
                  <span>1 1/2 cups all purpose flour (6.75 ounces)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" />
                  <span>1/2 teaspoon baking soda</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" />
                  <span>1/4 teaspoon salt (but I always add a little extra)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" />
                  <span>3/4 cup chocolate chips (I use a combination of chocolate chips and chocolate chunks)</span>
                </li>
              </ul>
            </div>

            {/* Instructions */}
            <div>
              <h3 className="text-xl font-bold mb-4">Instructions</h3>
              <ol className="list-decimal pl-5 space-y-4">
                <li>
                  Preheat the oven to 350 degrees. Microwave the butter for about 40 seconds to just barely melt it. It shouldn't be hot – but it should be almost entirely in liquid form.
                </li>
                <li>
                  Using a stand mixer or electric beaters, beat the butter with the sugars until creamy. Add the vanilla and the egg; beat on low speed until just incorporated – 10-15 seconds or so (if you beat the egg for too long, the cookies will be stiff).
                </li>
                <li>
                  Add the flour, baking soda, and salt. Mix until crumbles form. Use your hands to press the crumbles together into a dough. It should form one large ball that is easy to handle (right at the stage between "wet" dough and "dry" dough). Add the chocolate chips and incorporate with your hands.
                </li>
                <li>
                  Roll the dough into 12 large balls (or 9 for HUGELY awesome cookies) and place on a cookie sheet. Bake for 9-11 minutes until the cookies look puffy and dry and just barely golden. Warning, friends: DO NOT OVERBAKE.
                </li>
                <li>
                  Let them cool on the pan for a good 30 minutes or so (I mean, okay, eat four or five but then let the rest of them cool). They will sink down and turn into these dense, buttery, soft cookies that are the best in all the land.
                </li>
              </ol>

              <div className="mt-6 text-gray-700">
                <p><strong>Notes:</strong> These should stay soft for many days if kept in an airtight container. I also like to freeze them.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Equipment Section */}
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <h3 className="text-xl font-bold mb-4">Equipment</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gray-200 rounded mr-3 flex items-center justify-center">
                <span className="text-gray-500 text-2xl">🥄</span>
              </div>
              <div>
                <p className="font-semibold">Cookie Spatula</p>
                <button className="text-blue-600 text-sm hover:underline">Buy Now →</button>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gray-200 rounded mr-3 flex items-center justify-center">
                <span className="text-gray-500 text-2xl">🍪</span>
              </div>
              <div>
                <p className="font-semibold">Nonstick Sheet Pan</p>
                <button className="text-blue-600 text-sm hover:underline">Buy Now →</button>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gray-200 rounded mr-3 flex items-center justify-center">
                <span className="text-gray-500 text-2xl">🥣</span>
              </div>
              <div>
                <p className="font-semibold">Mixing Bowl</p>
                <button className="text-blue-600 text-sm hover:underline">Buy Now →</button>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4">The equipment section may contain affiliate links to products we know and love.</p>
        </div>

        {/* Recipe Metadata */}
        <div className="p-6 border-t border-gray-200">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-700"><strong>Prep Time:</strong> 10 mins</p>
              <p className="text-gray-700"><strong>Cook Time:</strong> 10 mins</p>
            </div>
            <div>
              <p className="text-gray-700"><strong>Category:</strong> Dessert</p>
              <p className="text-gray-700"><strong>Method:</strong> Bake</p>
              <p className="text-gray-700"><strong>Cuisine:</strong> American</p>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold mb-2">Keywords:</h4>
            <div className="flex flex-wrap gap-2">
              {['chocolate chip cookies', 'best chocolate chip cookies', 'soft chocolate chip cookies', 'easy cookie recipe', 'small batch cookies'].map((keyword, index) => (
                <span key={index} className="bg-gray-200 px-2 py-1 rounded-md text-sm">{keyword}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6">Chocolate Chip Cookies: Frequently Asked Questions</h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-lg mb-2">Why did my cookies flatten?</h3>
            <p>
              The three most important things about this recipe are 1) Melting the butter, 2) Adding enough flour, and 3) Not baking for too long. If you find that the dough is wet and it REALLY sticks to your hands, you probably need more flour. I'll usually add a few tablespoons at a time to get it to the right consistency.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Why are my cookies so puffy?</h3>
            <p>
              This usually means that there's too much flour in the dough, keeping them from spreading more. Be sure to always measure your flour correctly (spooning it in to the measuring cup vs. scooping from the bag). Since you can always add more, it's important to not over-flour to start with.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Can I freeze chocolate chip cookie dough?</h3>
            <p>
              Yes! Roll them up into balls, freeze them on a sheet pan, and then keep them in a bag in the freezer until ready to bake. We'd recommend letting them thaw on a sheet pan (covered) before baking.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">How should I store the cookies after baking?</h3>
            <p>
              The cookies can be kept in an airtight container at room temperature for 3-4 days, or in the fridge for a week. We like the fridge method to keep them fresh!
            </p>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6">Comments</h2>

        <div className="space-y-6">
          <div className="border-b border-gray-200 pb-6">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <h4 className="font-bold">Sarah Johnson</h4>
                <p className="text-sm text-gray-500">January 15, 2025</p>
              </div>
            </div>
            <p className="mb-4">
              These cookies are AMAZING! I've made them three times already and they disappear within hours every time. The tip about not overmixing the egg really made a difference in the texture.
            </p>
            <div className="flex gap-4">
              <button className="text-blue-600 hover:underline text-sm">Reply</button>
              <button className="text-blue-600 hover:underline text-sm">Like</button>
            </div>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <h4 className="font-bold">Mike Thompson</h4>
                <p className="text-sm text-gray-500">January 10, 2025</p>
              </div>
            </div>
            <p className="mb-4">
              I added a little extra salt like you suggested and WOW what a difference! The sweet and salty combo is perfect. These are definitely going in my regular rotation.
            </p>
            <div className="flex gap-4">
              <button className="text-blue-600 hover:underline text-sm">Reply</button>
              <button className="text-blue-600 hover:underline text-sm">Like</button>
            </div>
          </div>

          <div>
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <h4 className="font-bold">Emma Wilson</h4>
                <p className="text-sm text-gray-500">January 5, 2025</p>
              </div>
            </div>
            <p className="mb-4">
              Question - can I use unsalted butter and just add more salt? That's all I have on hand right now and I'm desperate to make these!
            </p>
            <div className="flex gap-4">
              <button className="text-blue-600 hover:underline text-sm">Reply</button>
              <button className="text-blue-600 hover:underline text-sm">Like</button>
            </div>

            {/* Reply to comment */}
            <div className="ml-16 mt-4 bg-gray-50 p-4 rounded-lg">
              <div className="flex items-start mb-2">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <h4 className="font-bold">Lindsay (Author)</h4>
                  <p className="text-sm text-gray-500">January 5, 2025</p>
                </div>
              </div>
              <p>
                Hi Emma! Yes, you can absolutely use unsalted butter. Just add an extra 1/4 teaspoon of salt to the recipe and they'll turn out great!
              </p>
            </div>
          </div>
        </div>

        {/* Comment Form */}
        <div className="mt-8 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Leave a Comment</h3>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">Name *</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">Email * (will not be published)</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="comment" className="block text-gray-700 mb-1">Comment *</label>
              <textarea
                id="comment"
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
              Post Comment
            </button>
          </form>
        </div>
      </div>

      {/* Related Posts */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6">Other Favorite Chocolate Recipes:</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            "Deep Dish Cookie Bowls For Two",
            "Peanut Butter Chocolate Chip Cookie Cheesecake Bars",
            "Salted Caramel Brownies",
            "Blackout Chocolate Cake",
            "The Best Easy Peanut Butter Pie"
          ].map((title, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
              <div className="h-40 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-bold text-lg hover:text-blue-600 transition">{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 pt-8 mt-10">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full mb-4"></div>
          <h3 className="text-xl font-bold mb-2">Nice to meet you!</h3>
          <p className="max-w-md mb-4">
            I'm Lindsay and I ♡ FOOD. I used to be a teacher, and now making food and writing about it online is my full-time job. I love talking with people about food, and I'm so glad you're here.
          </p>
          <div className="flex space-x-4 mb-6">
            <a href="#" className="text-gray-600 hover:text-blue-600"><FaFacebook size={24} /></a>
            <a href="#" className="text-gray-600 hover:text-pink-600"><FaInstagram size={24} /></a>
            <a href="#" className="text-gray-600 hover:text-red-600"><FaPinterest size={24} /></a>
          </div>
          <p className="text-sm text-gray-500">
            © 2025 Pinch of Yum. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default RecipePage;