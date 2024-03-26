import React, { useState, useEffect } from 'react';
import NavBar from "../../common/NavBar";
import Footer from "../../common/Footer";
import './ProjectSubmissions.css';

const SubmissionDisplay = () => {
    const [submissions, setSubmissions] = useState([]);

    useEffect(() => {
        // Data entered atm instead of being retrieved from database for now
        const fetchedSubmissions = [
            { studentName: 'Aiden', uploadTime: '2022-09-11 16:42:00', completed: false },
            { studentName: 'Courtney', uploadTime: '2023-03-07 13:47:00', completed: false },
            { studentName: 'Courtney', uploadTime: '2023-03-07 11:53:00', completed: false },
            { studentName: 'Hanu', uploadTime: '2022-07-09 18:00:00', completed: false },
            { studentName: 'Courtney', uploadTime: '2022-07-09 11:07:00', completed: false },
        ];
        
        const sortedSubmissions = fetchedSubmissions.sort((a, b) => new Date(a.uploadTime) - new Date(b.uploadTime));

        setSubmissions(sortedSubmissions);
    }, []);

    const handleCheckboxChange = index => {
        const updatedSubmissions = [...submissions];
        updatedSubmissions[index].completed = !updatedSubmissions[index].completed;
        setSubmissions(updatedSubmissions);
    };

    const handleRemoveCompleted = () => {
        const updatedSubmissions = submissions.filter(submission => !submission.completed);
        setSubmissions(updatedSubmissions);
    };

    return (
        <div className="submission-container">
            <NavBar />
            <h1>Student Submissions</h1>
            <div className="submission-list">
                <button className="remove-button" onClick={handleRemoveCompleted}>Remove Completed Projects</button>
                <div className="scroll-container">
                    <ul className="horizontal-list">
                        {submissions.map((submission, index) => (
                            <li key={index} className="submission-item">
                                <input
                                    type="checkbox"
                                    checked={submission.completed}
                                    onChange={() => handleCheckboxChange(index)}
                                />
                                <div className="project-info-container">
                                    <div className="project-info">
                                        <b>{submission.studentName} has submitted a project</b>
                                        <div className="date"><b>Upload Time:</b> {submission.uploadTime}</div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SubmissionDisplay;