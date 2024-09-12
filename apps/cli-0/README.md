zyme
=================

A new CLI generated with oclif


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/zyme.svg)](https://npmjs.org/package/zyme)
[![Downloads/week](https://img.shields.io/npm/dw/zyme.svg)](https://npmjs.org/package/zyme)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g zyme
$ zyme COMMAND
running command...
$ zyme (--version)
zyme/0.0.0 darwin-arm64 node-v20.16.0
$ zyme --help [COMMAND]
USAGE
  $ zyme COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`zyme hello PERSON`](#zyme-hello-person)
* [`zyme hello world`](#zyme-hello-world)
* [`zyme help [COMMAND]`](#zyme-help-command)
* [`zyme plugins`](#zyme-plugins)
* [`zyme plugins add PLUGIN`](#zyme-plugins-add-plugin)
* [`zyme plugins:inspect PLUGIN...`](#zyme-pluginsinspect-plugin)
* [`zyme plugins install PLUGIN`](#zyme-plugins-install-plugin)
* [`zyme plugins link PATH`](#zyme-plugins-link-path)
* [`zyme plugins remove [PLUGIN]`](#zyme-plugins-remove-plugin)
* [`zyme plugins reset`](#zyme-plugins-reset)
* [`zyme plugins uninstall [PLUGIN]`](#zyme-plugins-uninstall-plugin)
* [`zyme plugins unlink [PLUGIN]`](#zyme-plugins-unlink-plugin)
* [`zyme plugins update`](#zyme-plugins-update)

## `zyme hello PERSON`

Say hello

```
USAGE
  $ zyme hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ zyme hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/apps/zyme/blob/v0.0.0/src/commands/hello/index.ts)_

## `zyme hello world`

Say hello world

```
USAGE
  $ zyme hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ zyme hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/apps/zyme/blob/v0.0.0/src/commands/hello/world.ts)_

## `zyme help [COMMAND]`

Display help for zyme.

```
USAGE
  $ zyme help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for zyme.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.11/src/commands/help.ts)_

## `zyme plugins`

List installed plugins.

```
USAGE
  $ zyme plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ zyme plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.7/src/commands/plugins/index.ts)_

## `zyme plugins add PLUGIN`

Installs a plugin into zyme.

```
USAGE
  $ zyme plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into zyme.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the ZYME_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the ZYME_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ zyme plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ zyme plugins add myplugin

  Install a plugin from a github url.

    $ zyme plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ zyme plugins add someuser/someplugin
```

## `zyme plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ zyme plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ zyme plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.7/src/commands/plugins/inspect.ts)_

## `zyme plugins install PLUGIN`

Installs a plugin into zyme.

```
USAGE
  $ zyme plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into zyme.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the ZYME_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the ZYME_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ zyme plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ zyme plugins install myplugin

  Install a plugin from a github url.

    $ zyme plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ zyme plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.7/src/commands/plugins/install.ts)_

## `zyme plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ zyme plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ zyme plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.7/src/commands/plugins/link.ts)_

## `zyme plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ zyme plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ zyme plugins unlink
  $ zyme plugins remove

EXAMPLES
  $ zyme plugins remove myplugin
```

## `zyme plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ zyme plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.7/src/commands/plugins/reset.ts)_

## `zyme plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ zyme plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ zyme plugins unlink
  $ zyme plugins remove

EXAMPLES
  $ zyme plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.7/src/commands/plugins/uninstall.ts)_

## `zyme plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ zyme plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ zyme plugins unlink
  $ zyme plugins remove

EXAMPLES
  $ zyme plugins unlink myplugin
```

## `zyme plugins update`

Update installed plugins.

```
USAGE
  $ zyme plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.7/src/commands/plugins/update.ts)_
<!-- commandsstop -->
