import { Args, Command, Flags } from "@oclif/core";

const en = {
  description:
    "Logs the user out of their zyme account, removing access to personalized settings.",
};

export default class Logout extends Command {
  static override args = {
    file: Args.string({ description: "file to read" }),
  };

  static override description = en.description;

  static override examples = ["<%= config.bin %> <%= command.id %>"];

  static override flags = {
    force: Flags.boolean({
      char: "f",
      description: "Force logout without confirmation",
    }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Logout);
    this.log("Not Implemented Yet", args, flags);
  }
}
