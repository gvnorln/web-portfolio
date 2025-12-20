'use client';

import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { FiSend, FiCheckCircle } from 'react-icons/fi';
import { memo, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

/* ===================== INPUT ===================== */
const InputField = memo(({ id, type, label, errors, ...props }) => (
  <div className="relative">
    <label
      htmlFor={id}
      className="block mb-2 text-xs font-semibold uppercase tracking-wide
        text-gray-500 dark:text-gray-400"
    >
      {label}
    </label>

    <input
      id={id}
      type={type}
      required
      className="
        w-full rounded-xl px-4 py-3 text-sm
        bg-white dark:bg-gray-800
        border border-gray-300 dark:border-gray-700
        focus:outline-none
        focus:border-blue-500
        focus:ring-4 focus:ring-blue-500/20
        transition-all duration-200
      "
      {...props}
    />

    <ValidationError prefix={label} field={id} errors={errors} />
  </div>
));

const TextAreaField = memo(({ id, label, errors, ...props }) => (
  <div className="relative">
    <label
      htmlFor={id}
      className="block mb-2 text-xs font-semibold uppercase tracking-wide
        text-gray-500 dark:text-gray-400"
    >
      {label}
    </label>

    <textarea
      id={id}
      rows={4}
      required
      className="
        w-full rounded-xl px-4 py-3 text-sm resize-none
        bg-white dark:bg-gray-800
        border border-gray-300 dark:border-gray-700
        focus:outline-none
        focus:border-blue-500
        focus:ring-4 focus:ring-blue-500/20
        transition-all duration-200
      "
      {...props}
    />

    <ValidationError prefix={label} field={id} errors={errors} />
  </div>
));

/* ===================== MAIN ===================== */
export default function Contact() {
  const [state, handleSubmit] = useForm('xovjovrp');
  const { ref, inView } = useInView({ threshold: 0.25, triggerOnce: true });

  /* Keyboard Shortcut */
  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        document.getElementById('contact-submit')?.click();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <section
      id="contact"
      ref={ref}
      className="
        relative py-28 overflow-hidden
        bg-gradient-to-b from-gray-50 to-white
        dark:from-gray-950 dark:to-gray-900
      "
    >
      {/* Subtle Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute -top-40 left-1/2 -translate-x-1/2
            w-[520px] h-[520px]
            bg-blue-500/15 blur-[160px]
            rounded-full
          "
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold
            bg-gradient-to-r from-blue-600 to-cyan-500
            bg-clip-text text-transparent">
            Let’s Build Something Impactful
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Interested in DevOps, Cloud Infrastructure, or Secure CI/CD?
            Let’s talk.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="
            relative max-w-2xl mx-auto
            rounded-3xl p-8 md:p-10
            bg-white/90 dark:bg-gray-900/90
            backdrop-blur-xl
            border border-gray-200 dark:border-gray-800
            shadow-2xl
          "
        >
          {!state.succeeded ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <InputField
                id="email"
                type="email"
                label="Email Address"
                name="email"
                errors={state.errors}
              />

              <TextAreaField
                id="message"
                label="Message"
                name="message"
                errors={state.errors}
              />

              <motion.button
                id="contact-submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                disabled={state.submitting}
                className="
                  group relative w-full overflow-hidden
                  rounded-xl py-3.5 text-sm font-semibold text-white
                  bg-gradient-to-r from-blue-600 to-cyan-500
                  shadow-lg shadow-blue-500/30
                "
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <FiSend />
                  {state.submitting ? 'Sending…' : 'Send Message'}
                </span>

                {/* Shimmer */}
                <span
                  className="
                    absolute inset-0 -translate-x-full
                    bg-gradient-to-r from-transparent via-white/25 to-transparent
                    group-hover:translate-x-full
                    transition-transform duration-700
                  "
                />
              </motion.button>

              <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                Tip: Press <kbd>Ctrl</kbd> + <kbd>Enter</kbd> to send
              </p>
            </form>
          ) : (
            /* Success */
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 16 }}
              className="text-center py-12"
            >
              <FiCheckCircle className="mx-auto text-5xl text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                Message Delivered
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Thanks for reaching out — I’ll get back to you shortly.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
