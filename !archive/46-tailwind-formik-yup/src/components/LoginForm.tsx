import { useState } from 'react'
import { Form, Formik, type FormikHelpers } from 'formik'
import Button from './FormComponents/Button'
import FormikControl from './FormComponents/FormikControl'
import {
  initialValues,
  validationSchema,
  type LoginFormValues
} from '../utils/initLogin'

const LoginForm = () => {
  const [submittedData, setSubmittedData] = useState<LoginFormValues | null>(
    null
  )

  const handleSubmit = (
    values: LoginFormValues,
    { resetForm }: FormikHelpers<LoginFormValues>
  ) => {
    console.log('Login submitted:', values)
    setSubmittedData(values)
    resetForm()
  }

  return (
    <div className="w-full max-w-md rounded-2xl border border-slate-700/80 bg-slate-800/90 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
      <div className="mb-6">
        <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-cyan-800/80 bg-cyan-950/60 px-3 py-1 text-xs font-semibold text-cyan-400">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400"></span>
          Авторизація
        </span>
        <h1 className="text-2xl font-bold tracking-tight text-white">
          Вхід у систему
        </h1>
        <p className="mt-1.5 text-sm text-slate-400">
          Введіть вашу електронну пошту та пароль для авторизації.
        </p>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid, dirty, isSubmitting, handleReset }) => (
          <Form className="space-y-4">
            <FormikControl
              control="input"
              label="Електронна пошта"
              name="email"
              type="email"
              placeholder="name@example.com"
            />
            <FormikControl
              control="input"
              label="Пароль"
              name="password"
              type="password"
              placeholder="••••••••"
            />

            <div className="flex gap-3 pt-2">
              <Button
                type="submit"
                variant="primary"
                disabled={!dirty || !isValid || isSubmitting}
              >
                {isSubmitting ? 'Вхід...' : 'Увійти'}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  handleReset()
                  setSubmittedData(null)
                }}
              >
                Очистити
              </Button>
            </div>
          </Form>
        )}
      </Formik>

      {submittedData && (
        <div className="mt-6 rounded-xl border border-emerald-500/40 bg-slate-900/90 p-4 text-sm">
          <div className="mb-2 flex items-center gap-2 font-semibold text-emerald-400">
            <svg
              className="h-4 w-4 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Вхід успішний!</span>
          </div>
          <p className="mb-1 text-xs text-slate-400">Передані дані:</p>
          <pre className="overflow-x-auto rounded-lg border border-slate-800 bg-slate-950/80 p-2.5 text-xs text-slate-300">
            {JSON.stringify(submittedData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
}

export default LoginForm
