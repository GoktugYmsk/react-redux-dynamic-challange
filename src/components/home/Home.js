import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import './index.css';

library.add(faCog);

function Example1() {
  const [containers, setContainers] = useState([{ id: 0, value: '' }]);

  const addPerson = () => {
    const newId = containers.length;
    setContainers(containersInfo => [...containersInfo, { id: newId, value: '' }]);
  };

  const removePerson = (idToRemove) => {
    setContainers(containersInfo => containersInfo.filter(container => container.id !== idToRemove));
  };

  const handleInputChange = (id, value) => {
    setContainers(containersInfo => containersInfo.map(container => {
      if (container.id === id) {
        return { ...container, value };
      } else {
        return container;
      }
    }));
  };

  return (
    <div className='containerHome'>
      {containers.map((container, index) => (
        <div className={`container ${index === containers.length - 1 ? 'last' : ''}`} key={container.id}>
          <div className='ustBar'>
            <div className='circle'>
              <p>{container.value.trim().split(' ').map(word => word.charAt(0)).join('')}</p>
            </div>
            <input
              className='about'
              value={container.value}
              placeholder='e.g. Hire new PR agency by january 31'
              type='text'
              onChange={e => handleInputChange(container.id, e.target.value)}
            />
          </div>
          <hr className='hr' />
          <div className='altBar'>
            <h4>Owner:</h4>
            <select className='selected' name='' id=''>
              <option value='option1'>
                <strong>{container.value}</strong>
              </option>
            </select>
            <p className='altParagraph'>Show advanced options</p>
            <FontAwesomeIcon className='settingsIcon' color='purple' icon='cog' />
          </div>
          <button className={`remove ${index === containers.length - 1 ? 'add-last' : ''}`} onClick={() => removePerson(container.id)}>Remove</button>
        </div>
      ))}
      <button onClick={addPerson} className='add'>
        Add
      </button>
    </div>
  );
}

export default Example1;



