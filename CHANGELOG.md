# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

### Added

- Custom request for client to get comments generated for a given line. This logic simply finds first instance of keyword from a line and create a comment (regular or doxygen style) depending on the type of keyword.

### Fixed

- Returning of undefined node from `getNodeFromNameArray` function is fixed to return a valid value - when found.

## [0.3.1] - 2025-04-10

### Fixed

- Fixed a bug which accidentally detected data declarations as assignments.

## [0.3.0] - 2025-04-09

### Added

- Function call statements and logic to the grammar
- Grammar to detect file information from pss files
- More options to let user customize the formatting. User can now opt to have custom pattern formatting. The user can also keep the options empty to skip formatting the patterns. The user can now also let the formatter auto-add headers when updating saved ones.
- Grammar to detect address related operations and register usage.
- An advanced parser to parse and gather more information about a pss source file.
- There are new functions to use the advanced parser. These include a new goto definition provider, and an autocompletion provider.
- There is a new hover provider to provide basic information about a hovered object.
- Caching to speed-up the process of providing auto-completions and hover info for user.

### Fixed

- Fixed small grammar mistakes in recognizing some statements
- Updated semantic token generation logic
- Updated logic to get file paths
- Configuration options to let user have empty setting for patterns
- Formatting logic for patterns to only format standalone pattern. This also excludes formatting when lines have brackets or in string.
- The formatter now skips aligning contents inside brackets.
- The built-in keywords and function information is now improved with more information and relevant sections mentioned. The function signatures now also include the package they belong to.

### Removed

- Dropped colons from default alignment patterns.

## [0.2.2] - 2025-03-06

### Fixed

- The error listener from antlr is removed since it caused problems, flooding stderr with messages - it will be later taken care of.
- The goto definition provider logic was updated to provide proper goto definitions.
- Server now requests the client to refresh semantic tokens on document saves and initialization.
- Added checks for visitor to ensure that non-null objects aren't called.

### Changed

- The logic for reading of files from current folder is updated to ensure that it stays cross platform.

## [0.2.1] - 2025-03-06

### Added

- Added printing of version when `--version` is passed from command line.
- Updated functionality to capture workspace files, even if user doesn't give workspace info - this is because PSS code is multi-file dependent.

## [0.2.0] - 2025-03-05

### Added

- New grammar for doxygen style comments
- Added semantic highlighting
- Added go-to definition functionality

### Changed

- Dropped sending refresh diagnostics message on initialization.
- Updated logic to parse data in structure format from ast

## [0.1.6] - 2025-02-28

### Added

- Grammar to detect document blocks.
- Beautification of equals to blocks, colons and comments

### Fixed

- A minor bug fix where config refresh failed due to wrong check.
- Grammar Syntaxes for data_types.

## [0.1.5] - 2025-02-24

### Changed

- Dropped support for diagnostics completely.
- Formatter removes blank spaces in empty lines.

## [0.1.4] - 2025-02-24

### Fixed

- Formatter logic is Fixed to remove adding of additional newlines
- Logic for scanning of the files to get all .pss files in current workspace is Fixed to also work with file-paths having spaces
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
