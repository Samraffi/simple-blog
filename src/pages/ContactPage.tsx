import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useContactForm } from '../hooks/form/useContactForm';
import { contactValidationSchema } from '../constants/validation';
import RadioGroup from '../components/forms/RadioGroup';

const ContactPage = () => {
  const { handleSubmit, initialValues } = useContactForm();

  const subjectOptions = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'uiux', label: 'UI/UX' },
    { value: 'brand', label: 'Brand Identity' }
  ];

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

          <Formik
            initialValues={initialValues}
            validationSchema={contactValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Field
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      className="p-3 rounded-lg w-full placeholder-gray-400 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none transition-all border border-gray-900 hover:border-gray-600"
                    />
                    <ErrorMessage name="firstName" component="div" className="mt-1 text-sm text-red-500" />
                  </div>
                  <div>
                    <Field
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      className="p-3 rounded-lg w-full placeholder-gray-400 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none transition-all border border-gray-900 hover:border-gray-600"
                    />
                    <ErrorMessage name="lastName" component="div" className="mt-1 text-sm text-red-500" />
                  </div>
                </div>

                <div>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="p-3 rounded-lg w-full placeholder-gray-400 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none transition-all border border-gray-900 hover:border-gray-600"
                  />
                  <ErrorMessage name="email" component="div" className="mt-1 text-sm text-red-500" />
                </div>

                <div>
                  <Field
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="p-3 rounded-lg w-full placeholder-gray-400 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none transition-all border border-gray-900 hover:border-gray-600"
                  />
                  <ErrorMessage name="phone" component="div" className="mt-1 text-sm text-red-500" />
                </div>

                <RadioGroup 
                  name="subject"
                  options={subjectOptions}
                  required
                />

                <div>
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Write your message..."
                    className="p-3 rounded-lg w-full h-24 placeholder-gray-400 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none transition-all border border-gray-700 hover:border-gray-600"
                  />
                  <ErrorMessage name="message" component="div" className="mt-1 text-sm text-red-500" />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-cyan-600/90 hover:bg-cyan-500/90 text-white py-3 rounded-lg transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-cyan-500/10 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
