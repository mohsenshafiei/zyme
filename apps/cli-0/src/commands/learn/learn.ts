import { Args, Command, Flags } from "@oclif/core";

export default class Learn extends Command {
  static override args = {
    file: Args.string({ description: "file to read" }),
  };

  static override description = "Helps you to onboard quickly.";

  static override examples = ["<%= config.bin %> <%= command.id %>"];

  static override flags = {
    module: Flags.string({
      char: "m",
      description: "Focus on a specific module or technology",
    }),
    json: Flags.boolean({ char: "j", description: "Output in JSON format" }),
    interactive: Flags.boolean({
      description: "Open interactive learning mode",
    }),
  };

  public async run(): Promise<void> {
    console.log("mohsen");
    const { args, flags } = await this.parse(Learn);

    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`);
    }
  }
}
