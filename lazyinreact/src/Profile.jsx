import React from 'react'

const Profile = () => {
  return (
    <section>
      <h2 style={styles.heading}>Profile Module</h2>
      <p style={styles.text}>
        User profile details can be loaded only for users who actually open this section.
      </p>
      <div style={styles.card}>
        <p style={styles.row}>
          <strong>Name:</strong> Jane Doe
        </p>
        <p style={styles.row}>
          <strong>Role:</strong> Product Designer
        </p>
        <p style={styles.row}>
          <strong>Status:</strong> Active
        </p>
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
  card: {
    border: '1px solid #e2e8f0',
    borderRadius: '10px',
    padding: '0.75rem',
    backgroundColor: '#f8fafc',
  },
  row: {
    margin: '0.35rem 0',
    color: '#1f2937',
  },
}

export default Profile
