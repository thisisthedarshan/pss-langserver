# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
