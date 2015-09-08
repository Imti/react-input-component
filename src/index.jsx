import React from 'react';
import {InputComponent} from './inputComponent.jsx';

var inputComponentNames = ['first name', 'last name', 'address', 'city', 'country', 'phone number'];

React.render(
    <div>
        <div className='title'> React Input Component </div>
        {
            inputComponentNames.map(function(name, index) {
                var style = {
                    position: 'absolute',
                    top: (index * 10 + 20) + '%',
                    left: '50%'
                }
                return  <div style={style} key={index}>
                            <InputComponent class={'input-component'} label={name} />
                        </div>
            })
        }
    </div>,
    document.body
);
