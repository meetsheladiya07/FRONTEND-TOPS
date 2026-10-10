import React from 'react';

const UserProfile = ({ username, followers, profilePic }) => {
  return (
    <div style={styles.card}>
      <img 
        src={profilePic} 
        alt={`${username}'s profile`} 
        style={styles.avatar} 
      />

      <div style={styles.info}>
        <h4 style={styles.username}>@{username}</h4>
        <p style={styles.followers}>
          <strong>{followers.toLocaleString()}</strong> followers
        </p>
      </div>

      <button style={styles.button}>Follow</button>
    </div>
  );
};

UserProfile.defaultProps = {
  followers: 0,
  profilePic: './assets/img.png',
};

const styles = {
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    border: '1px solid #dbdbdb',
    borderRadius: '8px',
    padding: '12px 16px',
    width: '300px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
  },
  avatar: {
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #e1306c',
    padding: '2px',
    marginRight: '12px',
  },
  info: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  username: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#262626',
    margin: '0 0 2px 0',
  },
  followers: {
    fontSize: '13px',
    color: '#8e8e8e',
    margin: '0',
  },
  button: {
    backgroundColor: '#0095f6',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    padding: '6px 16px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
  },
};

export default UserProfile;