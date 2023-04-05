import React from 'react';

function CategoryBtn({titleCategory}) {
  return (
    <>
        <button className="btn btn-secondary" type="button"> {titleCategory} </button>
    </>
  );
}

export default CategoryBtn;