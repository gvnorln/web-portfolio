'use client';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { FiSend } from 'react-icons/fi';
import { useMemo, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

const InputField = ({ id, type, label, errors, ...props }) => (
  <div className="w-full">
    <div className="relative group">
      <input
        id={id}
        type={type}
        placeholder=" "
        className="w-full px-4 py-3 sm:px-5 sm:py-4 text-sm sm:text-base bg-white/50 dark:bg-gray-700/50 
          border-2 border-gray-200/30 dark:border-gray-600/50 rounded-lg focus:border-blue-500 focus:ring-0 
          peer transition-all backdrop-blur-sm placeholder-transparent group-hover:border-blue-400 group-hover:shadow-md"
        required
        {...props}
      />
      <label
        htmlFor={id}
        className="absolute left-4 top-3.5 text-sm sm:text-base text-gray-500 dark:text-gray-400 
          transform transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 
          peer-focus:-translate-y-6 peer-focus:scale-90 peer-focus:text-blue-600 dark:peer-focus:text-blue-400"
      >
        {label}
      </label>
    </div>
    <ValidationError prefix={label} field={id} errors={errors} />
  </div>
);

const TextAreaField = ({ id, label, errors, ...props }) => (
  <div className="w-full">
    <div className="relative group">
      <textarea
        id={id}
        rows="4"
        placeholder=" "
        className="w-full px-4 py-3 sm:px-5 sm:py-4 text-sm sm:text-base bg-white/50 dark:bg-gray-700/50 
          border-2 border-gray-200/30 dark:border-gray-600/50 rounded-lg focus:border-blue-500 focus:ring-0 
          peer transition-all backdrop-blur-sm resize-none placeholder-transparent group-hover:border-blue-400 group-hover:shadow-md"
        required
        {...props}
      />
      <label
        htmlFor={id}
        className="absolute left-4 top-5 text-sm sm:text-base text-gray-500 dark:text-gray-400 
          transform transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 
          peer-focus:-translate-y-7 peer-focus:scale-90 peer-focus:text-blue-600 dark:peer-focus:text-blue-400"
      >
        {label}
      </label>
    </div>
    <ValidationError prefix={label} field={id} errors={errors} />
  </div>
);

export default function Contact() {
  const [state, handleSubmit] = useForm("xovjovrp");
  const isSubmitting = useMemo(() => state.submitting, [state.submitting]);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const handleFormSubmit = useCallback(handleSubmit, [handleSubmit]);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="py-12 sm:py-20 bg-gradient-to-b from-gray-50/50 to-white/50 dark:from-gray-900 dark:to-gray-800 backdrop-blur-lg"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 text-center bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
        >
          Let's Connect
        </motion.h2>

        <motion.div className="max-w-2xl mx-auto bg-white/80 dark:bg-gray-800/80 p-6 sm:p-8 lg:p-10 rounded-xl shadow-lg backdrop-blur-md border border-gray-100/20 dark:border-gray-700/50">
          <motion.form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-6">
            <InputField id="email" type="email" label="Your Email" errors={state.errors} name="email" />
            <TextAreaField id="message" label="Your Message" errors={state.errors} name="message" />

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-3 sm:px-6 sm:py-4 text-sm sm:text-base rounded-lg font-medium hover:from-blue-700 hover:to-cyan-600 transition-all relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <FiSend className="text-lg sm:text-xl" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </span>
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </motion.section>
  );
}