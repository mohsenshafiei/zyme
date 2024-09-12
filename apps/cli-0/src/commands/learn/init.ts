import { Args, Command, Flags } from "@oclif/core";

export default class Init extends Command {
  static override args = {
    file: Args.string({ description: "file to read" }),
  };

  static override description =
    "Initializes zyme with the necessary configuration and setup files, ensuring everything is ready to be analyzed by zyme.";

  static override examples = ["<%= config.bin %> <%= command.id %>"];

  static override flags = {
    force: Flags.boolean({
      char: "f",
      description: "Force initialization, overwriting any existing setup",
    }),
    template: Flags.string({
      char: "t",
      description: "Initialize with a specific template",
    }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Init);

    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`);
    }
  }
}
