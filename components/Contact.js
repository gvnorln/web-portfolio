'use client';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { FiSend } from 'react-icons/fi';

export default function Contact() {
  const [state, handleSubmit] = useForm("xovjovrp");

  return (
    <motion.section
      id="contact"
      className="py-12 md:py-20 bg-gradient-to-b from-gray-50/50 to-white/50 dark:from-gray-900 dark:to-gray-800 backdrop-blur-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="max-w-6xl mx-auto px-4 xl:px-0">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
        >
          Let's Connect
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", damping: 12 }}
          className="max-w-2xl mx-auto bg-white/80 dark:bg-gray-800/80 p-6 md:p-8 lg:p-10 rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl backdrop-blur-md border border-gray-100/20 dark:border-gray-700/50"
        >
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4 md:space-y-6"
          >
            {/* Email Input */}
            <motion.div>
              <div className="relative group">
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder=" "
                  className="w-full px-4 py-3 md:px-5 md:py-4 text-sm md:text-base bg-white/50 dark:bg-gray-700/50 border-2 border-gray-200/30 dark:border-gray-600/50 rounded-lg md:rounded-xl focus:border-blue-500 focus:ring-0 peer transition-all backdrop-blur-sm placeholder-transparent"
                  required
                />
                <label 
                  htmlFor="email"
                  className="absolute left-4 top-3.5 md:top-4 text-sm md:text-base text-gray-500 dark:text-gray-400 transform origin-left transition-all duration-300 
                    peer-placeholder-shown:translate-y-0 
                    peer-placeholder-shown:scale-100 
                    peer-focus:-translate-y-6 
                    peer-focus:scale-90
                    peer-focus:text-blue-600 dark:peer-focus:text-blue-400
                    peer-[&:not(:placeholder-shown)]:-translate-y-6 
                    peer-[&:not(:placeholder-shown)]:scale-90"
                >
                  Your Email
                </label>
              </div>
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </motion.div>

            {/* Message Input */}
            <motion.div>
              <div className="relative group">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder=" "
                  className="w-full px-4 py-3 md:px-5 md:py-4 text-sm md:text-base bg-white/50 dark:bg-gray-700/50 border-2 border-gray-200/30 dark:border-gray-600/50 rounded-lg md:rounded-xl focus:border-blue-500 focus:ring-0 peer transition-all backdrop-blur-sm resize-none placeholder-transparent"
                  required
                />
                <label 
                  htmlFor="message"
                  className="absolute left-4 top-5 md:top-6 text-sm md:text-base text-gray-500 dark:text-gray-400 transform origin-left transition-all duration-300 
                    peer-placeholder-shown:translate-y-0 
                    peer-placeholder-shown:scale-100 
                    peer-focus:-translate-y-7 
                    peer-focus:scale-90
                    peer-focus:text-blue-600 dark:peer-focus:text-blue-400
                    peer-[&:not(:placeholder-shown)]:-translate-y-7 
                    peer-[&:not(:placeholder-shown)]:scale-90"
                >
                  Your Message
                </label>
              </div>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              type="submit"
              disabled={state.submitting}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-3 md:px-6 md:py-4 text-sm md:text-base rounded-lg md:rounded-xl font-medium hover:from-blue-700 hover:to-cyan-600 transition-all relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <FiSend className="text-lg md:text-xl" />
                {state.submitting ? 'Sending...' : 'Send Message'}
              </span>
            </motion.button>

            {/* Success Message */}
            {state.succeeded && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center mt-4 p-3 md:p-4 text-sm md:text-base bg-green-100/50 dark:bg-green-900/20 rounded-lg md:rounded-xl border border-green-200/30 dark:border-green-700/30 backdrop-blur-sm"
              >
                <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Message sent successfully!</span>
                </div>
              </motion.div>
            )}
          </motion.form>
        </motion.div>
      </div>
    </motion.section>
  );
}