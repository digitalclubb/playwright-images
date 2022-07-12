See: https://github.com/microsoft/playwright/issues/15564

**Context:**

- Playwright Version: 1.23.2
- Operating System: Mac
- Node.js version: 16.14.2
- Browser: All
- Extra: Feature was working as expected in v1.22.2

<!-- CLI to auto-capture this info -->
<!-- npx envinfo --preset playwright --markdown -->

**Code Snippet**

I have created a small reproducible repository for your review, including a test for the image loading.

Link: https://github.com/digitalclubb/playwright-images

1. Install dependencies: `npm i`
2. Run test: `npm run test-ct`

Expected:

- Test passes

Actual:

- Test fails

**Describe the bug**

We currently load our images directly from a public folder within our React application:

```
<img src='/logo.svg' />
```

This is imported into the `index.ts` file for Playwright:

```
import '../public/logo.svg';
```

However upon testing this, we end up with a failure in v1.23.2.
**This was working previously in version v1.22.2**.

Test code:

```
const image = await page.waitForResponse(
      (response) =>
          response.url().includes('.svg') &&
          response.status() === 200
  );
  await image.finished();
```

See the test that was run: https://github.com/digitalclubb/playwright-images/blob/main/src/App.test.tsx

Thanks
