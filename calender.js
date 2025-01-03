import React from 'react'; 
import ReactDOM from 'react-dom'; 
import App from 'App'; 
import './App.css'; 
 
ReactDOM.render( 
  <React.StrictMode> 
    <App /> 
  </React.StrictMode>, 
  document.getElementById('root') 
); 
 
// App.js 
import React from 'react'; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import AdminModule from './components/AdminModule'; 
import Dashboard from './components/Dashboard'; 
import UserModule from './components/UserModule'; 
import CalendarView from './components/CalendarView'; 
 
const App = () => { 
  return ( 
    <Router> 
      <div className="App"> 
        <nav> 
          <ul> 
            <li><Link to="/">Dashboard</Link></li> 
            <li><Link to="/admin">Admin</Link></li> 
            <li><Link to="/user">User</Link></li> 
            <li><Link to="/calendar">Calendar</Link></li> 
          </ul> 
        </nav> 
        <Routes> 
          <Route path="/" element={<Dashboard />} /> 
          <Route path="/admin" element={<AdminModule />} /> 
          <Route path="/user" element={<UserModule />} /> 
          <Route path="/calendar" element={<CalendarView />} /> 
        </Routes> 
      </div> 
    </Router> 
  ); 
}; 
 
export default App; 
 
//AdminModule.js 
import React, { useState } from 'react'; 
 
const AdminModule = () => { 
  const [companies, setCompanies] = useState([]); 
 
  const addCompany = (event) => { 
    event.preventDefault(); 
    const newCompany = { 
      name: event.target.name.value, 
      location: event.target.location.value, 
      linkedin: event.target.linkedin.value, 
      email: event.target.email.value, 
      phone: event.target.phone.value, 
    }; 
    setCompanies([...companies, newCompany]); 
    event.target.reset(); 
  }; 
 
  return ( 
    <div> 
      <h1>Admin Module</h1> 
      <form onSubmit={addCompany}> 
        <input name="name" placeholder="Company Name" required /> 
        <input name="location" placeholder="Location" /> 
        <input name="linkedin" placeholder="LinkedIn Profile" /> 
        <input name="email" placeholder="Email" /> 
        <input name="phone" placeholder="Phone Number" /> 
        <button type="submit">Add Company</button> 
      </form> 
      <ul> 
        {companies.map((company, index) => ( 
          <li key={index}> 
            {company.name} - {company.location} 
          </li> 
        ))} 
      </ul> 
    </div> 
  ); 
}; 
 
export default AdminModule; 
 
// Dashboard.js 
import React from 'react'; 
 
const Dashboard = () => { 
  const companies = [ 
    { name: 'ABC Corp', lastCommunications: 'LinkedIn Post (5 Jan)' }, 
    { name: 'XYZ Ltd.', lastCommunications: 'Email (10 Jan)' }, 
  ]; 
 
  return ( 
    <div> 
      <h1>Dashboard</h1> 
      <table> 
        <thead> 
          <tr> 
            <th>Company</th> 
            <th>Last Communication</th> 
            <th>Next Scheduled</th> 
          </tr> 
        </thead> 
        <tbody> 
          {companies.map((company, index) => ( 
            <tr key={index}> 
              <td>{company.name}</td> 
              <td>{company.lastCommunications}</td> 
              <td>LinkedIn Message (20 Jan)</td> 
            </tr> 
          ))} 
        </tbody> 
      </table> 
    </div> 
  ); 
}; 
 
export default Dashboard; 
// UserModule.js 
import React from 'react'; 
const UserModule = () => { 
return ( 
<div> 
<h1>User Module</h1> 
<p>Features for managing communications will be implemented here.</p> 
</div> 
); 
}; 
export default UserModule; 
//CalendarView.js 
import React from 'react'; 
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css'; 
const CalendarView = () => { 
const handleDateChange = (date) => { 
console.log('Selected date:', date); 
}; 
return ( 
<div> 
<h1>Calendar View</h1> 
<Calendar onChange={handleDateChange} /> 
</div> 
); 
}; 
export default CalendarView; 
//api.js 
import axios from 'axios'; 
const API_URL = 'https://your-api-url.com'; 
export const fetchCompanies = async () => { 
try { 
const response = await axios.get(${API_URL}/companies); 
return response.data; 
} catch (error) { 
console.error('Error fetching companies:', error); 
throw error; 
} 
}; 
//App.css 
body { 
font-family: Arial, sans-serif; 
margin: 0; 
padding: 0; 
background-color: #f5f5f5; 
} 
h1 { 
text-align: center; 
color: #333; 
} 
table { 
width: 80%; 
margin: auto; 
border-collapse: collapse; 
} 
table th, table td { 
border: 1px solid #ddd; 
padding: 8px; 
text-align: left; 
} 
table th { 
background-color: #4caf50; 
color: white; 
}