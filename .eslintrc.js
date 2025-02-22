/* eslint-disable quote-props */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "indent": [1, 2],
    "quotes": ["warn", "double"],
    "max-len": ["warn", { code: 80, tabWidth: 2, ignoreComments: true }],
    "react/jsx-indent": [1, 2],
    "import/prefer-default-export": "off",
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "import/no-unresolved": "off",
    "react/function-component-definition": "off",
    "no-unused-vars": "off", // TODO: настроить
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "import/no-extraneous-dependencies": "off",
    "import/extensions": "off",
    "react/jsx-props-no-spreading": "off",
  },
};
