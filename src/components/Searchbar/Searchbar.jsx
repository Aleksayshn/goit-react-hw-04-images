import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { alertOnEmptyQuery } from 'services';
import { Header, Form, Input, Button } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => setSearchQuery(e.currentTarget.value);

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') return alertOnEmptyQuery();
    onSubmit(searchQuery);
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <BsSearch size={24} />
        </Button>
        <Input
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={handleChange}
        />
      </Form>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};