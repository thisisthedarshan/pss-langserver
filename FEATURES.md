# PSS language server

The implementation of the PSS Language Support server was done due to my need to speed-up my programming when it came to PSS language. So, most of the server support is based on my own custom tweaks, requirements, style etc.

So, here are some things that you might be interested in -

## Settings

The language server expects some settings, which when not given will be assumed as default.

Below is a summary of the settings, their purposes, and the expected input types:

| Setting                | Description                                                                         | Expected Input Type           | Default Value |
|------------------------|-------------------------------------------------------------------------------------|-------------------------------|---------------|
| `PSS.tabspaces`        | Defines the amount of spaces to be used instead of tabs during formatting           | `number` (between 1 and 9)    | `4`           |
| `PSS.fileAuthor`       | Set the name of the code author when generating automatic file header               | `string` (e.g., "Darshan")    | `""`          |
| `PSS.formatPatterns`   | Patterns to align neatly when formatting PSS Code                                   | `string[]` (e.g., ["=","//"]) | `["=", "//"]` |
| `PSS.autoFormatHeader` | To automatically add [file header](#automatic-file-header) to processed file header | `boolean`                     | `false`       |

## Behavior

### Doxygen comment parsing
>
> [!NOTE]  
> The implementation is minimal for now - i.e. parsing logic is written but not used.
> In later versions, I plan to collect these comments and then generate information messages for autocompletion provisions, hover, etc.

### Variable, Function, Statement information comments

The current parsing logic assumes comments before a statement are the comments which correspond to that statement.

For example, consider this scenario:

```pss
component my_comp_c {
  /* Comment here is for item below and not for my_comp_c */
  int a = 69;
}
```

The comment `Comment here is for item below and not for my_comp_c` is used for `a` and not `my_comp_c`.

This is because of the parser grammar logic? I am not sure! But kindly bear with it.

### Goto definition and declaration

The language server supports goto declaration and goto definition.

### Semantic Highlighting

The language server supports full semantic highlighting for all keywords, variables, functions etc. used in your PSS code.

### Scopes

> [!NOTE]
> Currently, the extension does collect the code in a scoped-form but the autocompletion is not still smart-enough to provide scope-based suggestions.

### Automatic file header

When enabled, this tool automatically generates a Doxygen header for the specified file.
The generated header includes:

- **@file**: Specifies the file name.
- **@author**: Specifies the author of the file (from settings).
- **@brief**: Provides a placeholder for a brief description(initially empty).
- **@date**: Records the file's creation date.
- **Last Modified on**: Updates with the last modified date each time the file is modified.

---
This header is either added to new files or updated on subsequent file modifications, ensuring that the file's metadata remains current

### Enum item declaration

From the official Portable Stimulus Standard v3.0 LRM, the enum item value is defined as a constant expression. But for most cases, we just assign them as numbers. So, in the current LSP implementation, the parser assumes that when we set an enum value, we are always using an integer type.
