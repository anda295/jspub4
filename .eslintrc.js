module.exports = {

  "env": {
    "browser": true,
    "node": true
  },

  extends: ["airbnb-base"],

  rules: {
    "max-len": ["warn", 200],
    "arrow-body-style": ["error", "as-needed"],
    indent: ["warn", 2, { SwitchCase: 1 }],
    "no-param-reassign": ["error", { props: true }],
    "space-before-function-paren": [
      "error",
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "ignore"
      }
    ],
    eqeqeq: "warn",
    "no-restricted-syntax": "warn",
    "no-underscore-dangle": 0,
    "class-methods-use-this": 0,
    "no-plusplus": 0,
    "linebreak-style": 0,
    "no-confusing-arrow": 0,
    "no-mixed-operators": 0,
    "func-names": 0,
    "no-console": 0,
    "no-use-before-define": 0,
    "comma-dangle": 0,
    "guard-for-in": 0,
    "no-extend-native": 0,
    "no-empty": 0
  }
};
