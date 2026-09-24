import { useState } from 'react'
import FormikContainer from './FormikContainer'
import LoginForm from './LoginForm'

const App = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'container'>('login')

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 p-4 text-slate-100 selection:bg-cyan-500 selection:text-white">
      <div className="mb-6 flex gap-1.5 rounded-xl border border-slate-700/80 bg-slate-800/90 p-1 shadow-lg backdrop-blur-sm">
        <button
          type="button"
          onClick={() => setActiveTab('login')}
          className={`cursor-pointer rounded-lg px-4 py-2 text-sm font-medium transition-all ${
            activeTab === 'login'
              ? 'bg-cyan-500 font-semibold text-slate-950 shadow'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          LoginForm (Вхід)
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('container')}
          className={`cursor-pointer rounded-lg px-4 py-2 text-sm font-medium transition-all ${
            activeTab === 'container'
              ? 'bg-cyan-500 font-semibold text-slate-950 shadow'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          FormikContainer (Всі контроли)
        </button>
      </div>

      {activeTab === 'login' ? <LoginForm /> : <FormikContainer />}
    </div>
  )
}

export default App
