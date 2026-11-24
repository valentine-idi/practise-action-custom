import * as core from "@actions/core";
import * as github from "@actions/github";
import * as exec from "@actions/exec";

function run() {
  try {
    core.notice("Deploying to S3...");
  } catch (err) {
    core.setFailed(err.message);
  }
}

run();
