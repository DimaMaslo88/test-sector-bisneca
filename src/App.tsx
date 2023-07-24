import React from 'react';
import { Search } from 'ui/components/searchComponent/Search';
import './styles/App.module.scss';


function App() {
    return (
        <div className='main-container'>
            <div>
                <Search/>
            </div>
        </div>
    );
}

export default App;
