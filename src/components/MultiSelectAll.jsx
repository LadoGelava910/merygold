import React, { useState, useEffect } from "react";
import DropdownButton from "react-multiselect-checkboxes/lib/DropdownButton";
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";

const MultiSelectAll = ({ filterByCategory }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = [
    { label: "ჯვრები", value: "crosses" },
    { label: "ბეჭდები", value: "rings" },
    { label: "საყურეები", value: "earings" },
    { label: "სამაჯურები", value: "bracelets" },
    { label: "საათები", value: "watches" },
    { label: "ჯაჭვები", value: "chains" },
    { label: "კულონები", value: "culons" },
  ];
  useEffect(() => {
    setSelectedOptions([{ label: "ყველა", value: "*" }, ...options]);
  }, []);

  function getDropdownButtonLabel({ placeholderButtonLabel, value }) {
    if (value && value.some((o) => o.value === "*")) {
      return `${placeholderButtonLabel}: ყველა`;
    } else {
      return `${placeholderButtonLabel}: ${value.length}`;
    }
  }

  function onChange(value, event) {
    if (event.action === "select-option" && event.option.value === "*") {
      filterByCategory(this.options);
      this.setState(this.options);
    } else if (
      event.action === "deselect-option" &&
      event.option.value === "*"
    ) {
      filterByCategory([]);
      this.setState([]);
    } else if (event.action === "deselect-option") {
      filterByCategory(value.filter((o) => o.value !== "*"));
      this.setState(value.filter((o) => o.value !== "*"));
    } else if (value.length === this.options.length - 1) {
      filterByCategory(this.options);
      this.setState(this.options);
    } else {
      filterByCategory(value);
      this.setState(value);
    }
  }

  return (
    <ReactMultiSelectCheckboxes
      style={{ width: "500px" }}
      options={[{ label: "ყველა", value: "*" }, ...options]}
      placeholderButtonLabel="კატეგორია"
      getDropdownButtonLabel={getDropdownButtonLabel}
      value={selectedOptions}
      onChange={onChange}
      setState={setSelectedOptions}
    ></ReactMultiSelectCheckboxes>
  );
};

export default MultiSelectAll;
