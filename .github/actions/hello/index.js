import core from "@actions/core";
import github from "@actions/github";

try {
  const name = core.getInput("who-to-greet");
  console.log(`Hello ${name}`);

  const time = new Date();
  core.setOutput("time", JSON.stringify(time.toTimeString()));

  console.log(JSON.stringify(github, null, "\t"));
} catch (error) {
  core.setFailed(error);
}
