import React from 'react'

const Loader = ({ label = 'Loading...' }) => {
  return (
    <div style={styles.container}>
      <div style={styles.spinner} />
      <p style={styles.text}>{label}</p>
      <style>
        {`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '180px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.75rem',
  },
  spinner: {
    width: '46px',
    height: '46px',
    borderRadius: '50%',
    border: '5px solid #dbeafe',
    borderTop: '5px solid #2563eb',
    animation: 'spin 0.9s linear infinite',
  },
  text: {
    margin: 0,
    color: '#475569',
    fontWeight: '600',
  },
}

export default Loader
