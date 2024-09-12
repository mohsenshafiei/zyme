import { Args, Command, Flags } from "@oclif/core";

export default class Whatsnew extends Command {
  static override args = {
    file: Args.string({ description: "file to read" }),
  };

  static override description =
    "Shows the latest features, updates, and improvements in the zyme CLI.";

  static override examples = ["<%= config.bin %> <%= command.id %>"];

  static override flags = {
    json: Flags.boolean({
      char: "j",
      description: "Output the changelog in JSON format",
    }),
    latest: Flags.boolean({ description: "Show only the latest changes" }),
    all: Flags.boolean({ description: "Show the entire changelog history" }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Whatsnew);

    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`);
    }
  }
}
