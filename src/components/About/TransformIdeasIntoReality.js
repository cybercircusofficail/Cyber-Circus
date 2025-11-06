"use client";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

const TransformIdeasIntoReality = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 text-gray-800 dark:text-gray-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Fade cascade damping={0.1} triggerOnce>
            <h3 className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">
              Your Vision. Our Expertise.
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-900 dark:from-blue-500 dark:to-indigo-400">
              Transforming Business Vision into Enterprise Software Solutions
            </h2>
            <p className="max-w-2xl mx-auto text-lg">
              We partner with leading enterprises to build innovative software solutions that drive digital transformation, accelerate growth, and create sustainable competitive advantages.
            </p>
          </Fade>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <Fade cascade damping={0.1} triggerOnce>
            <div className="rounded-xl p-6 transition-all duration-300 bg-white dark:bg-gray-800 hover:shadow-xl dark:hover:bg-gray-700 shadow-lg">
              <div className="mb-4 bg-indigo-100 dark:bg-indigo-900/50 w-12 h-12 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-indigo-600 dark:text-indigo-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Engineering Excellence
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                We build enterprise-grade, scalable software solutions using modern technologies and industry best practices. Our engineering teams deliver robust, maintainable systems that drive long-term business value.
              </p>
            </div>
            <div className="rounded-xl p-6 transition-all duration-300 bg-white dark:bg-gray-800 hover:shadow-xl shadow-lg dark:hover:bg-gray-700">
              <div className="mb-4 bg-indigo-100 dark:bg-indigo-900/50 w-12 h-12 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-indigo-600 dark:text-indigo-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Agile Development</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                We follow agile methodologies that enable rapid iteration, continuous delivery, and seamless adaptation to evolving business requirements. Our flexible approach ensures timely delivery without compromising quality.
              </p>
            </div>
            <div className="rounded-xl p-6 transition-all duration-300 bg-white dark:bg-gray-800 hover:shadow-xl shadow-lg dark:hover:bg-gray-700">
              <div className="mb-4 bg-indigo-100 dark:bg-indigo-900/50 w-12 h-12 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-indigo-600 dark:text-indigo-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation Focus</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                We continuously explore emerging technologies and innovative approaches to deliver cutting-edge solutions. Our commitment to innovation helps businesses stay ahead of market trends and gain competitive advantages.
              </p>
            </div>
            <div className="rounded-xl p-6 transition-all duration-300 bg-white dark:bg-gray-800 hover:shadow-xl shadow-lg dark:hover:bg-gray-700">
              <div className="mb-4 bg-indigo-100 dark:bg-indigo-900/50 w-12 h-12 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-indigo-600 dark:text-indigo-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Strategic Partnerships</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                We build lasting partnerships with our clients, working as an extension of your team. Our collaborative approach ensures alignment with business objectives and delivers solutions that drive measurable results.
              </p>
            </div>
          </Fade>
        </motion.div>
        <Fade cascade damping={0.1} triggerOnce>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-900 dark:from-blue-500 dark:to-indigo-400">
                Our Commitment to Excellence
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                At Cyber Circus, we believe exceptional software solutions require more than technical expertise—they demand deep business understanding, strategic thinking, and a commitment to delivering measurable value.
              </p>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                Our team of dedicated engineering professionals works tirelessly to deliver enterprise-grade solutions that not only meet your requirements but exceed expectations and drive long-term business success.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-900 dark:from-blue-500 dark:to-indigo-400">
                Why Choose Us
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-600 dark:bg-indigo-600"></div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Transparent communication and strategic collaboration throughout the development lifecycle
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-600 dark:bg-indigo-600"></div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Elite engineering teams with specialized expertise across enterprise technologies and cloud platforms
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-600 dark:bg-indigo-600"></div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Proven track record of delivering complex enterprise projects on time and within budget
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-600 dark:bg-indigo-600"></div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Comprehensive support and continuous optimization to ensure long-term success and ROI
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default TransformIdeasIntoReality;
