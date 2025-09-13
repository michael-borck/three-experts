# Three Experts - Claude Code Slash Commands

A Node.js npm package that adds three powerful AI expert personas as custom slash commands to claude-code. Transform your project ideas into comprehensive documentation through a structured three-phase workflow: Product Requirements → UI Design → Software Architecture.

## 🚀 What This Package Does

Three Experts provides you with AI-powered expert consultants to guide you through the complete software project planning process:

1. **Product Expert** (`/create-prd`) - Generate a Product Requirements Document
2. **UX Expert** (`/create-ux`) - Create a User Interface Design Document
3. **Software Architect** (`/create-srs`) - Build a Software Requirements Specification

Each expert asks targeted questions, provides professional guidance, and generates industry-standard documentation that you can use to communicate with stakeholders, developers, and AI coding assistants.

## 📦 Installation

### Option 1: Install with npm (Recommended)
```bash
npm install three-experts
```

The commands are automatically installed via the postinstall script.

### Option 2: Install globally
```bash
npm install -g three-experts
```

### Option 3: Manual installation
```bash
npx three-experts install
```

## 🔧 How It Works

The package installs three markdown command files into your claude-code commands directory:

- **Project-level**: `.claude/commands/` (if you're in a project with a `.claude` directory)
- **User-level**: `~/.claude/commands/` (global installation)

Once installed, you can use the slash commands in any claude-code session.

## 💡 Usage

### The Three-Phase Workflow

#### Phase 1: Product Requirements Document
```
/create-prd
```

The Product Expert will:
- Ask about your project idea and target audience
- Guide you through defining functional requirements
- Help create user stories and interface descriptions
- Generate a comprehensive PRD in markdown format

**Save the output** - you'll need it for Phase 2.

#### Phase 2: User Interface Design Document
```
/create-ux
```

The UX Expert will:
- Review your PRD (paste it into the chat)
- Ask about user personas and design preferences
- Present 3 different UI design options
- Create a detailed UI specification based on your choice

**Save the output** - you'll need it for Phase 3.

#### Phase 3: Software Requirements Specification
```
/create-srs
```

The Software Architect will:
- Analyze your PRD and UI Design documents
- Ask about your technical skills and preferences
- Recommend appropriate architecture patterns and tech stacks
- Generate a complete technical specification

### Example Workflow

```bash
# Start a new claude-code session
claude-code

# Phase 1: Create PRD
/create-prd
# Explain your app idea when prompted
# Save the generated PRD to a file

# Phase 2: Create UI Design (new chat recommended)
/create-ux
# Paste your PRD content when asked
# Answer design preference questions
# Save the generated UI document

# Phase 3: Create Technical Spec (new chat recommended)
/create-srs
# Attach both PRD and UI Design documents
# Discuss your technical background
# Save the generated technical specification
```

## 📁 Project Structure

After installation, the package creates these command files:

```
~/.claude/commands/
├── product-expert.md     # /create-prd command
├── ux-expert.md          # /create-ux command
└── software-architect.md # /create-srs command
```

## 🎯 Benefits

- **Structured Approach**: Follow proven methodologies for software project planning
- **AI-Powered Expertise**: Get professional-level guidance from specialized AI personas
- **Industry Standards**: Generate documentation that follows best practices
- **Time Saving**: Quickly create comprehensive project specifications
- **Better Communication**: Use generated docs to align with stakeholders and developers
- **Enhanced AI Coding**: Provide rich context to coding assistants for better results

## 📖 Generated Documents

Each expert generates professional documentation:

### Product Requirements Document (PRD)
- Elevator pitch and value proposition
- Target audience analysis
- Functional requirements
- User stories and interactions
- User interface overview

### User Interface Design Document
- Layout structure and organization
- Core UI components
- Interaction patterns and workflows
- Visual design and color schemes
- Typography and accessibility considerations

### Software Requirements Specification (SRS)
- System design and architecture
- Technology stack recommendations
- Data flow and state management
- Authentication and security
- API design and database schema

## 🔧 Requirements

- Node.js 14.0.0 or higher
- claude-code CLI installed and configured
- Access to claude-code's slash command functionality

## 🤔 Tips for Best Results

### When using /create-prd:
- Be specific about your target users
- Think about the core problem you're solving
- Consider what makes your solution unique
- Don't forget non-functional requirements

### When using /create-ux:
- Consider your users' technical comfort level
- Think about primary use context (mobile vs desktop)
- Balance feature richness with simplicity
- Plan for accessibility from the start

### When using /create-srs:
- Be honest about your current skill level
- Consider learning opportunities vs. deadlines
- Think about long-term maintenance
- Don't over-engineer the initial version

## 🚨 Important Notes

- **Start Fresh**: Use new claude-code chat sessions between phases for best results
- **Save Everything**: Keep all generated documents - they build on each other
- **Context Matters**: Always provide previous documents when moving to the next phase
- **Iterate**: Don't hesitate to refine documents based on new insights

## 🐛 Troubleshooting

### Commands not appearing?
1. Verify installation: `ls ~/.claude/commands/`
2. Restart claude-code
3. Try manual installation: `npx three-experts install`

### Commands not working?
1. Ensure you're using claude-code (not regular Claude)
2. Check that slash commands are enabled in your claude-code configuration
3. Verify command files have proper frontmatter syntax

### Need to reinstall?
```bash
npx three-experts install
```

## 📝 License

MIT License - see LICENSE file for details.

## 🤝 Contributing

Found a bug or have a suggestion? Please open an issue or submit a pull request on GitHub.

## 🙏 Acknowledgments

Inspired by proven software development methodologies and designed to work seamlessly with claude-code's powerful AI capabilities.

---

**Ready to turn your ideas into reality?** Install three-experts and start with `/create-prd` in your next claude-code session!