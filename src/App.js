import React from 'react';
import FolderStructure from './Components/folderStructure';
import { data } from './data';
import MovieList from './Components/MovieList';

const App = () => {

  return (
    <>
        {/* <FolderStructure folderData={data} /> */}
        <MovieList />
    </>
  )
}

export default App