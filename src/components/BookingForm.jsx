import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useState } from 'react'
import axios from 'axios'
import { useTranslation } from 'react-i18next'

const BookingForm = ({ defaultService = '' }) => {
  const { t } = useTranslation()
  
  const schema = yup.object({
    name: yup.string().required(t('bookingForm.validation.nameRequired')),
    email: yup.string().email(t('bookingForm.validation.emailInvalid')).required(t('bookingForm.validation.emailRequired')),
    phone: yup
      .string()
      .required(t('bookingForm.validation.phoneRequired'))
      .matches(/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/, t('bookingForm.validation.phoneInvalid')),
    service: yup.string().required(t('bookingForm.validation.serviceRequired')),
    preferredDate: yup.string().required(t('bookingForm.validation.dateRequired')),
    preferredTime: yup.string().required(t('bookingForm.validation.timeRequired')),
    message: yup.string(),
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      service: defaultService,
    },
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // In production, replace with your API endpoint
      // For now, we'll simulate a submission
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // TODO: Replace with actual API call
      // await axios.post('/api/booking', data)

      console.log('Booking data:', data)
      setSubmitStatus({ type: 'success', message: t('bookingForm.success') })
      reset()

      // Optionally redirect to WhatsApp
      const waNumber = import.meta.env.VITE_WA_NUMBER || '919323600011'
      const waText = encodeURIComponent(
        `नमस्ते! मैंने एक बुकिंग अनुरोध जमा किया है:\n\nनाम: ${data.name}\nसेवा: ${data.service}\nतारीख: ${data.preferredDate}\nसमय: ${data.preferredTime}`
      )
      setTimeout(() => {
        window.open(`https://wa.me/${waNumber}?text=${waText}`, '_blank')
      }, 2000)
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: t('bookingForm.error'),
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const services = [
    t('service.kundaliReading.name'),
    t('service.matchmaking.name'),
    t('service.vastuConsultation.name'),
    t('service.careerGuidance.name'),
    t('service.financialForecast.name'),
    t('service.remedies.name'),
    t('service.gemstoneSuggestion.name'),
    'Muhurat',
    'Panchang',
    'Online Consultation',
    'In-person Consultation',
  ]

  const timeSlots = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
    '6:00 PM',
    '7:00 PM',
  ]

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          {t('bookingForm.fullName')}
        </label>
        <input
          type="text"
          id="name"
          {...register('name')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          aria-invalid={errors.name ? 'true' : 'false'}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          {t('bookingForm.email')}
        </label>
        <input
          type="email"
          id="email"
          {...register('email')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          aria-invalid={errors.email ? 'true' : 'false'}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          {t('bookingForm.phoneNumber')}
        </label>
        <input
          type="tel"
          id="phone"
          {...register('phone')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          aria-invalid={errors.phone ? 'true' : 'false'}
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600" role="alert">
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
          {t('bookingForm.service')}
        </label>
        <select
          id="service"
          {...register('service')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          aria-invalid={errors.service ? 'true' : 'false'}
        >
          <option value="">{t('bookingForm.selectService')}</option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
        {errors.service && (
          <p className="mt-1 text-sm text-red-600" role="alert">
            {errors.service.message}
          </p>
        )}
      </div>

      {/* Date & Time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
            {t('bookingForm.preferredDate')}
          </label>
          <input
            type="date"
            id="preferredDate"
            {...register('preferredDate')}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            aria-invalid={errors.preferredDate ? 'true' : 'false'}
          />
          {errors.preferredDate && (
            <p className="mt-1 text-sm text-red-600" role="alert">
              {errors.preferredDate.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">
            {t('bookingForm.preferredTime')}
          </label>
          <select
            id="preferredTime"
            {...register('preferredTime')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            aria-invalid={errors.preferredTime ? 'true' : 'false'}
          >
            <option value="">{t('bookingForm.selectTime')}</option>
            {timeSlots.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          {errors.preferredTime && (
            <p className="mt-1 text-sm text-red-600" role="alert">
              {errors.preferredTime.message}
            </p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          {t('bookingForm.message')}
        </label>
        <textarea
          id="message"
          {...register('message')}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      {/* Submit Status */}
      {submitStatus && (
        <div
          className={`p-4 rounded-lg ${
            submitStatus.type === 'success'
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
          role="alert"
        >
          {submitStatus.message}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? t('bookingForm.submitting') : t('bookingForm.submitBooking')}
      </button>

      <p className="text-sm text-gray-500 text-center">
        {t('bookingForm.agreement')}
      </p>
    </form>
  )
}

export default BookingForm


