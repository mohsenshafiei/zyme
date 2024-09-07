const Configuration = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [0, "always", 72],
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "docs", "chore", "refactor", "ci", "test", "revert"],
    ],
  },
};

export default Configuration;
