/* eslint-disable quote-props */

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:i18next/recommended",
    "plugin:storybook/recommended",
    "plugin:perfectionist/recommended-natural-legacy",
  ],
  overrides: [
    {
      files: ["**/src/**/*.test.{ts,tsx}"],
      rules: {
        "i18next/no-literal-string": "off",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "i18next", "perfectionist"],
  rules: {
    "arrow-body-style": ["warn"],
    "i18next/no-literal-string": [
      "error",
      { ignoreAttribute: ["data-testid", "to"], markupOnly: true },
    ],
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    "import/order": ["warn"],
    "import/prefer-default-export": "off",
    "indent": [1, 2],
    "max-len": ["warn", { code: 80, ignoreComments: true, tabWidth: 2 }],
    "no-console": "off",
    "no-unused-vars": "off", // TODO: настроить
    "object-curly-newline": "off",
    "operator-linebreak": "off",
    "perfectionist/sort-imports": [
      "warn",
      {
        order: "asc",
        type: "natural",
      },
    ],
    "quotes": ["warn", "double"],
    "react/function-component-definition": "off",
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "react/jsx-indent": [1, 2],
    "react/jsx-props-no-spreading": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "react/self-closing-comp": ["warn"],
  },
};
