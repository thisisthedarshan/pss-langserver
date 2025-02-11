# Language server for PSS

Welcome to the **PSS Language Server** project, a dedicated backend service for providing robust language support for **Accellera's Portable Stimulus Standard (PSS)** across any IDE that supports the LSP protocol.

## 🚀 Features (Planned and In Progress)

- **Syntax Analysis:** Fast and accurate parsing for PSS source files.
- **Code Completion:** Intelligent suggestions for PSS keywords, types, functions, and user-defined elements.
- **Signature Help:** Display function signatures with parameter descriptions.
- **Diagnostics:** Inline error detection and syntax validation.
- **Hover Documentation:** Detailed tooltips for PSS constructs.
- **Embedded Code Support:** Parsing and diagnostics for embedded C and SystemVerilog code.

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

To use the PSS LSP in any IDE that supports LSP:

1. Ensure the IDE is configured to recognize external language servers.
2. Provide the path to the `pss-lsp` binary installed globally by npm.
3. Verify that the IDE communicates using standard LSP communication protocols (like `stdio` ).

### Example for VS Code

This extension is used as a dependency for my [VS Code extension for PSS](https://github.com/thisisthedarshan/vscode-pss). If you'd like to check it out, you can find it on the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=Darshan.dsp-vsc-pss).

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
