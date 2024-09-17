import { Args, Command, Flags } from "@oclif/core";

const en = {
  description:
    "Shows the latest features, updates, and improvements in the zyme CLI.",
};

export default class Whatsnew extends Command {
  static override args = {
    file: Args.string({ description: "file to read" }),
  };

  static override description = en.description;

  static override examples = ["<%= config.bin %> <%= command.id %>"];

  static override flags = {
    json: Flags.boolean({
      char: "j",
      description: "Output the changelog in JSON format",
    }),
    latest: Flags.boolean({ description: "Show only the latest changes" }),
    all: Flags.boolean({ description: "Show the entire changelog history" }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Whatsnew);
    this.log("Not Implemented Yet", args, flags);
  }
}
