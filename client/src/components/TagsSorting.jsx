import React from 'react';

const TagsSorting = (props) => {

  var tagList = props.tagList.length >= 5 ? props.tagList.slice(0, 5) : props.tagList.slice(0, props.tagList.length);
  var filtersSection = [];

  if (tagList.length > 0) {
    filtersSection = tagList.map((tag, i) =>
      <span key={'filterTag' + i} className="filterTag">
        <label id={tag} className="filterTagLabel" htmlFor={'reviewFilter' + i}>
        <input type="checkbox" id={'reviewFilter' + i} onClick={(e) => { e.persist(); props.filterByTag(e); }} />
          <span className="filterTagOption">{`${tag} (${props.reviewNumber.filter((review) => review.tags.includes(tag)).length})`}</span>
        </label>
      </span>
    );
  }

  return (
    <div className="tagsSorting">
      <div className="dropdownFiltersLabel">Sort by</div>
      <div className="dropdownMenu">
        <select name="dropdownSorting" id="dropdownSorting" onChange={(e) => { e.persist(); props.filterBySelect(e); }}>
          <option value="Newest">Newest</option>
          <option value="Highest rating">Highest rating</option>
          <option value="Lowest rating">Lowest rating</option>
        </select>
      </div>
      <div className="dropdownFiltersLabel">Filters</div>
      <div className="filtersSection">
        {filtersSection}
      </div>
    </div>
  );
};

export default TagsSorting;