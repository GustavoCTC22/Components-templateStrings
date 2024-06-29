export function input({
  id,
  label,
  type,
  name,
  placeholder,
  classname,
  required,
}) {
  return `
  <div class="input-wrapper">
    ${label ? `<label for="${id}">${label}</label>` : ""}
    <input 
      id="${id}"
      type="${type}"
      name="${name}"
      placeholder="${placeholder}"
      class="${classname}"
      ${required ? "required" : ""}
    />
  </div>
  `;
}

export function selectInput({
  label,
  id,
  name,
  options,
  required = false,
  value = "",
}) {
  console.log(value);
  const optionsHTML = options
    ? options
        .map(
          (option) =>
            `<option value="${option}" ${
              option === value ? "selected" : ""
            } >${option}</option>`
        )
        .join("")
    : "";

  return `
      <div class="input">
        ${
          label
            ? `<label for="${id}" class="content-xs overline">${label}</label>`
            : ""
        }
       
        <div class="input__container">
          <select
            class="input__content"
            id="${id}"
            name="${name ? name : id}"
            ${required ? "required" : ""}
          >
            
            ${optionsHTML}
          </select>
        </div>
      </div>`;
}
