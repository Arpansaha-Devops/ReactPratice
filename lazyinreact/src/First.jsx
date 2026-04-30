import React from 'react'

const First = () => {
  return (
    <section>
      <h2 style={styles.heading}>Overview Module</h2>
      <p style={styles.text}>
        This component is lazy loaded. The code is downloaded only when you open this tab.
      </p>
      <ul style={styles.list}>
        <li>Faster initial page load</li>
        <li>Smaller first JavaScript bundle</li>
        <li>Better scalability for large apps</li>
      </ul>
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
    marginBottom: '0.75rem',
    color: '#374151',
  },
  list: {
    margin: 0,
    paddingLeft: '1.1rem',
    color: '#374151',
    lineHeight: '1.7',
  },
}

export default First
