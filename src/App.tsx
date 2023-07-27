import React from 'react';
import {Search} from 'ui/components/searchComponent/Search';
import './styles/App.module.scss';
import {Pages} from "ui/pages/Pages";


function App() {
    return (
        <div className='main-container'>
            <div>
                <Search/>
                <Pages/>
            </div>
        </div>
    );
}

export default App;
