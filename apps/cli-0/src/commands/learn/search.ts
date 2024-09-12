import { Args, Command, Flags } from "@oclif/core";

export default class Search extends Command {
  static override args = {
    file: Args.string({ description: "file to read" }),
  };

  static override description =
    "Allows users to search for repositories, dependencies, or other relevant information across various sources.";

  static override examples = ["<%= config.bin %> <%= command.id %>"];

  static override flags = {
    type: Flags.string({
      char: "t",
      description: "Filter search by type (e.g., repo, dependency)",
    }),
    limit: Flags.integer({
      char: "l",
      description: "Limit the number of search results",
    }),
    json: Flags.boolean({
      char: "j",
      description: "Output search results in JSON format",
    }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Search);

    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`);
    }
  }
}
