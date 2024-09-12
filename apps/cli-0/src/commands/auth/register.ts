import { Args, Command, Flags } from "@oclif/core";

export default class Register extends Command {
  static override args = {
    file: Args.string({ description: "file to read" }),
  };

  static override description =
    "Registers a new user account with zyme, enabling personalized features and tracking.";

  static override examples = ["<%= config.bin %> <%= command.id %>"];

  static override flags = {
    username: Flags.string({
      char: "u",
      description: "Username for registration",
    }),
    email: Flags.string({ char: "e", description: "Email for registration" }),
    password: Flags.string({
      char: "p",
      description: "Password for registration",
    }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Register);

    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`);
    }
  }
}
