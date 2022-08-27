import React, {useState} from 'react';
import Photos from "./FetchCleanUp/FetchPhotos";
import About from './About';

const TestCleanUp = ()=>{
    const [page, setPage] = useState<string>('employees');
    const showEmployeesPage = () => setPage('employees');
    const showAboutPage = () => setPage('about');
    return (
        <div className="App">
        <h2>My restaurant</h2>
        <a href="#" onClick={showEmployeesPage}>Photo Page</a>
        <a href="#" onClick={showAboutPage}>About Page</a>
        {page === 'employees' ? <Photos /> : <About />}
        </div>
    );
}

export default TestCleanUp;