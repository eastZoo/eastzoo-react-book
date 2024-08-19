import React, { ChangeEvent, FormEvent, useState } from "react";
import { SearchBar } from "../molcules/SearchBar";

interface SearchContainerProps {
  components: React.ReactElement[];
  searchTitle?: string;
  fileInfo?: React.ReactElement;
  titleButtons?: React.ReactElement;
  gridButtons?: React.ReactElement;
  onSearch: (search: any) => void;
  defaultValues?: any;
}

export const SearchContainer = ({
  defaultValues = {},
  components,
  searchTitle,
  fileInfo,
  titleButtons,
  gridButtons,
  onSearch,
}: SearchContainerProps) => {
  const [formValues, setFormValues]: any = useState(defaultValues);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    userOnChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  ) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });

    if (userOnChange) {
      userOnChange(e);
    }
  };

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(formValues);
  };

  const searchInput = (
    <>
      {components.map((Component, index) => {
        return (
          <div key={index}>
            {React.cloneElement(Component, {
              onChange: (
                e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
              ) => handleChange(e, Component.props.onChange),
              value: formValues[Component.props.name] || "",
            })}
          </div>
        );
      })}
    </>
  );

  return (
    <SearchBar
      searchInput={searchInput}
      fileInfo={fileInfo}
      searchTitle={searchTitle}
      titleButtons={titleButtons}
      gridButtons={gridButtons}
      onSearch={handleSearch}
    />
  );
};
