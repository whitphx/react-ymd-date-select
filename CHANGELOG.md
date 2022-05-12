# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Add

- `yearFormat`, `monthFormat`, `dayFormat`, and `locale` props, #74.

## [0.0.8] - 2022-05-12

No package update.
Just improved the release flow.

## [0.0.7] - 2022-05-12

### Fix

- `defaultYear`, `-Month`, and `-Day` prop types on the preset components, #66.

## [0.0.6] - 2022-05-11

### Add

- `defaultYear`, `-Month`, and `-Day` options can accept `"now"`, #62.
- `getDateString()`, #65.

## [0.0.5] - 2022-05-11

### Add

- Package info, #53.
- Rename `presets/material` to `presets/mui`.
- Set dropdown width in `presets/mui`, #60.
- Demo page.

## [0.0.4] - 2022-04-24

### Fixed

- Fix selection behavior with invalid y-m-d combinations, #39

## [0.0.3] - 2022-04-24

### Fixed

- Set the compile target as ES6, #36.

## [0.0.2] - 2022-04-24

### Fixed

- Add unit tests.
- Fix `useDateSelect()`'s behavior so that it does not call `onChange()` at mounting.

## [0.0.1] - 2022-04-22

- Initial implementation including `useDateSelect()`, `DateSelect()`, and `presets/*`.
