# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

## [0.2.0] - 2022-09-22

- React 18 support, #83. Thanks to @rike422.

## [0.1.0] - 2022-05-30

- Bump minor version.

## [0.0.12] - 2022-05-23

- Fix `repository.url` field in `package.json`, #80.
- Dependency updates.

## [0.0.11] - 2022-05-13

### Fix

- Rename `minYear` and `maxYear` to `firstYear` and `lastYear`, #78.
- Set the default value of `firstYear` as 2000, #78.

## [0.0.10] - 2022-05-13

### Fix

- Date existence check, #76.

## [0.0.9] - 2022-05-12

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
