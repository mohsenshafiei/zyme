import { Args, Command, Flags } from "@oclif/core";

export default class Dependencies extends Command {
  static override args = {
    file: Args.string({ description: "file to read" }),
  };

  static override description =
    "Provides a detailed list of the dependencies used in the current repository, explaining their roles and versions.";

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

    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`);
    }
  }
}
