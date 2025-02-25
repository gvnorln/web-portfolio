'use client';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { FiSend } from 'react-icons/fi';
import { useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

const InputField = ({ id, type, label, ...props }) => (
  <div>
    <div className="relative group">
      <input
        id={id}
        type={type}
        placeholder=" "
        className="w-full px-4 py-3 md:px-5 md:py-4 text-sm md:text-base bg-white/50 dark:bg-gray-700/50 
          border-2 border-gray-200/30 dark:border-gray-600/50 rounded-lg md:rounded-xl focus:border-blue-500 focus:ring-0 
          peer transition-all backdrop-blur-sm placeholder-transparent group-hover:border-blue-400 group-hover:shadow-md"
        required
        {...props}
      />
      <label
        htmlFor={id}
        className="absolute left-4 top-3.5 md:top-4 text-sm md:text-base text-gray-500 dark:text-gray-400 
          transform origin-left transition-all duration-300 peer-placeholder-shown:translate-y-0 
          peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-90 peer-focus:text-blue-600 dark:peer-focus:text-blue-400"
      >
        {label}
      </label>
    </div>
    <ValidationError prefix={label} field={id} errors={props.errors} />
  </div>
);

const TextAreaField = ({ id, label, ...props }) => (
  <div>
    <div className="relative group">
      <textarea
        id={id}
        rows="4"
        placeholder=" "
        className="w-full px-4 py-3 md:px-5 md:py-4 text-sm md:text-base bg-white/50 dark:bg-gray-700/50 
          border-2 border-gray-200/30 dark:border-gray-600/50 rounded-lg md:rounded-xl focus:border-blue-500 
          focus:ring-0 peer transition-all backdrop-blur-sm resize-none placeholder-transparent group-hover:border-blue-400 group-hover:shadow-md"
        required
        {...props}
      />
      <label
        htmlFor={id}
        className="absolute left-4 top-5 md:top-6 text-sm md:text-base text-gray-500 dark:text-gray-400 
          transform origin-left transition-all duration-300 peer-placeholder-shown:translate-y-0 
          peer-placeholder-shown:scale-100 peer-focus:-translate-y-7 peer-focus:scale-90 peer-focus:text-blue-600 
          dark:peer-focus:text-blue-400"
      >
        {label}
      </label>
    </div>
    <ValidationError prefix={label} field={id} errors={props.errors} />
  </div>
);

export default function Contact() {
  const [state, handleSubmit] = useForm("xovjovrp");
  const isSubmitting = useMemo(() => state.submitting, [state.submitting]);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="py-12 md:py-20 bg-gradient-to-b from-gray-50/50 to-white/50 dark:from-gray-900 dark:to-gray-800 backdrop-blur-lg"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="max-w-6xl mx-auto px-4 xl:px-0">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
        >
          Let's Connect
        </motion.h2>

        <motion.div className="max-w-2xl mx-auto bg-white/80 dark:bg-gray-800/80 p-6 md:p-8 lg:p-10 rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl backdrop-blur-md border border-gray-100/20 dark:border-gray-700/50">
          <motion.form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <InputField id="email" type="email" label="Your Email" errors={state.errors} name="email" />
            <TextAreaField id="message" label="Your Message" errors={state.errors} name="message" />

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-3 md:px-6 md:py-4 text-sm md:text-base rounded-lg md:rounded-xl font-medium hover:from-blue-700 hover:to-cyan-600 transition-all relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <FiSend className="text-lg md:text-xl" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </span>
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </motion.section>
  );
}
