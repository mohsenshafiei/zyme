import { Args, Command, Flags } from "@oclif/core";

export default class Info extends Command {
  static override args = {
    file: Args.string({ description: "file to read" }),
  };

  static override description =
    "Shows detailed information about the current repository, including metadata, technologies used, and key contributors.";

  static override examples = ["<%= config.bin %> <%= command.id %>"];

  static override flags = {
    json: Flags.boolean({ char: "j", description: "Output in JSON format" }),
    brief: Flags.boolean({ description: "Show a brief summary" }),
    full: Flags.boolean({ description: "Show detailed information" }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Info);

    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`);
    }
  }
}
