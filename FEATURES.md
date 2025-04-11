# PSS Language Server

The PSS Language Server was crafted to accelerate programming in the PSS language, tailored to specific needs and styles. Below, you’ll find a detailed overview of its features, settings, and behaviors, designed to enhance your coding experience.

---

## Table of Contents

- [Settings](#settings)
- [Behavior](#behavior)
  - [Doxygen Comment Parsing](#doxygen-comment-parsing)
  - [Variable, Function, Statement Information Comments](#variable-function-statement-information-comments)
  - [Goto Definition and Declaration](#goto-definition-and-declaration)
  - [Semantic Highlighting](#semantic-highlighting)
  - [Scopes](#scopes)
  - [Automatic File Header](#automatic-file-header)
  - [Enum Item Declaration](#enum-item-declaration)
- [Custom Requests](#custom-requests)
  - [1. `dsp/RequestDoxygenGeneration`](#1-dsprequestdoxygengeneration)

---

## Settings

The language server relies on specific settings to function optimally. If not provided, default values are applied. Here’s a summary of these settings, their purposes, and expected input types:

| Setting                | Description                                                                 | Expected Input Type        | Default Value |
|------------------------|-----------------------------------------------------------------------------|----------------------------|---------------|
| `PSS.tabspaces`        | Number of spaces to use instead of tabs during formatting                   | `number` (1-9)             | `4`           |
| `PSS.fileAuthor`       | Name of the code author for automatic file headers                          | `string` (e.g., "Darshan") | `""`          |
| `PSS.formatPatterns`   | Patterns to align neatly when formatting PSS code                           | `string[]` (e.g., ["=", "//"]) | `["=", "//"]` |
| `PSS.autoFormatHeader` | Automatically add a [file header](#automatic-file-header) to processed files | `boolean`                  | `false`       |

---

## Behavior

### Doxygen Comment Parsing

> [!NOTE]  
> Current parsing logic for Doxygen comments is minimal. Comments are collected but not yet leveraged for features like autocompletion or hover information. Stay tuned for future updates that will put these comments to work!

### Variable, Function, Statement Information Comments

The server assumes that comments immediately preceding a statement describe that statement. For example:

```pss
component my_comp_c {
  /* This comment sticks to 'a' like a loyal sidekick, not 'my_comp_c' */
  int a = 69;
}
```

> [!TIP]  
> Think of these comments as little love notes for your code—sometimes they cling to the wrong element, but they mean well!

### Goto Definition and Declaration

The language server supports both "Goto Declaration" and "Goto Definition" features, enabling seamless navigation through your PSS code.

### Semantic Highlighting

Full semantic highlighting is supported for keywords, variables, functions, and other elements, making your PSS code pop with clarity and readability.

### Scopes

> [!NOTE]  
> The extension collects code in a scoped format, but autocompletion isn’t yet scope-savvy. Expect smarter suggestions in future releases!

### Automatic File Header

When enabled, this feature generates a Doxygen header for the specified file, including:

- **@file**: The file name.
- **@author**: The author (from settings).
- **@brief**: A placeholder for a brief description (initially empty).
- **@date**: The file’s creation date.
- **Last Modified on**: Updates with each file modification.

> [!TIP]  
> It’s like having a meticulous librarian who stamps your files with the latest metadata—because who doesn’t love a well-documented masterpiece?

This header is added to new files or refreshed upon modification, keeping your file’s details current.

### Enum Item Declaration

Per the Portable Stimulus Standard v3.0 LRM, enum item values are constant expressions. However, the current LSP assumes these are integers, reflecting the most common use case.

> [!TIP]  
> Enums: the fancy way to count sheep—or anything else. We’ll handle the numbers; you bring the imagination!

---

## Custom Requests

Custom LSP requests are your ticket to a spiced-up IDE, unlocking quirky features like auto-documentation or project-specific magic. Why settle for vanilla when you can have extra flavor? Here’s what’s on the menu:

### 1. `dsp/RequestDoxygenGeneration`

#### Description

The `dsp/RequestDoxygenGeneration` request allows the client to send a code line, line number, and file URI to the server. The server generates a Doxygen comment for the first entity (e.g., variable or function) in the line—excluding keywords—and returns the comment along with the entity’s keyword.

#### Interfaces

##### `DoxygenGenerationRequest`

- **Purpose**: Structures the client’s request.
- **Fields**:
  - `line: string` - The code line to analyze.
  - `lineNumber: number` - The line number for precision.
  - `fileURI: string` - The file URI for context-aware processing (future-proofing!).

##### `DoxygenGenerationResponse`

- **Purpose**: Structures the server’s response.
- **Fields**:
  - `content: string` - The generated Doxygen comment.
  - `keyword: string` - The entity (e.g., variable or function name) tied to the comment.

#### Client Usage

1. **Send Request**: The client builds a `DoxygenGenerationRequest` with the line, line number, and file URI, then sends it via `dsp/RequestDoxygenGeneration`.
2. **Receive Response**: The server processes it, identifies the first entity, and returns a `DoxygenGenerationResponse` with the comment and keyword.
3. **Apply Comment**: The client can insert the `content` above the line and use the `keyword` for validation or display.

> [!TIP]  
> It’s like having a documentation fairy—just wave your wand (or send a request), and voilà, instant comments!
