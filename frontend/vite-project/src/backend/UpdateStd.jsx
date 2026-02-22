import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const UpdateStd = () => {
  const [info, setInfo] = useState({});
  const {id} = useParams();
  const navigate = useNavigate();

  function handleChange(key, val) {
    setInfo({
      ...info,
      [key]: val
    });
  }

  useEffect(()=>{
    axios.get(`http://localhost:3000/student/${id}`).then((i)=> setInfo(i.data.stdData));
  }, [id])

  const updateStudent =(e)=>{
    e.preventDefault()
    axios.put(`http://localhost:3000/student/update/${id}`, info).then((res)=> setInfo(res.data.updateStd));

    navigate('/');
  }


  return (
    <div className="register-container">
      <h2>EDIT ACCOUNT</h2>

      <form onSubmit={updateStudent}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={info.name}
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
            value={info.email}
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
            value={info.address}
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
            value={info.age}
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
            value={info.grade}
            onChange={(e) => handleChange('grade', e.target.value)}
            placeholder="e.g: A"
            required
            className='w-full m-2'
          />
        </div>

        <button className='bg-yellow-400'>Update</button>
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

export default UpdateStd;