const AboutPage = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <img 
              src="https://images.unsplash.com/photo-1601979031925-424e53b6caaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Samvel grilling outdoors" 
              className="rounded-lg shadow-xl w-full object-cover h-96"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">About Me</h2>
            <h3 className="text-2xl font-semibold mb-6 text-cyan-600">Hi, I'm Samvel!</h3>
            <p className="text-lg mb-6 text-gray-700">And Pinch of Yum is where I share my passion for bold flavors and outdoor-inspired cooking!</p>
            <p className="mb-6 text-gray-600">I'm the creator behind Pinch of Yum. What started as a side hustle in 2010 while I was coaching high school basketball has exploded into a thriving business (!!) that inspires millions with hearty, no-nonsense recipes. My work's been featured on Men's Health, BBQ Pitmasters, CNN, The Everyman, POPSUGAR, and even Joe Rogan's podcast (wild, right?).</p>
            <p className="mb-6 text-gray-600">I live in Saint Paul, MN, with my wife Lena and our German Shepherd, Thor. When I'm not in the kitchen, you'll find me grilling in the backyard, hitting the trails with Thor, or obsessing over my smoker.</p>
          </div>
        </div>
      </section>

      {/* Flavor Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">I Live for Flavor!</h2>
            <p className="text-lg mb-6 text-gray-700">Here, I focus on big, bold dishes—think smoky meats, fiery sauces, and comfort food with a twist. If it doesn't make you wanna fist-bump the air, it's not going on the blog. My mission? To help you cook like a pro, whether you're feeding your crew on game day or impressing your partner on date night.</p>
            <div className="bg-gray-100 border-l-4 border-cyan-500 p-6 mb-6">
              <p className="text-gray-700 italic font-medium">Pro tip: Tag @pinchofyum in your grilling masterpieces or campfire cooking. I'll feature the most epic posts in my "Weekend Warrior" IG series!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond Kitchen Section */}
      <section className="py-16 bg-gray-100 bg-opacity-60">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Beyond the Kitchen</h2>
          <p className="text-lg mb-12 text-gray-700 text-center max-w-3xl mx-auto">I keep it real here—sharing stories about fatherhood, loss, and my obsession with all things outdoors.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Adventure Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <img src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Adventure Cooking" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-gray-800">Adventure Cooking</h3>
                <p className="text-gray-600 mb-4">From campfire paella in the Rockies to fishing trips in Alaska. Check my wilderness recipes here.</p>
                <a href="#" className="text-cyan-600 font-semibold hover:text-cyan-800 inline-flex items-center">
                  Explore recipes
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>
            
            {/* Loss Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <img src="https://images.unsplash.com/photo-1516410529446-2c777cb7366d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Grief and Loss" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-gray-800">Loss</h3>
                <p className="text-gray-600 mb-4">In 2017, Lena and I lost our son Afton shortly after birth. Writing about grief helped me connect with readers worldwide.</p>
                <a href="#" className="text-cyan-600 font-semibold hover:text-cyan-800 inline-flex items-center">
                  Read his story
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>
            
            {/* Dad Life Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <img src="https://images.unsplash.com/photo-1500045592305-049e26e4c8f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Dad Life" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-gray-800">Dad Life</h3>
                <p className="text-gray-600 mb-4">Our daughter Sasha was born in 2018. I've shared raw, unfiltered takes on balancing parenthood and passion here.</p>
                <a href="#" className="text-cyan-600 font-semibold hover:text-cyan-800 inline-flex items-center">
                  Read more
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>
            
            {/* Man Cave Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <img src="https://images.unsplash.com/photo-1579329974377-10c2d3458e44?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Man Cave Upgrades" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-gray-800">Man Cave Upgrades</h3>
                <p className="text-gray-600 mb-4">Converted my garage into a DIY smokehouse + built a fire pit for late-night whiskey sessions.</p>
                <a href="#" className="text-cyan-600 font-semibold hover:text-cyan-800 inline-flex items-center">
                  Peek the projects
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>
            
            {/* Thor Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <img src="https://images.unsplash.com/photo-1551717743-49959800b1f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Thor the German Shepherd" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-gray-800">Thor</h3>
                <p className="text-gray-600 mb-4">My 100-pound "sous chef" who's trained to fetch spatulas. Watch him in action here.</p>
                <a href="#" className="text-cyan-600 font-semibold hover:text-cyan-800 inline-flex items-center">
                  Watch video
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>
            
            {/* Instagram Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-48 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-gray-800">Personal Instagram</h3>
                <p className="text-gray-600 mb-4">For unfiltered snaps of BBQ fails and dad jokes, follow my personal IG @samvelgrillmaster.</p>
                <a href="#" className="text-cyan-600 font-semibold hover:text-cyan-800 inline-flex items-center">
                  Follow me
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 text-center">The Crew</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Samvel */}
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1492447273231-0f8fecec1e3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Samvel" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-gray-800">Samvel</h3>
              <p className="text-gray-600">Grill philosopher, recipe mad scientist, and Thor's favorite human.</p>
            </div>
            
            {/* Lena */}
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Lena" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-gray-800">Lena</h3>
              <p className="text-gray-600">Tech guru, spreadsheet queen, and master of monetization.</p>
            </div>
            
            {/* Dmitry */}
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Dmitry" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-gray-800">Dmitry</h3>
              <p className="text-gray-600">Customer service ninja. He'll fix your ebook issues in 5 minutes flat.</p>
            </div>
            
            {/* Ivan */}
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Ivan" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-gray-800">Ivan</h3>
              <p className="text-gray-600">Videographer + smoke ring enthusiast. Films all my BBQ tutorials.</p>
            </div>
            
            {/* Thor */}
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1589941013454-ec7d8f92b4d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Thor" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-gray-800">Thor</h3>
              <p className="text-gray-600">Security, taste-tester, and occasional blog post model.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;