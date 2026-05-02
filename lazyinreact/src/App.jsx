import { Suspense, lazy, useMemo, useState } from 'react'
import Loader from './Loader'

const lazyWithDelay = (importFn, delay = 1000) =>
  lazy(() =>
    Promise.all([importFn(), new Promise((resolve) => setTimeout(resolve, delay))]).then(
      ([module]) => module,
    ),
  )

const First = lazyWithDelay(() => import('./First'))
const Profile = lazyWithDelay(() => import('./Profile'))
const Settings = lazyWithDelay(() => import('./Settings'))

function App() {
  const [activeTab, setActiveTab] = useState('first')

  const tabs = useMemo(
    () => ({
      first: { label: 'Overview', component: First },
      profile: { label: 'Profile', component: Profile },
      settings: { label: 'Settings', component: Settings },
    }),
    [],
  )

  const ActiveComponent = tabs[activeTab].component

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>React Lazy Loading Demo</h1>
      <p style={styles.subtitle}>
        Each tab loads on demand. Components are split into separate chunks and fetched only when
        needed.
      </p>

      <div style={styles.buttonRow}>
        {Object.entries(tabs).map(([key, tab]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            style={{
              ...styles.button,
              ...(activeTab === key ? styles.buttonActive : {}),
            }}
          >
            {tab.label}  // it is the activeTab lables for switching the component for setState .
          </button>
        ))}
      </div>

      <div style={styles.panel}>
        <Suspense fallback={<Loader label={`Loading ${tabs[activeTab].label}...`} />}>
          <ActiveComponent />
        </Suspense>
      </div>
    </div>
  )
}

const styles = {
  page: {
    padding: '2rem 1rem',
    maxWidth: '700px',
    margin: '0 auto',
    color: '#111827',
  },
  title: {
    marginBottom: '0.5rem',
    fontSize: '2rem',
  },
  subtitle: {
    marginBottom: '1.5rem',
    color: '#4b5563',
  },
  buttonRow: {
    display: 'flex',
    gap: '0.75rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '1.5rem',
  },
  button: {
    border: '1px solid #cbd5e1',
    backgroundColor: '#ffffff',
    color: '#1f2937',
    padding: '0.6rem 1rem',
    borderRadius: '999px',
    cursor: 'pointer',
    fontWeight: '600',
  },
  buttonActive: {
    border: '1px solid #2563eb',
    backgroundColor: '#eff6ff',
    color: '#1d4ed8',
  },
  panel: {
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    minHeight: '220px',
    padding: '1.25rem',
    textAlign: 'left',
  },
}

export default App
