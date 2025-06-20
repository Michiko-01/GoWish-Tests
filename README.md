# Overview

I have created two test cases that I think are the most important.

1. Add wish item
2. Delete wish item

I choose to have them in sequential and non-atomic, as I do not have direct means to create or delete wish using API or DB for example.

key points:

- CI workflow using GitHub Actions
- Handled authentication before the test run
- Created fixture to extend the default page provided by Playwright
- Enabled parallel run execution

I decided against:

- Using screenshot comparison assertions as I believe they can be unstable without further investigation.
- Handling of different languages due to time constraint.

# Get Started

1. Rename `.env.sample` to `.env`. I will send the credentials separately in the email.

2. Install Dependencies

```bash
npm install
```

3. Run tests

```bash
npx playwright test --ui
```
