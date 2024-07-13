const config = {
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
    '^.+\\.md$': 'markdown-to-jsx',
  },
  roots: ['<rootDir>'],
  moduleDirectories: ['node_modules', 'src'],
};

module.exports = config;
