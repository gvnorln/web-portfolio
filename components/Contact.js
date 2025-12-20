'use client';

import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { FiSend, FiCheckCircle, FiMail } from 'react-icons/fi';
import { memo, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

/* ===================== THEME ===================== */
/* GANTI DI SINI JIKA SECTION SEBELUMNYA BEDA WARNA */
const ACCENT_GRADIENT =
  'from-indigo-500 via-purple-500 to-fuchsia-500';
const ACCENT_TEXT =
  'from-indigo-400 to-purple-400';

/* ===================== INPUT ===================== */
const InputField = memo(({ id, type, label, errors, ...props }) => (
  <div>
    <label
      htmlFor={id}
      className="mb-2 block text-xs font-semibold uppercase tracking-widest
      text-gray-500 dark:text-gray-400"
    >
      {label}
    </label>

    <input
      id={id}
      type={type}
      required
      className="
        w-full rounded-2xl px-4 py-3 text-sm
        bg-white/70 dark:bg-neutral-900/70
        border border-gray-200 dark:border-neutral-800
        focus:outline-none
        focus:ring-4 focus:ring-indigo-500/20
        transition-all duration-300
      "
      {...props}
    />

    <ValidationError prefix={label} field={id} errors={errors} />
  </div>
));

const TextAreaField = memo(({ id, label, errors, ...props }) => (
  <div>
    <label
      htmlFor={id}
      className="mb-2 block text-xs font-semibold uppercase tracking-widest
      text-gray-500 dark:text-gray-400"
    >
      {label}
    </label>

    <textarea
      id={id}
      rows={5}
      required
      className="
        w-full rounded-2xl px-4 py-3 text-sm resize-none
        bg-white/70 dark:bg-neutral-900/70
        border border-gray-200 dark:border-neutral-800
        focus:outline-none
        focus:ring-4 focus:ring-indigo-500/20
        transition-all duration-300
      "
      {...props}
    />

    <ValidationError prefix={label} field={id} errors={errors} />
  </div>
));

/* ===================== MAIN ===================== */
export default function Contact() {
  const [state, handleSubmit] = useForm('xovjovrp');
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

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
        relative overflow-hidden
        scroll-mt-28
        py-28 md:py-36
        bg-neutral-50 dark:bg-neutral-950
      "
    >
      {/* Ambient Accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-32 h-[480px] w-[480px] rounded-full bg-indigo-500/10 blur-[160px]" />
        <div className="absolute bottom-0 -right-32 h-[420px] w-[420px] rounded-full bg-purple-500/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
              <FiMail />
              Contact
            </span>

            <h2
              className={`
                mt-4 pb-6 text-4xl md:text-5xl font-extrabold leading-tight
                bg-gradient-to-r ${ACCENT_TEXT}
                bg-clip-text text-transparent
              `}
            >
              Let’s Work Together
            </h2>

            <p className="mt-6 max-w-md text-neutral-600 dark:text-neutral-400">
              Open for collaboration, freelance work, or discussing
              infrastructure, DevOps, and system design.
            </p>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="
              rounded-3xl border border-neutral-200 dark:border-neutral-800
              bg-white/80 dark:bg-neutral-900/80
              backdrop-blur-xl
              shadow-2xl
              p-8 md:p-10
            "
          >
            {!state.succeeded ? (
              <form onSubmit={handleSubmit} className="space-y-6 text-white">
                <InputField
                  id="email"
                  type="email"
                  label="Email"
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
                  whileTap={{ scale: 0.97 }}
                  disabled={state.submitting}
                  className={`
                    group relative w-full overflow-hidden
                    rounded-2xl py-3.5 text-sm font-semibold text-white
                    bg-gradient-to-r ${ACCENT_GRADIENT}
                    shadow-lg
                  `}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <FiSend />
                    {state.submitting ? 'Sending…' : 'Send Message'}
                  </span>

                  <span
                    className="
                      absolute inset-0 -translate-x-full
                      bg-gradient-to-r from-transparent via-white/25 to-transparent
                      transition-transform duration-700
                      group-hover:translate-x-full
                    "
                  />
                </motion.button>

                <p className="text-center text-xs text-neutral-500">
                  Tip: Ctrl / Cmd + Enter
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 160, damping: 18 }}
                className="py-12 text-center"
              >
                <FiCheckCircle className="mx-auto mb-4 text-5xl text-emerald-500" />
                <h3 className="text-xl font-bold">Message Sent</h3>
                <p className="mt-2 text-sm text-neutral-500">
                  Thanks for reaching out.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
