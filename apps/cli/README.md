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
zyme/1.0.5 darwin-arm64 node-v20.16.0
$ zyme --help [COMMAND]
USAGE
  $ zyme COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`zyme auth login [FILE]`](#zyme-auth-login-file)
* [`zyme auth logout [FILE]`](#zyme-auth-logout-file)
* [`zyme auth register [FILE]`](#zyme-auth-register-file)
* [`zyme dependencies [FILE]`](#zyme-dependencies-file)
* [`zyme env [FILE]`](#zyme-env-file)
* [`zyme feedback [FILE]`](#zyme-feedback-file)
* [`zyme help [COMMAND]`](#zyme-help-command)
* [`zyme info [FILE]`](#zyme-info-file)
* [`zyme init [FILE]`](#zyme-init-file)
* [`zyme learn [FILE]`](#zyme-learn-file)
* [`zyme plugins [FILE]`](#zyme-plugins-file)
* [`zyme plugins add PLUGIN`](#zyme-plugins-add-plugin)
* [`zyme plugins:inspect PLUGIN...`](#zyme-pluginsinspect-plugin)
* [`zyme plugins install PLUGIN`](#zyme-plugins-install-plugin)
* [`zyme plugins link PATH`](#zyme-plugins-link-path)
* [`zyme plugins remove [PLUGIN]`](#zyme-plugins-remove-plugin)
* [`zyme plugins reset`](#zyme-plugins-reset)
* [`zyme plugins uninstall [PLUGIN]`](#zyme-plugins-uninstall-plugin)
* [`zyme plugins unlink [PLUGIN]`](#zyme-plugins-unlink-plugin)
* [`zyme plugins update`](#zyme-plugins-update)
* [`zyme publish [FILE]`](#zyme-publish-file)
* [`zyme search [FILE]`](#zyme-search-file)
* [`zyme update [FILE]`](#zyme-update-file)
* [`zyme whatsnew [FILE]`](#zyme-whatsnew-file)
* [`zyme whoami [FILE]`](#zyme-whoami-file)

## `zyme auth login [FILE]`

Logs the user into their zyme account, allowing access to personalized settings and features.

```
USAGE
  $ zyme auth login [FILE] [-u <value>] [-p <value>] [--token <value>]

ARGUMENTS
  FILE  file to read

FLAGS
  -p, --password=<value>  Password for login
  -u, --username=<value>  Username for login
      --token=<value>     Login using an authentication token

DESCRIPTION
  Logs the user into their zyme account, allowing access to personalized settings and features.

EXAMPLES
  $ zyme auth login
```

_See code: [src/commands/auth/login.ts](https://github.com/mohsenshafiei/zyme/blob/v1.0.5/src/commands/auth/login.ts)_

## `zyme auth logout [FILE]`

Logs the user out of their zyme account, removing access to personalized settings.

```
USAGE
  $ zyme auth logout [FILE] [-f]

ARGUMENTS
  FILE  file to read

FLAGS
  -f, --force  Force logout without confirmation

DESCRIPTION
  Logs the user out of their zyme account, removing access to personalized settings.

EXAMPLES
  $ zyme auth logout
```

_See code: [src/commands/auth/logout.ts](https://github.com/mohsenshafiei/zyme/blob/v1.0.5/src/commands/auth/logout.ts)_

## `zyme auth register [FILE]`

Registers a new user account with zyme, enabling personalized features and tracking.

```
USAGE
  $ zyme auth register [FILE] [-u <value>] [-e <value>] [-p <value>]

ARGUMENTS
  FILE  file to read

FLAGS
  -e, --email=<value>     Email for registration
  -p, --password=<value>  Password for registration
  -u, --username=<value>  Username for registration

DESCRIPTION
  Registers a new user account with zyme, enabling personalized features and tracking.

EXAMPLES
  $ zyme auth register
```

_See code: [src/commands/auth/register.ts](https://github.com/mohsenshafiei/zyme/blob/v1.0.5/src/commands/auth/register.ts)_

## `zyme dependencies [FILE]`

Provides a detailed list of the dependencies used in the current repository, explaining their roles and versions.

```
USAGE
  $ zyme dependencies [FILE] [-p] [-d] [--optional] [--all] [-j]

ARGUMENTS
  FILE  file to read

FLAGS
  -d, --dev       Show only development dependencies
  -j, --json      Output in JSON format
  -p, --prod      Show only production dependencies
      --all       Display all dependencies, including transitive ones
      --optional  Include optional dependencies

DESCRIPTION
  Provides a detailed list of the dependencies used in the current repository, explaining their roles and versions.

EXAMPLES
  $ zyme dependencies
```

_See code: [src/commands/dependencies.ts](https://github.com/mohsenshafiei/zyme/blob/v1.0.5/src/commands/dependencies.ts)_

## `zyme env [FILE]`

Displays and manages environment variables associated with the current project, allowing you to understand how different environments affect the repo.

```
USAGE
  $ zyme env [FILE] [-s <value>] [-d <value>] [-l] [-j]

ARGUMENTS
  FILE  file to read

FLAGS
  -d, --delete=<value>  Delete an environment variable
  -j, --json            Output in JSON format
  -l, --list            List all environment variables
  -s, --set=<value>     Set an environment variable (key=value)

DESCRIPTION
  Displays and manages environment variables associated with the current project, allowing you to understand how
  different environments affect the repo.

EXAMPLES
  $ zyme env
```

_See code: [src/commands/env.ts](https://github.com/mohsenshafiei/zyme/blob/v1.0.5/src/commands/env.ts)_

## `zyme feedback [FILE]`

Collects user feedback on zyme or the repository, providing a way to improve based on user input.

```
USAGE
  $ zyme feedback [FILE] [-m <value>] [-r 1|2|3|4|5] [-e <value>]

ARGUMENTS
  FILE  file to read

FLAGS
  -e, --email=<value>    Attach email for follow-up feedback
  -m, --message=<value>  Provide feedback message
  -r, --rate=<option>    Provide a rating from 1 to 5
                         <options: 1|2|3|4|5>

DESCRIPTION
  Collects user feedback on zyme or the repository, providing a way to improve based on user input.

EXAMPLES
  $ zyme feedback
```

_See code: [src/commands/feedback.ts](https://github.com/mohsenshafiei/zyme/blob/v1.0.5/src/commands/feedback.ts)_

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

## `zyme info [FILE]`

Shows detailed information about the current repository, including metadata, technologies used, and key contributors.

```
USAGE
  $ zyme info [FILE] [-j] [--brief] [--full]

ARGUMENTS
  FILE  file to read

FLAGS
  -j, --json   Output in JSON format
      --brief  Show a brief summary
      --full   Show detailed information

DESCRIPTION
  Shows detailed information about the current repository, including metadata, technologies used, and key contributors.

EXAMPLES
  $ zyme info
```

_See code: [src/commands/info.ts](https://github.com/mohsenshafiei/zyme/blob/v1.0.5/src/commands/info.ts)_

## `zyme init [FILE]`

Initializes zyme with the necessary configuration and setup files, ensuring everything is ready to be analyzed by zyme.

```
USAGE
  $ zyme init [FILE] [-f] [-t <value>]

ARGUMENTS
  FILE  file to read

FLAGS
  -f, --force             Force initialization, overwriting any existing setup
  -t, --template=<value>  Initialize with a specific template

DESCRIPTION
  Initializes zyme with the necessary configuration and setup files, ensuring everything is ready to be analyzed by
  zyme.

EXAMPLES
  $ zyme init
```

_See code: [src/commands/init.ts](https://github.com/mohsenshafiei/zyme/blob/v1.0.5/src/commands/init.ts)_

## `zyme learn [FILE]`

Helps you to onboard quickly.

```
USAGE
  $ zyme learn [FILE] [-m <value>] [-j] [--interactive]

ARGUMENTS
  FILE  file to read

FLAGS
  -j, --json            Output in JSON format
  -m, --module=<value>  Focus on a specific module or technology
      --interactive     Open interactive learning mode

DESCRIPTION
  Helps you to onboard quickly.

EXAMPLES
  $ zyme learn
```

_See code: [src/commands/learn.ts](https://github.com/mohsenshafiei/zyme/blob/v1.0.5/src/commands/learn.ts)_

## `zyme plugins [FILE]`

Lists all installed plugins that extend the functionality of zyme.

```
USAGE
  $ zyme plugins [FILE] [-j] [-a <value>] [-r <value>] [--update]

ARGUMENTS
  FILE  file to read

FLAGS
  -a, --add=<value>     Install a new plugin
  -j, --json            Output list of plugins in JSON format
  -r, --remove=<value>  Remove an existing plugin
      --update          Update all installed plugins

DESCRIPTION
  Lists all installed plugins that extend the functionality of zyme.

EXAMPLES
  $ zyme plugins
```

_See code: [src/commands/plugins.ts](https://github.com/mohsenshafiei/zyme/blob/v1.0.5/src/commands/plugins.ts)_

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

## `zyme publish [FILE]`

Publishes the repository or related data to a platform or service, sharing insights or knowledge gathered by zyme.

```
USAGE
  $ zyme publish [FILE] [-p <value>] [--dry-run] [-j]

ARGUMENTS
  FILE  file to read

FLAGS
  -j, --json              Output result in JSON format
  -p, --platform=<value>  Publish to a specific platform
      --dry-run           Simulate the publish process without actually publishing

DESCRIPTION
  Publishes the repository or related data to a platform or service, sharing insights or knowledge gathered by zyme.

EXAMPLES
  $ zyme publish
```

_See code: [src/commands/publish.ts](https://github.com/mohsenshafiei/zyme/blob/v1.0.5/src/commands/publish.ts)_

## `zyme search [FILE]`

Allows users to search for repositories, dependencies, or other relevant information across various sources.

```
USAGE
  $ zyme search [FILE] [-t <value>] [-l <value>] [-j]

ARGUMENTS
  FILE  file to read

FLAGS
  -j, --json           Output search results in JSON format
  -l, --limit=<value>  Limit the number of search results
  -t, --type=<value>   Filter search by type (e.g., repo, dependency)

DESCRIPTION
  Allows users to search for repositories, dependencies, or other relevant information across various sources.

EXAMPLES
  $ zyme search
```

_See code: [src/commands/search.ts](https://github.com/mohsenshafiei/zyme/blob/v1.0.5/src/commands/search.ts)_

## `zyme update [FILE]`

Updates zyme itself or its plugins to the latest version, ensuring the CLI stays current.

```
USAGE
  $ zyme update [FILE] [--check] [-j] [-f]

ARGUMENTS
  FILE  file to read

FLAGS
  -f, --force  Forcefully install the latest version
  -j, --json   Output update information in JSON format
      --check  Check for available updates without installing

DESCRIPTION
  Updates zyme itself or its plugins to the latest version, ensuring the CLI stays current.

EXAMPLES
  $ zyme update
```

_See code: [src/commands/update.ts](https://github.com/mohsenshafiei/zyme/blob/v1.0.5/src/commands/update.ts)_

## `zyme whatsnew [FILE]`

Shows the latest features, updates, and improvements in the zyme CLI.

```
USAGE
  $ zyme whatsnew [FILE] [-j] [--latest] [--all]

ARGUMENTS
  FILE  file to read

FLAGS
  -j, --json    Output the changelog in JSON format
      --all     Show the entire changelog history
      --latest  Show only the latest changes

DESCRIPTION
  Shows the latest features, updates, and improvements in the zyme CLI.

EXAMPLES
  $ zyme whatsnew
```

_See code: [src/commands/whatsnew.ts](https://github.com/mohsenshafiei/zyme/blob/v1.0.5/src/commands/whatsnew.ts)_

## `zyme whoami [FILE]`

Displays the currently logged-in user and their account details in zyme.

```
USAGE
  $ zyme whoami [FILE] [-j]

ARGUMENTS
  FILE  file to read

FLAGS
  -j, --json  Output the user information in JSON format

DESCRIPTION
  Displays the currently logged-in user and their account details in zyme.

EXAMPLES
  $ zyme whoami
```

_See code: [src/commands/whoami.ts](https://github.com/mohsenshafiei/zyme/blob/v1.0.5/src/commands/whoami.ts)_
<!-- commandsstop -->
