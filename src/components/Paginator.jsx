/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import { Button, ButtonGroup } from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import LastPageIcon from '@material-ui/icons/LastPage';
import { useState } from 'react';

function Paginator(props) {
  const [pageCount, setPageCount] = useState(0);
  const { setPage, itemCount, setItemCount, currentPage, totalItems } = props;

  useEffect(() => {
    setPageCount(Math.ceil(totalItems / itemCount));
  }, [totalItems, itemCount]);

  const setItemsOnPage = count => {
    setItemCount(count);
  };
  const firstPage = () => {
    setPage(1);
  };
  const lastPage = () => {
    setPage(pageCount);
  };
  const nextPage = () => {
    setPage(prev => {
      if (prev < pageCount) return prev + 1;
      return prev;
    });
  };
  const prevPage = () => {
    setPage(prev => {
      if (prev > 1) return prev - 1;
      return prev;
    });
  };
  return (
    <div style={{ marginTop: 10, position: 'relative' }}>
      <ButtonGroup size="small" aria-label="small outlined button group">
        <Button className="PageButton" onClick={firstPage}>
          <FirstPageIcon style={{ fontSize: 20 }} />
        </Button>
        <Button className="PageButton" onClick={prevPage}>
          <NavigateBeforeIcon style={{ fontSize: 20 }} />
        </Button>
        <Button className="PageButton" onClick={nextPage}>
          <NavigateNextIcon style={{ fontSize: 20 }} />
        </Button>
        <Button className="PageButton" onClick={lastPage}>
          <LastPageIcon style={{ fontSize: 20 }} />
        </Button>
      </ButtonGroup>
      <span
        style={{ marginLeft: 20, marginTop: -13, color: 'gray', paddingTop: 3, fontSize: 14, display: 'inline-block' }}
      >
        Page {currentPage} of {pageCount} - Total items: {totalItems}
      </span>
      <div style={{ position: 'absolute', right: 0, top: 0 }}>
        <ButtonGroup size="small" aria-label="small outlined button group">
          <Button className={`PageButton  ${itemCount === 10 ? ' selected' : ''}`} onClick={() => setItemsOnPage(10)}>
            10
          </Button>
          <Button className={`PageButton  ${itemCount === 20 ? ' selected' : ''}`} onClick={() => setItemsOnPage(20)}>
            20
          </Button>
          <Button className={`PageButton  ${itemCount === 50 ? ' selected' : ''}`} onClick={() => setItemsOnPage(50)}>
            50
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default Paginator;
