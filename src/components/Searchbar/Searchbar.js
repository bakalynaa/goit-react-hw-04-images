import React, { useState } from 'react';
import styles from './Searchbar.module.css'

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('')


  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query)
    setQuery('')
  };

    return (
      <header className={styles.Searchbar}>
        <form onSubmit={handleSubmit} className={styles.SearchForm}>
            <button
              type="submit"
              className={styles.SearchFormButton}
            >Search
            </button>
            <input
              className={styles.SearchFormInput}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={query}
              onChange={handleChange}
            />
        </form>
      </header>
    );
}

export default Searchbar;
