import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate =useNavigate()
  return (
  <>
    {
        JSON.parse(localStorage.getItem('userData'))?.email?.length>0?
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Your Dashboard</h1>
      <p style={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac metus euismod, aliquet libero nec,
        fermentum massa. Aenean a felis sapien. Sed hendrerit urna ac quam dictum luctus.
      </p>
      <button type="submit" style={styles.button} onClick={()=>{
         navigate('/');
         localStorage.removeItem('userData')
      }}>Logout</button>
    </div>:""
    }
  </>
  );
};

const styles = {
    button: {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
        fontSize: '16px',
        cursor: 'pointer',
      },
  container: {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#f0f0f0',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: 'auto',
    marginTop: '100px',
  },
  heading: {
    fontSize: '32px',
    marginBottom: '20px',
    color: '#333',
  },
  paragraph: {
    fontSize: '18px',
    lineHeight: '1.5',
    marginBottom: '30px',
    color: '#666',
  },
 
};

export default Home;
