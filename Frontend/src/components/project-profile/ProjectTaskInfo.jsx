import { useState } from 'react';
import GenericBtn from "../buttons/Generic-btn";
import AddTaskModal from '../modals/AddTaskModal';

const ProjectTaskInfo = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddTask = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="bg-white p-3 mb-36 shadow-sm rounded-sm ">
            <div className="flex items-center justify-between space-x-2 font-semibold text-gray-900 leading-8 m-4">
                <div className="flex items-center space-x-2">
                    <span className="text-orange-200">
                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </span>
                    <span className="tracking-wide">Tasks</span>
                </div>
                <GenericBtn onClick={handleAddTask} buttonText="Add Task" className="justify-end" />
                {isModalOpen && <AddTaskModal handleClose={handleCloseModal} />}
            </div>
            
            <div className="grid grid-cols-2">
                <div>
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                        <span className="text-orange-200">
                            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </span>
                        <span className="tracking-wide">Active tasks</span>
                    </div>
                    <ul className="list-inside space-y-2">
                        <li>
                            <div className="text-orange-400">Owner at Her Company Inc.</div>
                            <div className="text-gray-500 text-xs">March 2020 - Now</div>
                        </li>

                    </ul>
                </div>
                <div>
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                        <span className="text-orange-200">
                            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path fill="#fff"
                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                            </svg>
                        </span>
                        <span className="tracking-wide">Finished tasks</span>
                    </div>
                    <ul className="list-inside space-y-2">
                        <li>
                            <div className="text-orange-400">Masters Degree in Oxford</div>
                            <div className="text-gray-500 text-xs">March 2020 - Now</div>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
}


export default ProjectTaskInfo;