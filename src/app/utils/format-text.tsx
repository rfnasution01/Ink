export const capitalizeFirstLetterFromLowercase = (
  string = "",
  separator = " "
) => {
  if (!string) {
    return "-";
  }

  return string
    .split(separator) // " " for "EXAMPLE WORD", "_" for "EXAMPLE_WORD", and so on...
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join(" ");
};

// input: "EXAMPLE WORD" => output: "Example Word"
export const capitalizeFirstLetterFromUppercase = (
  string = "",
  separator = " "
) => {
  if (!string) {
    return "-";
  }

  return string
    .split(separator)
    .map((word) => {
      const upperCaseWord = word.toUpperCase();

      switch (upperCaseWord) {
        case "RSUD":
        case "PT":
          return upperCaseWord;
        default:
          return `${word.charAt(0)}${word.slice(1).toLowerCase()}`;
      }
    })
    .join(" ");
};
