import React from 'react';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import {AiOutlineSearch} from "react-icons/ai"

import { setSearchValue } from '../../redux/slices/filterSlice';

import cls from "./Search.module.scss";


const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef();


  const onClickClear = () => {
    dispatch(setSearchValue(""));
    setValue("");
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 150),
    [],
  );


  const onChangeInput = (e) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };


  return (
    <div className={cls.root}>
        <AiOutlineSearch className={cls.search}/>
        <input
          ref={inputRef}
          value={value}
          onChange={onChangeInput}
          placeholder="Поиск пицы..."
        />
        {
          value && (
            <svg 
              onClick={onClickClear}
              className={cls.clearIcon} 
              viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/>
            </svg>
          )
        }
    </div>
  )
}

export default Search;
