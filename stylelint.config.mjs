/** @type {import("stylelint").Config} */
export default {
  extends: ['stylelint-config-standard-scss'],
  rules: {
    // Allow `@use '...' as *` (used throughout for mixin imports)
    'scss/at-use-no-unnamespaced': null,
    // Mixin calls with optional args use () — not truly "argumentless"
    'scss/at-mixin-argumentless-call-parentheses': null,
    // Multi-line calc expressions split across lines are fine
    'scss/operator-no-newline-after': null,
    // CSS Modules class names: camelCase (includes plain lowercase as a subset)
    'selector-class-pattern': '^[a-z][a-zA-Z0-9]*$',
    // Theme files group properties with blank lines — Prettier handles formatting
    'custom-property-empty-line-before': null,
    'declaration-empty-line-before': null,
    'rule-empty-line-before': null,
    'at-rule-empty-line-before': null,
    'comment-empty-line-before': null,
    // Hue values: allow bare 0 in color functions
    'hue-degree-notation': null,
  },
}
