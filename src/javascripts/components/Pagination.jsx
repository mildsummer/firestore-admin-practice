import React from 'react';
import PropTypes from 'prop-types';
// import times from 'lodash.times';

const Pagination = (props) => {
  const {
    current,
    length,
    onSelect,
    disabled,
  } = props;
  return (
    <div className="pagination">
      <button
        className="pagination__button pagination__button--prev"
        type="button"
        disabled={current <= 1}
        onClick={() => { if (!disabled) onSelect(current - 1); }}
      >
        前へ
      </button>
      <button
        className="pagination__button pagination__button--next"
        type="button"
        disabled={current >= length}
        onClick={() => { if (!disabled) onSelect(current + 1); }}
      >
        次へ
      </button>
      {/* <ul className="pagination__list">
        {times(props.length).map((index) => (
          <li key={index} className="pagination__item">
            <button
              className="pagination__button"
              type="button"
              disabled={props.current === index + 1}
              onClick={() => props.onSelect(index + 1)}
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

Pagination.defaultProps = {
  current: 1,
  disabled: false,
};

Pagination.propTypes = {
  length: PropTypes.number.isRequired,
  current: PropTypes.number,
  onSelect: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default Pagination;
