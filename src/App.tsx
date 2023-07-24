import React from 'react';
import { Content } from 'ui/components/content/Content';
import { Search } from 'ui/components/searchComponent/Search';
import './styles/App.module.scss';


function App() {
    return (
        <div className='main-container'>
            <div>
                <Search/>
                <Content/>
            </div>
        </div>
    );
}

export default App;
