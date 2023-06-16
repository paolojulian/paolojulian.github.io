import React, { FunctionComponent } from 'react';
import SearchIcon from '../Icons/SearchIcon';
import TextInput, { TextInputProps } from './TextInput';

export type SearchTextInputProps = {
  // No Props
} & Omit<TextInputProps, 'name' | 'label'>;

const SearchTextInput: FunctionComponent<SearchTextInputProps> = (props) => {
  return (
    <TextInput
      {...props}
      name="search"
      label="Search"
      theme="white"
      LabelPrependComponent={<SearchIcon />}
    />
  );
};

export default SearchTextInput;
