import { Args, Command, Flags } from "@oclif/core";

const en = {
  description:
    "Logs the user into their zyme account, allowing access to personalized settings and features.",
};

export default class Login extends Command {
  static override args = {
    file: Args.string({ description: "file to read" }),
  };

  static override description = en.description;

  static override examples = ["<%= config.bin %> <%= command.id %>"];

  static override flags = {
    username: Flags.string({ char: "u", description: "Username for login" }),
    password: Flags.string({ char: "p", description: "Password for login" }),
    token: Flags.string({ description: "Login using an authentication token" }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Login);
    this.log("Not Implemented Yet", args, flags);
  }
}
