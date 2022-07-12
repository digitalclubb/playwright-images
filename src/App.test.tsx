import { test, expect } from '@playwright/experimental-ct-react';
import App from './App';

test.use({ viewport: { width: 500, height: 500 } });

test('should load image', async ({ mount, page }) => {
  const component = await mount(<App></App>);
  const image = await page.waitForResponse(
      (response) =>
          response.url().includes('.svg') &&
          response.status() === 200
  );
  await image.finished();
  await expect(component).toContainText('Learn React');
});
