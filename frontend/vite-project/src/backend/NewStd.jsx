import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const NewStd = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  function handleChange(key, val) {
    setFormData({
      ...formData,
      [key]: val
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios.post(`http://localhost:3000/student/create`, formData).then((i)=> setFormData(i.data.newStd));
    navigate('/')
  }

  return (
    <div className="register-container">
      <h2>Create Account</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder="Mr/Ms. X"
            required
            className='w-full m-2'
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="name@company.com"
            required
            className='w-full m-2'
          />
        </div>

        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={(e) => handleChange('address', e.target.value)}
            placeholder="Str-01, BLK-7"
            required
            className='w-full m-2'
          />
        </div>

        <div className="form-group">
          <label>Age</label>
          <input
            type="text" 
            name="age"
            value={formData.age}
            onChange={(e) => handleChange('age', e.target.value)}
            placeholder="e.g: 17"
            required
            className='w-full m-2'
          />
        </div>

        <div className="form-group">
          <label>Grade</label>
          <input
            type="text"
            name="grade"
            value={formData.grade}
            onChange={(e) => handleChange('grade', e.target.value)}
            placeholder="e.g: A"
            required
            className='w-full m-2'
          />
        </div>

        <button className='bg-yellow-400'>Create</button>
      </form>

      <div className="form-footer">
        <p>
          Already have an account?{' '}
          <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default NewStd;