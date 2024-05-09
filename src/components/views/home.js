import Login from '../login/login';
import Signup from '../signup/signup';
import { useState, useEffect } from 'react';

function Home() {
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    console.log('flag value:', flag); // Log the current value of flag
  }, [flag]); // Add flag as a dependency to the effect

  const toggleFlag = () => {
    setFlag(prevFlag => !prevFlag); // Toggle the value of flag
  };

  return (
    <div>
      {flag ?    
        <Login flag={toggleFlag} /> : <Signup flag={toggleFlag} />
      }
    </div>
  );
}

export default Home;
