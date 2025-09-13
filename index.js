#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const os = require('os');

const COMMANDS_DIR = 'commands';
const CLAUDE_COMMANDS_DIRS = [
  path.join(process.cwd(), '.claude', 'commands'),
  path.join(os.homedir(), '.claude', 'commands')
];

const COMMAND_FILES = [
  'product-expert.md',
  'ux-expert.md',
  'software-architect.md'
];

function log(message, type = 'info') {
  const prefix = type === 'error' ? '❌' : type === 'success' ? '✅' : 'ℹ️';
  console.log(`${prefix} ${message}`);
}

async function ensureDirectoryExists(dirPath) {
  try {
    await fs.ensureDir(dirPath);
    return true;
  } catch (error) {
    log(`Failed to create directory ${dirPath}: ${error.message}`, 'error');
    return false;
  }
}

async function copyCommandFile(sourcePath, targetPath) {
  try {
    await fs.copy(sourcePath, targetPath, { overwrite: true });
    return true;
  } catch (error) {
    log(`Failed to copy ${path.basename(sourcePath)}: ${error.message}`, 'error');
    return false;
  }
}

async function installCommands(targetDir) {
  if (!await ensureDirectoryExists(targetDir)) {
    return false;
  }

  const sourceDir = path.join(__dirname, COMMANDS_DIR);
  let successCount = 0;

  for (const commandFile of COMMAND_FILES) {
    const sourcePath = path.join(sourceDir, commandFile);
    const targetPath = path.join(targetDir, commandFile);

    if (await copyCommandFile(sourcePath, targetPath)) {
      successCount++;
      log(`Installed ${commandFile} → ${targetPath}`, 'success');
    }
  }

  return successCount === COMMAND_FILES.length;
}

async function main() {
  const command = process.argv[2];

  if (command === 'install') {
    log('Installing three-experts claude-code commands...');

    // Try to install in project-level commands directory first
    const projectCommandsDir = CLAUDE_COMMANDS_DIRS[0];
    const userCommandsDir = CLAUDE_COMMANDS_DIRS[1];

    let installed = false;

    // Check if we're in a project with .claude directory
    if (fs.existsSync(path.dirname(projectCommandsDir))) {
      log(`Installing commands in project directory: ${projectCommandsDir}`);
      installed = await installCommands(projectCommandsDir);
    } else {
      log(`No .claude directory found in current project, installing in user directory: ${userCommandsDir}`);
      installed = await installCommands(userCommandsDir);
    }

    if (installed) {
      log('🎉 Three-experts commands installed successfully!');
      log('');
      log('You can now use these slash commands in claude-code:');
      log('  /create-prd    - Generate a Product Requirements Document');
      log('  /create-ux     - Generate a User Interface Design Document');
      log('  /create-srs    - Generate a Software Requirements Specification');
      log('');
      log('📖 For usage instructions, see the README.md or run commands in your claude-code session.');
    } else {
      log('❌ Installation failed. Please check the error messages above.', 'error');
      process.exit(1);
    }
  } else {
    log('Three-experts claude-code commands installer');
    log('');
    log('Usage:');
    log('  npm install three-experts    # Automatically installs commands');
    log('  npx three-experts install    # Manually install commands');
    log('');
    log('Available commands after installation:');
    log('  /create-prd    - Generate a Product Requirements Document');
    log('  /create-ux     - Generate a User Interface Design Document');
    log('  /create-srs    - Generate a Software Requirements Specification');
  }
}

if (require.main === module) {
  main().catch(error => {
    log(`Unexpected error: ${error.message}`, 'error');
    process.exit(1);
  });
}

module.exports = { installCommands, ensureDirectoryExists };