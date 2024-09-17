import { Args, Command, Flags } from "@oclif/core";

const en = {
  description:
    "Updates zyme itself or its plugins to the latest version, ensuring the CLI stays current.",
};

export default class Update extends Command {
  static override args = {
    file: Args.string({ description: "file to read" }),
  };

  static override description = en.description;

  static override examples = ["<%= config.bin %> <%= command.id %>"];

  static override flags = {
    check: Flags.boolean({
      description: "Check for available updates without installing",
    }),
    json: Flags.boolean({
      char: "j",
      description: "Output update information in JSON format",
    }),
    force: Flags.boolean({
      char: "f",
      description: "Forcefully install the latest version",
    }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Update);
    this.log("Not Implemented Yet", args, flags);
  }
}
