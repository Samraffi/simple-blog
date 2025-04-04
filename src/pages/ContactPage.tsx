const ContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100/20 mt-12 p-6 relative overflow-hidden">
      <div className="absolute top-20 right-20 w-56 h-56 bg-gradient-to-br from-gray-700/10 to-teal-600/20 rounded-full blur-[70px]"></div>
      <div className="absolute bottom-20 left-20 w-64 h-24 bg-gradient-to-bl from-gray-800/10 to-cyan-700/20 rounded-full blur-[80px]"></div>

      <div className="w-full max-w-4xl p-8 rounded-2xl shadow-lg relative overflow-hidden backdrop-blur-sm bg-white/70">
        <h2 className="font-semibold mb-4 text-3xl text-center text-cyan-400">Contact Us</h2>
        <p className="text-center mb-6 text-gray-900">Any questions or remarks? Just write us a message!</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl backdrop-blur-sm border border-gray-700">
            <h3 className="text-xl font-semibold mb-3 text-cyan-400">Contact Information</h3>
            <p className="mb-2 text-gray-900">📧 contact@sanatcreatives.com</p>
            <p className="mb-2 text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3 text-white/80 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>123 Street Name, City, Country</span>
            </p>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="p-3 rounded-lg w-full placeholder-gray-400 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none transition-all border border-gray-900 hover:border-gray-600"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-3 rounded-lg w-full placeholder-gray-400 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none transition-all border border-gray-900 hover:border-gray-600"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded-lg w-full placeholder-gray-400 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none transition-all border border-gray-900 hover:border-gray-600"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="p-3 rounded-lg w-full placeholder-gray-400 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none transition-all border border-gray-900 hover:border-gray-600"
            />

            <div className="flex items-center gap-3 text-gray-900">
              <label className="flex items-center gap-2">
                <input type="radio" name="subject" className="form-radio" />
                General Inquiry
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="subject" className="form-radio" />
                UI/UX
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="subject" className="form-radio" />
                Brand Identity
              </label>
            </div>

            <div className="mt-2">
              <div>
                <label className="inline-flex items-center">
                  {/* <input type="checkbox" className="rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-gray-700 ring-offset-2 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500" /> */}
                  <input
  type="radio"
  name="default-radio"
  className="h-4 w-4 rounded bg-gray-200 border rounded-full border-gray-300 checked:bg-red-600 focus:ring-2 focus:ring-red-500 ring-offset-2"
/>
{/* <input
    type="radio"
    className="w-5 h-5 appearance-none text-red-600 bg-gray-100 border-gray-300 rounded-full checked:bg-red-600 focus:ring-red-500 focus:ring-2"
  /> */}

  

                  <span className="ml-2">Email me news and special offers</span>
                </label>
                
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="flex items-center me-4">
                <div className="flex items-center me-4">
                  {/* <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> */}
                  <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Red
                    <input id="red-radio" type="radio" value="" name="colored-radio" className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  </label>
                </div>
                {/* <input
                        defaultChecked
                        id="comments"
                        name="comments"
                        type="checkbox"
                        aria-describedby="comments-description"
                        className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                      /> */}
                <div className="flex items-center me-4">
                    <input id="red-radio" type="radio" value="" name="colored-radio" className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-2 focus:ring-red-500 dark:focus:ring-red-600 appearance-none checked:bg-red-600 dark:checked:bg-red-600" />
                    <label htmlFor="red-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Red</label>
                </div>
              </div>
            </div>
            {/* <div className="flex flex-wrap">
              <div className="flex items-center me-4">
                <div className="flex items-center me-4">
                  <input
                    id="red-radio"
                    type="radio"
                    name="colored-radio"
                    className="w-4 h-4 text-red-600 border-gray-300 focus:ring-2 focus:ring-red-500 dark:focus:ring-red-600 appearance-none checked:bg-red-600 dark:checked:bg-red-600"
                  />
                  <label htmlFor="red-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Red
                  </label>
                </div>
              </div>
            </div>
 */}

            <textarea
              placeholder="Write your message..."
              className="p-3 rounded-lg w-full h-24 placeholder-gray-400 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none transition-all border border-gray-700 hover:border-gray-600"
            />

            <button
              type="submit"
              className="w-full bg-cyan-600/90 hover:bg-cyan-500/90 text-white py-3 rounded-lg transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-cyan-500/10"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;