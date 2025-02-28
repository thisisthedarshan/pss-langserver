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

> Ensure NodeJS is installed on your system.
> If not, just get it [from here](https://nodejs.org/en/download)

Just run `npm i -g pss-langserver` and start it using `pss-langserver`. To update to latest version (if already installed), run `npm update -g`.

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

Before integrating with any IDE, please ensure you have installed the language server globally by running:

```bash
npm install -g pss-langserver
```

This installs the `pss-langserver` command, which you can start using the `--stdio` option (among others).

---

### VS Code

1. **Install the Extension:**  
   - Visit the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=Darshan.dsp-vsc-pss) and download it directly
   - *Or* visit the [Project Repository](https://github.com/thisisthedarshan/vscode-pss) and follow the [Installation Guide](https://github.com/thisisthedarshan/vscode-pss/blob/main/INSTALL.md)
   - *Or* Open VS Code and navigate to the Extensions view (<kbd>Ctrl+Shift+X</kbd> on Windows/Linux or <kbd>Cmd+Shift+X<kbd> on macOS). Search for **Darshan.dsp-vsc-pss** click **Install**.  
   - *Or* Launch VS Code Quick Open (<kbd>Ctrl+P</kbd>), paste the following command, and press enter:  ```ext install darshan.dsp-vsc-pss```
  
2. **Configure Workspace Settings:**  
   - Open VS Code settings (via File → Preferences → Settings or by clicking the gear icon).  
   - Under the extension’s section (titled "PSS Support"), set the following options:  
     - **PSS.tabspaces:** Number of tab spaces to use (default is 4; allowed values: 1–9).  
     - **PSS.fileAuthor:** Specify the author name for automated file headers.  
   - Alternatively, add the following to your workspace or user `settings.json`:

     ```json
     {
       "PSS.tabspaces": 4,
       "PSS.fileAuthor": ""
     }
     ```

---

### VIM

1. **Install a Plugin Manager:**  
   - If you don’t have one already, install [vim-plug](https://github.com/junegunn/vim-plug).

2. **Install an LSP Client Plugin:**  
   - For example, using [coc.nvim](https://github.com/neoclide/coc.nvim):  
     - Add this to your `~/.vimrc`:

       ```vim
       call plug#begin('~/.vim/plugged')
       Plug 'neoclide/coc.nvim', {'branch': 'release'}
       call plug#end()
       ```

     - Restart VIM and run `:PlugInstall`.

3. **Configure the Language Server in coc.nvim:**  
   - Create or update your `~/.vim/coc-settings.json` with the following:

     ```json
     {
       "languageserver": {
         "pss": {
           "command": "pss-langserver",
           "args": ["--stdio"],
           "filetypes": ["pss"],
           "rootPatterns": ["*.pss"],
           "initializationOptions": {
             "PSS": {
               "tabspaces": 4,
               "fileAuthor": ""
             }
           }
         }
       }
     }
     ```

4. **Workspace Configuration:**  
   - Make sure your VIM workspace (or project folder) includes your `.pss` files. Coc.nvim will automatically activate the language server when you open such a file.

---

### NeoVim

1. **Install a Plugin Manager:**  
   - If needed, use [vim-plug](https://github.com/junegunn/vim-plug).

2. **Install nvim-lspconfig:**  
   - Add this to your `init.vim` or `init.lua`:

     ```vim
     call plug#begin('~/.local/share/nvim/plugged')
     Plug 'neovim/nvim-lspconfig'
     call plug#end()
     ```

   - Run `:PlugInstall` within NeoVim.

3. **Configure the Language Server:**  
   - In your `init.lua` (or equivalent), add:

     ```lua
     require('lspconfig').pss_langserver = {
       default_config = {
         cmd = {"pss-langserver", "--stdio"},
         filetypes = {"pss"},
         root_dir = function(fname)
         return lspconfig.util.root_pattern("*.pss")(fname)
            or lspconfig.util.path.dirname(fname)  -- Fallback to the file's directory
         end,
         settings = {
           PSS = {
             tabspaces = 4,
             fileAuthor = ""
           }
         }
       }
     }
     require('lspconfig').pss_langserver.setup{}

     ```

- Replace `"pss_langserver"` with your desired server name if necessary.

4. **Workspace Setup:**  
   - Ensure that your project directories containing `.pss` files are opened in NeoVim, so the language server activates automatically.

---

### GVIM

GVIM uses the same configuration as VIM. Follow these steps:

1. **Install a Plugin Manager:**  
   - Use [vim-plug](https://github.com/junegunn/vim-plug) if not already installed.

2. **Install an LSP Client Plugin:**  
   - Add coc.nvim as shown in the VIM section to your GVIM configuration.

3. **Configure the Language Server:**  
   - Update your `coc-settings.json` (usually located in your home directory or GVIM configuration folder) with the same settings as for VIM:

     ```json
     {
       "languageserver": {
         "pss": {
           "command": "pss-langserver",
           "args": ["--stdio"],
           "filetypes": ["pss"],
           "rootPatterns": ["*.pss"],
           "initializationOptions": {
             "PSS": {
               "tabspaces": 4,
               "fileAuthor": ""
             }
           }
         }
       }
     }
     ```

4. **Restart GVIM:**  
   - Restart GVIM to load the new configuration. Files with the `.pss` extension will trigger the language server.

---

### EMACS

1. **Install lsp-mode:**  
   - Configure MELPA in your Emacs configuration (`init.el` or equivalent):

     ```elisp
     (require 'package)
     (add-to-list 'package-archives '("melpa" . "https://melpa.org/packages/") t)
     (package-initialize)
     (unless (package-installed-p 'lsp-mode)
       (package-refresh-contents)
       (package-install 'lsp-mode))
     ```

2. **Configure lsp-mode for the PSS Language Server:**  
   - Add the following configuration snippet to your Emacs configuration:

     ```elisp
     (require 'lsp-mode)
     
     ;; Associate .pss files with a custom major mode if needed
     (add-to-list 'auto-mode-alist '("\\.pss\\'" . text-mode))
     
     (lsp-register-client
      (make-lsp-client :new-connection (lsp-stdio-connection '("pss-langserver" "--stdio"))
                       :activation-fn (lsp-activate-on "pss")
                       :server-id 'pss-ls
                       :initialized-fn (lambda (workspace)
                                         (with-lsp-workspace workspace
                                           (lsp--set-configuration
                                            `(:PSS (:tabspaces 4
                                                    :fileAuthor ""))))))
     ))
     
     ;; Optional: Automatically start lsp-mode for .pss files
     (add-hook 'text-mode-hook #'lsp)
     ```

   - This registers the language server for files identified with `.pss` and sets the initial configuration for `PSS.tabspaces` and `PSS.fileAuthor`.

3. **Workspace and File Setup:**  
   - Open any `.pss` file in EMACS, and lsp-mode will automatically activate the PSS language server with the specified settings.

---

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
