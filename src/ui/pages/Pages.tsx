import React from 'react';
import {Routes, Route,Navigate} from "react-router-dom";
import {Content} from "ui/components/content/Content";

export const Pages = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Navigate to='/posts'/>}/>
                <Route path='/posts' element={<Content/>}/>
            </Routes>
        </div>
    );
};
