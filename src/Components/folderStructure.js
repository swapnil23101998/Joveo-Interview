import React from 'react';
import { useState } from 'react';
import './style.css';

const FolderStructure = ({ folderData }) => {

    const [collapse, setCollapse] = useState(true); 
    const [updatedFolderData, setUpdateFolderData] = useState(folderData);
    const [addInput, setAddInput] = useState(false);
    const [enteredInput, setEnteredInput] = useState(''); 
    const [type, setType] = useState();


    const handleExpandCollapse = () => {
        setCollapse(!collapse);
    }

    const addNewFolder = () => {
        setAddInput(!addInput);
        setType('Folder');
    }

    const addNewFile = () => {
        setAddInput(!addInput);
        setType('File');
    } 

    const onInputEnter = (e) => {
        if (type === 'File' && e.key === 'Enter') {
            // let folderList = [...updatedFolderData, {
 
            //         id: Math.random(),
            //         name:  enteredInput,
            //         type: 'file'
 
            // }]
            let folderList = [...updatedFolderData.items, 
                {
 
                    id: Math.random(),
                    name:  enteredInput,
                    type: 'file'
         
                 }
            ]
            setUpdateFolderData((p) => {
                return {
                    ...p,
                    items: [ ...folderList ]
                }
                 
            } );
            setCollapse(false);
            setEnteredInput('');
            setAddInput(false);
        }
    }

  return (
    <>
        {
            updatedFolderData.map((item, index) => {
                if (item.type === 'folder') {
                    return (
                        <div key={item.id} className='folderWrapper'>
                            <span onClick={handleExpandCollapse} >📁 {item.name}</span>
                            <button onClick={addNewFolder}>Add Folder</button>
                            <button onClick={addNewFile}>Add File</button>
                            {addInput && <div><input type='text' value={enteredInput} autoFocus onChange={(e) => setEnteredInput(e.target.value)} onKeyDown={(e) => onInputEnter(e)} /></div>}
                            {!collapse && <FolderStructure folderData={item.items} />}
                        </div> 
                    )
                } else {
                    return (
                        <div key={item.id} className='folderWrapper'>
                           🗒️ {item.name}
                        </div>
                    )
                }
            }) 
        }
    </>
     
  )
}

export default FolderStructure