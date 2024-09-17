import { Args, Command, Flags } from "@oclif/core";

const en = {
  description:
    "Shows detailed information about the current repository, including metadata, technologies used, and key contributors.",
};

export default class Info extends Command {
  static override args = {
    file: Args.string({ description: "file to read" }),
  };

  static override description = en.description;

  static override examples = ["<%= config.bin %> <%= command.id %>"];

  static override flags = {
    json: Flags.boolean({ char: "j", description: "Output in JSON format" }),
    brief: Flags.boolean({ description: "Show a brief summary" }),
    full: Flags.boolean({ description: "Show detailed information" }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Info);
    this.log("Not Implemented Yet", args, flags);
  }
}
