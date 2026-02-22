import { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom'; // ← add useNavigate

const GetAllStd = () => {
  const [student, setStudent] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/student").then((i) => setStudent(i.data.stdData));
  }, []);

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/student/delete/${id}`);
      setStudent((prev) => prev.filter((a) => a._id !== id));
      alert('Student deleted successfully');
    } catch (e) {
      console.log("Internal Server Error");
    }
  };

  return (
    <>
      <Link to='/create'>
        <button className='bg-green-400 px-2 rounded-xl'>Create New User</button>
      </Link>

      <div className='grid lg:grid-cols-4 gap-2 p-2'>
        {student.map((x) => (
          <div key={x._id} className="bg-black p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold">{x.name}</h3>
            <p className="text-gray-600">Age: {x.age} || Grade: {x.grade}</p>
            <p className="text-gray-600">Email: {x.email}</p>
            <p className="text-gray-600">Address: {x.address}</p>
            <br />
            <div className='flex gap-4'>
              <button
                className='bg-blue-500'
                onClick={() => navigate(`/edit/${x._id}`)}
              >
                Edit
              </button>
              <button
                className='bg-orange-500'
                onClick={() => deleteUser(x._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GetAllStd;