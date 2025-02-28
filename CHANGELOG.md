# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.6] - 2025-02-28

### Added

- Grammar to detect document blocks.
- Beautification of equals to blocks, colons and comments

### FIXED

- A minor bug fix where config refresh failed due to wrong check.
- Grammar Syntaxes for data_types.

## [0.1.5] - 2025-02-24

### Changed

- Dropped support for diagnostics completely.
- Formatter removes blank spaces in empty lines.

## [0.1.4] - 2025-02-24

### FIXED

- Formatter logic is fixed to remove adding of additional newlines
- Logic for scanning of the files to get all .pss files in current workspace is fixed to also work with file-paths having spaces
- Fixed Diagnostics Popup issue

## [0.1.3] - 2025-02-24

### Added

- Signatures for built-in functions

### Changed

- Updated diagnostics capabilities

## [0.1.2] - 2025-02-24

### Changed

- Updated formatter to keep empty lines as it is - earlier it used to keep spaces which was not necessary.
- Updated build sequence to make the binary executable by having the executable shebang in the binary.

## [0.1.1] - 2025-02-24

### Added

- Added formatting support to config
- Added enum items to autocompletion suggestions

### Changed

- Updated the logic to load builtin-keywords onto completions
- Fixed formatter logic

## [0.1.0] - 2025-02-21

### Added

- The base config for the project - with icon
- Changelog, gitignore, README, npmrc for the project
- Build scripts and configurations
- GitHub workflow to publish npm package
- Basic language server features - including completions (parsed from tree) and formatting
- Language Server now replies with built-in keywords too.
