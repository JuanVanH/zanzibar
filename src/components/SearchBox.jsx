/* eslint-disable react/prop-types */
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

function SearchBox(props) {
  const { content, setContent } = props;
  return (
    <>
      <div className="SearchBoxContainer">
        <input placeholder="search units.." type="text" value={content} onChange={e => setContent(e.target.value)} />
        <SearchIcon className="Icon" />
      </div>
    </>
  );
}

export default SearchBox;
