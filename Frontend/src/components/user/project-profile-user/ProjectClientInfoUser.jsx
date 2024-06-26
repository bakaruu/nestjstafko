import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProjectClientInfoUser = () => {
    const { id } = useParams();
    const [client, setClient] = useState(null);
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem('token'); // Obtener el token de acceso desde localStorage

    useEffect(() => {
        const fetchClientData = async () => {
            try {
                // Configurar el encabezado de autorización
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                };

                // Obtener la información del proyecto para obtener el client_id
                const projectResponse = await axios.get(`http://localhost:8055/items/projects/${id}`, config);
                const projectData = projectResponse.data.data;

                // Obtener la información del cliente usando el client_id del proyecto
                const clientResponse = await axios.get(`http://localhost:8055/items/clients/${projectData.client_id}`, config);
                const clientData = clientResponse.data.data;

                setClient(clientData);
            } catch (error) {
                console.error('Error fetching project or client data:', error);
            } finally {
                setLoading(false);
            }
        };

        if (id && token) {
            fetchClientData();
        }
    }, [id, token]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-white p-3 shadow-sm rounded-sm">
            <div className="flex items-center justify-between space-x-2 font-semibold text-gray-900 leading-8 m-4">
                <div className="flex items-center space-x-2">
                    <span className="text-orange-200">
                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </span>
                    <span className="tracking-wide">Client</span>
                </div>
            </div>
            <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Name</div>
                        <div className="px-4 py-2">{client?.name}</div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Contact No.</div>
                        <div className="px-4 py-2">{client?.contact_num || "N/A"}</div> {/* Mostrar "N/A" si contact_num es null */}
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Address</div>
                        <div className="px-4 py-2">{client?.address}</div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Email</div>
                        <div className="px-4 py-2">
                            <a className="text-blue-800 block overflow-hidden overflow-ellipsis whitespace-nowrap" href={`mailto:${client?.email}`}>{client?.email}</a>
                        </div>
                    </div>
                </div>
            </div>
            <button
                className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                Show Full Information
            </button>
        </div>
    );
};

export default ProjectClientInfoUser;
