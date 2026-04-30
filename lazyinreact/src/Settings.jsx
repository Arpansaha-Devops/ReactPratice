import React from 'react'

const Settings = () => {
  return (
    <section>
      <h2 style={styles.heading}>Settings Module</h2>
      <p style={styles.text}>
        Settings screens are a classic lazy-loading candidate because they are not needed on first
        render.
      </p>
      <div style={styles.grid}>
        <div style={styles.item}>Notifications: Enabled</div>
        <div style={styles.item}>Theme: Light</div>
        <div style={styles.item}>Language: English</div>
      </div>
    </section>
  )
}

const styles = {
  heading: {
    marginTop: 0,
    marginBottom: '0.75rem',
    color: '#111827',
  },
  text: {
    marginBottom: '0.9rem',
    color: '#374151',
  },
  grid: {
    display: 'grid',
    gap: '0.6rem',
  },
  item: {
    border: '1px solid #dbeafe',
    backgroundColor: '#eff6ff',
    color: '#1e3a8a',
    borderRadius: '8px',
    padding: '0.65rem 0.8rem',
    fontWeight: '500',
  },
}

export default Settings
