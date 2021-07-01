const fs = require('fs');

const folders = fs.existsSync('src') ?
  fs.readdirSync('src', { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
  : undefined;

module.exports = {
  extends: ['plugin:prettier/recommended'],
  plugins: ['simple-import-sort'],
  overrides: [
    {
      files: ['*.tsx', '*.ts', '*.js', '*.jsx'],
      rules: {
        'simple-import-sort/imports': [
          'warn',
          {
            groups: [
              // Packages. `react` related packages come first.
              // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
              ['^\\u0000', '^react$', '^prop-types$', '^@?\\w', '^redux$'],
              // Absolute imports
              folders ? [`^(${folders.join('|')})(/.*|$)`] : undefined,
              // Relative imports.
              ['^\\.'],
              // for scss imports.
              ['^[^.]'],
            ].filter((rule) => rule),
          },
        ],
      },
    },
  ],
};
