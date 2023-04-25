import React, { useState } from 'react'
import s from './style.module.css'
import { Search as SearchIcon } from 'react-bootstrap-icons'

const SearchBar = ({onSubmit}) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const submit = (event) => {
    if (event.key === 'Enter' && event.target.value.trim() !== ''){
        onSubmit(value);
        setValue('');
    }
  }
  return (
    <div>
        <SearchIcon size={27} className={s.icon} />
        <input onKeyUp={submit} onChange={handleChange} value={value} type="text" className={s.input} placeholder={'Search for a show'} />
    </div>
  )
}

export default SearchBar