import React from 'react';
import style from 'styles/headerContainer.module.scss'

export const Header = () => {
    return (
        <div className={style.headerContainer}>
           <div>
               ID

           </div>
            <div>
             Заголовок
            </div>
                <div>
                 Описание
            </div>
        </div>
    );
};

