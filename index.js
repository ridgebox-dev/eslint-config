module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  rules: {
    'linebreak-style': 'off',
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.tsx'],
      },
    ],
    'import/prefer-default-export': [0],
    'react/forbid-prop-types': [
      1,
      {
        forbid: [
          'array',
          'object'
        ],
      },
    ],
    'func-names': ['warn', 'as-needed'],
    'object-curly-newline': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        components: ['Link'],
        specialLink: ['to'],
      },
    ],
    'max-len': [
      'warn',
      {
        code: 120,
        ignoreStrings: true,
      },
    ],
    'no-extra-parens': [
      'error',
      'all',
      {
        ignoreJSX: 'multi-line',
        enforceForArrowConditionals: false,
        enforceForNewInMemberExpressions: false,
        nestedBinaryExpressions: false,
      },
    ],
    'arrow-body-style': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: [
          'src'
        ],
      },
    },
    ecmascript: 10,
    jsx: true,
  },
  env: {
    browser: true,
    node: true,
  },
  plugins: [
    'react-hooks',
  ]
};
