import { Args, Command, Flags } from "@oclif/core";

const en = {
  description:
    "Displays and manages environment variables associated with the current project, allowing you to understand how different environments affect the repo.",
};

export default class Env extends Command {
  static override args = {
    file: Args.string({ description: "file to read" }),
  };

  static override description = en.description;

  static override examples = ["<%= config.bin %> <%= command.id %>"];

  static override flags = {
    set: Flags.string({
      char: "s",
      description: "Set an environment variable (key=value)",
    }),
    delete: Flags.string({
      char: "d",
      description: "Delete an environment variable",
    }),
    list: Flags.boolean({
      char: "l",
      description: "List all environment variables",
    }),
    json: Flags.boolean({ char: "j", description: "Output in JSON format" }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Env);
    this.log("Not Implemented Yet", args, flags);
  }
}
