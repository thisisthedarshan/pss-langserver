# IDE Setup Guide for PSS Language Server

This guide is aimed to help you setup the PSS Language server for your favourite IDE.

> [!NOTE]

> Before integrating with any IDE (Other than VS Code), please ensure you have installed the language server globally by running:
>
>```bash
> npm install -g pss-langserver
>```
>
> This installs the `pss-langserver` command, which you can start using the `--stdio` option (among others).
>
> Before running the above command, ensure NodeJS is installed on your system.
> If not, just get it [from here](https://nodejs.org/en/download)

-------------------------------------------------------------------------

## Instructions for

1. [Visual Studio Code](#visual-studio-code)
2. [Vim or GViM](#vim-or-gvim)
3. [NeoVim](#neovim)
4. [Emacs](#emacs)
5. [Notepad++](#notepad)
6. [Sublime Text](#sublime-text)

### [Visual Studio Code](https://code.visualstudio.com/)

- **Extension:** Install via one of these methods:
  - VS Code Marketplace: Search `Darshan.dsp-vsc-pss` in Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X`) and click **Install**.
  - Quick Open: Run `ext install darshan.dsp-vsc-pss` in `Ctrl+P`.
  - Repository: Follow [Installation Guide](https://github.com/thisisthedarshan/vscode-pss/blob/main/INSTALL.md).
- **Config:** Add to `settings.json`:

  ```json
  {
    "PSS.tabspaces": 4,
    "PSS.fileAuthor": "",
    "PSS.formatPatterns": ["=", "//"],
    "PSS.autoFormatHeader": false
  }
  ```

### [Vim](https://www.vim.org/) or GViM

- **Plugin:** `git clone https://github.com/prabirshrestha/vim-lsp ~/.vim/pack/my_plugins/start/vim-lsp`
- **Config:** Add to `vimrc`:

  ```vim
  call lsp#register_server({
    \ 'name': 'PSS',
    \ 'cmd': {server_info -> ['pss-langserver', '--stdio']},
    \ 'allowlist': ['pss'],
    \ })
  autocmd bufnewfile,bufread *.pss set filetype=pss
  call lsp#settings('PSS', {
    \ 'PSS.tabspaces': 4,
    \ 'PSS.fileAuthor': '',
    \ 'PSS.formatPatterns': ['=', '//'],
    \ 'PSS.autoFormatHeader': v:false
    \ })
  ```

### [NeoVim](https://neovim.io/)

- **Plugin:** `use 'neovim/nvim-lspconfig'`
- **Config:** Add to `init.lua`:

  ```lua
  require('lspconfig').pss_langserver.setup({
    cmd = {'pss-langserver', '--stdio'},
    filetypes = {'pss'},
    settings = {
      ["PSS.tabspaces"] = 4,
      ["PSS.fileAuthor"] = "",
      ["PSS.formatPatterns"] = {"=", "//"},
      ["PSS.autoFormatHeader"] = false
    }
  })
  vim.filetype.add({extension = {pss = 'pss'}})
  ```

### [Emacs](https://www.gnu.org/software/emacs/)

- **Plugin:** Install `lsp-mode` from MELPA
- **Config:** Add to Emacs config:

  ```elisp
  (require 'lsp-mode)
  (lsp-register-client
   (make-lsp-client :new-id 'pss
                    :new-command '("pss-langserver" "--stdio")
                    :new-root-language-id "pss"
                    :new-file-types '("pss")))
  (setq lsp-clients-configuration
        `(pss (:settings (("PSS.tabspaces" . 4)
                          ("PSS.fileAuthor" . "")
                          ("PSS.formatPatterns" . ("=" "//"))
                          ("PSS.autoFormatHeader" . nil)))))
  (add-to-list 'auto-mode-alist '("\\.pss\\'" . pss-mode))
  ```

### [Notepad++](https://notepad-plus-plus.org/)

- **Plugin:** Install `npp-lsp` via Plugin Manager
- **Config:** In `npp-lsp` Settings > Servers:
  - Name: `PSS`, Command: `pss-langserver --stdio`, Extensions: `.pss`
  - Initialization Options:

    ```json
    {
      "PSS.tabspaces": 4,
      "PSS.fileAuthor": "",
      "PSS.formatPatterns": ["=", "//"],
      "PSS.autoFormatHeader": false
    }
    ```

### [Sublime Text](https://www.sublimetext.com/)

- **Plugin:** Install `LSP` from Package Control
- **Config:** In `LSP.sublime-settings`:

  ```json
  {
    "clients": {
      "pss": {
        "command": ["pss-langserver", "--stdio"],
        "selector": "source.pss",
        "settings": {
          "PSS.tabspaces": 4,
          "PSS.fileAuthor": "",
          "PSS.formatPatterns": ["=", "//"],
          "PSS.autoFormatHeader": false
        }
      }
    }
  }
  ```
