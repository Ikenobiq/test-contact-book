import CustomField from "./CustomField";

const CustomFieldList = ({
  customFields,
  checked,
  onCheckboxChange,
  onFieldChange,
}) => (
  <>
    {customFields.map((field, index) => (
      <CustomField
        key={"title"}
        field={index}
        checked={checked(field)}
        onCheckboxChange={(event) =>
          onCheckboxChange(field, event.target.checked)
        }
        onFieldChange={(event) => onFieldChange(event.target.value, index)}
      />
    ))}
  </>
);

export default CustomFieldList;
