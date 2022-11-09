module.exports = {
  singleQuote: true,
  trailingComma: "all",
  arrowParens: "avoid",
  overrides: [
    {
      files: "*.json",
      options: {
        parser: "json-stringify",
      },
    },
  ],
};
