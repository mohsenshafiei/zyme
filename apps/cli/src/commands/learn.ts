import { Args, Command, Flags } from "@oclif/core";

const en = {
  description: "Helps you to onboard quickly.",
};

export default class Learn extends Command {
  static override args = {
    file: Args.string({ description: "file to read" }),
  };

  static override description = en.description;

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
    const { args, flags } = await this.parse(Learn);
    this.log("Not Implemented Yet", args, flags);
  }
}
