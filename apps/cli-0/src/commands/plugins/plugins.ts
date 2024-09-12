import { Args, Command, Flags } from "@oclif/core";

export default class Plugins extends Command {
  static override args = {
    file: Args.string({ description: "file to read" }),
  };

  static override description =
    "Lists all installed plugins that extend the functionality of zyme.";

  static override examples = ["<%= config.bin %> <%= command.id %>"];

  static override flags = {
    json: Flags.boolean({
      char: "j",
      description: "Output list of plugins in JSON format",
    }),
    add: Flags.string({ char: "a", description: "Install a new plugin" }),
    remove: Flags.string({
      char: "r",
      description: "Remove an existing plugin",
    }),
    update: Flags.boolean({ description: "Update all installed plugins" }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Plugins);

    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`);
    }
  }
}
