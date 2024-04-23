import { useState, useEffect } from 'react';
import axios from 'axios';

const UserCrud = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error:', error));
  }, []);

  const handleEdit = (userId) => {
    // Aquí puedes manejar la lógica de edición
    console.log(`Edit user with id ${userId}`);
  };

  const handleDelete = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      axios.delete(`http://localhost:3000/users/${userId}`)
        .then(() => {
          console.log(`Deleted user with id ${userId}`);
          // Actualizar la lista de usuarios después de borrar
          setUsers(users.filter(user => user.id !== userId));
        })
        .catch(error => console.error('Error:', error));
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{user.name}</td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{user.email}</td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{user.role}</td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">

                      <button className="btn btn-warning" style={{ marginRight: '10px' }} onClick={() => handleEdit(user.id)}>Edit</button>
                      <button className="btn btn-error" onClick={() => handleDelete(user.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCrud;