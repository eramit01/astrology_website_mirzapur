import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const FAQ = () => {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: t('faq.questions.q1'),
      answer: t('faq.questions.a1')
    },
    {
      question: t('faq.questions.q2'),
      answer: t('faq.questions.a2')
    },
    {
      question: t('faq.questions.q3'),
      answer: t('faq.questions.a3')
    },
    {
      question: t('faq.questions.q4'),
      answer: t('faq.questions.a4')
    },
    {
      question: t('faq.questions.q5'),
      answer: t('faq.questions.a5')
    },
    {
      question: t('faq.questions.q6'),
      answer: t('faq.questions.a6')
    },
    {
      question: t('faq.questions.q7'),
      answer: t('faq.questions.a7')
    },
    {
      question: t('faq.questions.q8'),
      answer: t('faq.questions.a8')
    },
    {
      question: t('faq.questions.q9'),
      answer: t('faq.questions.a9')
    },
    {
      question: t('faq.questions.q10'),
      answer: t('faq.questions.a10')
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            {t('faq.title')}
          </h2>
          <p className="text-gray-600 text-center mb-8 text-lg">
            {t('faq.subtitle')}
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 text-gray-700 leading-relaxed border-t border-gray-200">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ

