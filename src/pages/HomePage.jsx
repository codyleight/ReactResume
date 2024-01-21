import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    // Your API call logic goes here
    setUsers();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (

   
   
    <div className="bg-dark text-danger" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <img
    src="src\assets\banner6.png"
    alt="Full Stack Developer"
    className="img-fluid"
  />
</div>
  );
}