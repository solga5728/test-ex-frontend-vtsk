// src/styles.js
export const formContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '45vh',
  backgroundColor: '#f3f4f6',
};

export const formCard = {
  backgroundColor: 'white',
  padding: '40px',
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  width: '350px',
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
};

export const inputField = {
  padding: '10px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '16px',
};

export const buttonPrimary = {
  padding: '12px',
  backgroundColor: '#4f46e5',
  color: 'white',
  fontSize: '16px',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
};

export const linkStyle = {
  color: '#4f46e5',
  textDecoration: 'none',
  fontWeight: 500,
};

export const messageStyle = (type) => ({
  color: type === 'success' ? 'green' : 'red',
  textAlign: 'center',
  fontSize: '14px',
});
