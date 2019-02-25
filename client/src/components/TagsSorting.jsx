import React from 'react';

const TagsSorting = (props) => {

  var tagList = props.tagList.length >= 3 ? props.tagList.slice(0, 3) : props.tagList.slice(0, props.tagList.length);
  var filtersSection = [];

  if (tagList.length > 0) {
    filtersSection = tagList.map((tag, i) =>
      <span key={'filterTag' + i} className="filterTag">
        <input type="checkbox" id={'reviewFilter' + i} onClick={(e)=>{e.persist(); props.filterByTag(e)}}/>
        <label id={tag} htmlFor={'reviewFilter' + i}>
          <span className="filterTagOption">{tag + 'word'}</span>
        </label>
      </span>
    );
  }

  return (
    <div className="tagsSorting">
      <div className="dropdownLabel">Sort by</div>
      <div className="dropdownMenu">
      </div>
      <div className="filtersLabel">Filters</div>
      <div className="filtersSection">
      {filtersSection}
      </div>
    </div>
  )
}

export default TagsSorting;