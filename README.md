# Language server for PSS

[![NPM Version](https://img.shields.io/npm/v/pss-langserver)](https://www.npmjs.com/package/pss-langserver)
![NPM Downloads](https://img.shields.io/npm/d18m/pss-langserver?label=NPM%20Downloads)
[![NPM License](https://img.shields.io/npm/l/pss-langserver)](LICENSE)

Welcome to the **PSS Language Server** project, a dedicated backend service for providing robust language support for **Accellera's Portable Stimulus Standard (PSS)** across any IDE that supports the LSP protocol.

## 🚀 Features (Planned and In Progress)

- **Syntax Analysis:** Fast and accurate parsing for PSS source files.
- **Code Completion:** Intelligent suggestions for PSS keywords, types, functions, and user-defined elements.
- **Signature Help:** Display function signatures with parameter descriptions.
- **Diagnostics:** Inline error detection and syntax validation.
- **Hover Documentation:** Detailed tooltips for PSS constructs.
- **Embedded Code Support:** Parsing and diagnostics for embedded C and SystemVerilog code.

## Installation

> [!NOTE]
> Ensure NodeJS is installed on your system.
> If not, just get it [from here](https://nodejs.org/en/download)

Just run `npm i -g pss-langserver` and start it using `pss-langserver`. To update to latest version (if already installed), run `npm update -g`.

## ✨ Features

Check out the [features](FEATURES.md) page for more information.

## 🔧 Development Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/thisisthedarshan/pss-langserver.git
   cd pss-langserver
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the project:

   ```bash
   npm run build
   ```

4. Start the language server in development mode:

   ```bash
   npm run dev
   ```

## 📑 Usage in IDEs

Check the [IDE Setup Guide](IDE-Setup.md) to set the language server up for your favourite IDE. Feel free to create a PR with instructions to setup this language server with your favourite IDE, if not present :)

## 📚 Learn More

- Explore the [Portable Stimulus Standard (PSS) Specification](https://www.accellera.org/activities/working-groups/portable-stimulus).
- Read the official [PSS 3.0 Language Reference Manual](https://www.accellera.org/images/downloads/standards/pss/Portable_Test_Stimulus_Standard_v3.0.pdf).

## 💡 Contributing

Contributions are welcome! If you would like to contribute, please:

- Fork the repository.
- Create a new branch.
- Submit a pull request with a detailed description of your changes.

## 📜 License

This project is released under the [GNU General Public License v3.0](LICENSE).

---

### Thank You for Supporting the PSS Development Ecosystem! 🎉
