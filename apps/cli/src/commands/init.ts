import { Args, Command, Flags } from "@oclif/core";

const en = {
  description:
    "Initializes zyme with the necessary configuration and setup files, ensuring everything is ready to be analyzed by zyme.",
};

export default class Init extends Command {
  static override args = {
    file: Args.string({ description: "file to read" }),
  };

  static override description = en.description;

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
    this.log("Not Implemented Yet", args, flags);
  }
}
