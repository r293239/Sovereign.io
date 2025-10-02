# Contributing to Sovereign.io 🏰⚔️

First off, thank you for considering contributing to Sovereign.io! It's people like you that make open source truly amazing. 

## 🎯 Quick Start for New Contributors

**New to open source?** Check out our issues labeled [`good first issue`](https://github.com/r293239/sovereign-io/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22) - these are perfect for getting started!

### Your First Contribution
1. **Find an issue** labeled `good first issue` or `help wanted`
2. **Comment** on the issue saying "I'd like to work on this"
3. **Wait** for a maintainer to assign it to you
4. **Follow the development setup below**

## 🛠️ Development Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Local Development
```bash
# 1. Fork the repository on GitHub
# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/sovereign-io.git
cd sovereign-io

# 3. Install dependencies
npm install

# 4. Create a feature branch
git checkout -b feature/your-feature-name

# 5. Start development servers
npm run dev
# or separately:
npm run client:dev  # Frontend development
npm run server:dev  # Backend development
Project Structure

text
sovereign-io/
├── client/                 # Frontend game client (HTML5 Canvas + TypeScript)
│   ├── src/
│   ├── public/
│   └── package.json
├── server/                 # Backend game server (Node.js + Socket.io)
│   ├── src/
│   └── package.json
├── shared/                 # Shared types and utilities
├── docs/                   # Documentation
└── tools/                  # Development tools
📝 How to Contribute

Reporting Bugs

Found a bug? Create an issue with:

Description: What happened vs what you expected
Steps to Reproduce: Step-by-step how to see the bug
Environment: OS, Browser, Node version
Screenshots/Videos: If applicable
Suggesting Features

Have an idea? Great! Create an issue with:

Problem: What problem does this solve?
Solution: How would you implement it?
Alternatives: Other ways to solve this?
Code Contributions

Fork the repository
Create a feature branch (git checkout -b feature/amazing-feature)
Make your changes
Test your changes thoroughly
Commit (git commit -m 'Add amazing feature')
Push (git push origin feature/amazing-feature)
Open a Pull Request
✅ Code Quality Standards

Code Style

Use TypeScript for all new code
Follow existing code style in the project
Use meaningful variable names
Comment complex logic
Keep functions small and focused
Commit Messages

Use the conventional commit format:

text
feat: add territory expansion mechanics
fix: resolve multiplayer connection issue
docs: update contributing guide
refactor: improve game loop performance
test: add unit tests for economy system
Testing

Add tests for new features
Ensure all tests pass before submitting PR
Test in multiple browsers if UI-related
🎮 Game Design Guidelines

Core Principles

Fast-paced: Game rounds should be 5-15 minutes
Strategic depth: Meaningful choices in army/economy/research
Accessible: Easy to learn, hard to master
Performant: 60 FPS target, minimal lag
Balance Philosophy

No single dominant strategy
Risk vs reward decisions
Early game decisions should matter in late game
🔄 Pull Request Process

Ensure all tests pass and code follows style guidelines
Update documentation if needed
Add relevant labels to your PR
Request review from maintainers
Address review feedback promptly
Squash commits if requested during merge
PR Review Criteria

✅ Code quality and standards
✅ Functionality works as expected
✅ No performance regressions
✅ Tests included for new features
✅ Documentation updated
🏷️ Issue Labels

We use these labels to help you find appropriate issues:

good first issue - Perfect for new contributors
help wanted - Extra attention needed
bug - Something isn't working
enhancement - New feature or improvement
documentation - Documentation improvements
question - Further information is requested
💬 Communication

Discussion Channels

GitHub Issues: Feature requests and bugs
GitHub Discussions: General questions and ideas
Discord: Real-time chat and coordination
Getting Help

Check existing documentation first
Search existing issues and discussions
Be specific about your problem
Provide relevant code examples
🏆 Recognition

All contributors get:

Credit in release notes
Name in our contributors list
Our eternal gratitude! ❤️
📜 License

By contributing, you agree that your contributions will be licensed under the MIT License.

Happy coding! 🎉

If you have any questions, don't hesitate to ask in our discussions or open an issue.

text

This `CONTRIBUTING.md` file covers:

- **Easy onboarding** for new contributors
- **Clear development setup** instructions  
- **Specific contribution guidelines** for different types of contributions
- **Code quality standards** to maintain consistency
- **Game design principles** to keep the vision aligned
- **PR review process** to ensure quality
- **Communication channels** for collaboration

Would you like me to create any of the other essential files like issue templates, code of conduct, or the initial project roadmap next?


