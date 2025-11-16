#!/usr/bin/env node
import inquirer from "inquirer";
import fs from "fs";

async function main() {
  console.log("🚀 Welcome to autoinit!");
  const { repoName, description } = await inquirer.prompt([
    { name: "repoName", message: "Repository name:" },
    { name: "description", message: "Description:" }
  ]);
  fs.writeFileSync("README.md", `# ${repoName}\n\n${description}\n\nInitialized with autoinit 🚀`);
  console.log(`✅ Project '${repoName}' initialized with README.md`);
}

main();
