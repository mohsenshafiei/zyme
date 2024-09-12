import { Args, Command, Flags } from "@oclif/core";

export default class Feedback extends Command {
  static override args = {
    file: Args.string({ description: "file to read" }),
  };

  static override description =
    "Collects user feedback on zyme or the repository, providing a way to improve based on user input.";

  static override examples = ["<%= config.bin %> <%= command.id %>"];

  static override flags = {
    message: Flags.string({
      char: "m",
      description: "Provide feedback message",
    }),
    rate: Flags.integer({
      char: "r",
      description: "Provide a rating from 1 to 5",
      options: ["1", "2", "3", "4", "5"],
    }),
    email: Flags.string({
      char: "e",
      description: "Attach email for follow-up feedback",
    }),
  };
  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Feedback);

    const name = flags.name ?? "world";
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`);
    }
  }
}
