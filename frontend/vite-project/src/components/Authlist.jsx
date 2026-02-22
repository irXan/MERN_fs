import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from '../redux/authSlice';

const Authlist = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  if (loading) return <div>Loading posts...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>ToDo-List</h2>
      <div>
        {data.slice(0, 10).map((post) => ( 
          <div key={post.id}>
            <h3>Title: {post.title}</h3>
            <h3>Completed: {String(post.completed)}</h3>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Authlist;