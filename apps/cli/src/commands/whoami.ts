import { Args, Command, Flags } from "@oclif/core";

const en = {
  description:
    "Displays the currently logged-in user and their account details in zyme.",
};

export default class Whoami extends Command {
  static override args = {
    file: Args.string({ description: "file to read" }),
  };

  static override description = en.description;

  static override examples = ["<%= config.bin %> <%= command.id %>"];

  static override flags = {
    json: Flags.boolean({
      char: "j",
      description: "Output the user information in JSON format",
    }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Whoami);
    this.log("Not Implemented Yet", args, flags);
  }
}
