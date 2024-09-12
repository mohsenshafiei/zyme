import { Args, Command, Flags } from "@oclif/core";

export default class Whoami extends Command {
  static override args = {
    file: Args.string({ description: "file to read" }),
  };

  static override description =
    "Displays the currently logged-in user and their account details in zyme.";

  static override examples = ["<%= config.bin %> <%= command.id %>"];

  static override flags = {
    json: Flags.boolean({
      char: "j",
      description: "Output the user information in JSON format",
    }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Whoami);

    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`);
    }
  }
}
