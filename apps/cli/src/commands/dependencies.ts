import { Args, Command, Flags } from "@oclif/core";

const en = {
  description:
    "Provides a detailed list of the dependencies used in the current repository, explaining their roles and versions.",
};

export default class Dependencies extends Command {
  static override args = {
    file: Args.string({ description: "file to read" }),
  };

  static override description = en.description;

  static override examples = ["<%= config.bin %> <%= command.id %>"];

  static override flags = {
    prod: Flags.boolean({
      char: "p",
      description: "Show only production dependencies",
    }),
    dev: Flags.boolean({
      char: "d",
      description: "Show only development dependencies",
    }),
    optional: Flags.boolean({ description: "Include optional dependencies" }),
    all: Flags.boolean({
      description: "Display all dependencies, including transitive ones",
    }),
    json: Flags.boolean({ char: "j", description: "Output in JSON format" }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Dependencies);
    this.log("Not Implemented Yet", args, flags);
  }
}
