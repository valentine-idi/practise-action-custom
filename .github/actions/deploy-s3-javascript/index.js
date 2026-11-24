const core = require("@actions/core");
const github = require("@actions/github");
const exec = require("@actions/exec");

function run() {
  try {
    core.notice("Deploying to S3...");
  } catch (err) {
    core.setFailed(err.message);
  }
}

run();
