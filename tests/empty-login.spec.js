import { test, expect } from '@playwright/test';

test('пустая форма показывает ошибки email и пароля', async ({ page }) => {
  // 1. открыть главную
  await page.goto('/');

  // 2. открыть попап входа
  await page.locator('[data-marker="login-button-desktop"]').click();

  // 3. отправить пустую форму
  await page.locator('[data-marker="login-submit-button"]').click();

  // 4. проверить ошибку Email
  const emailError = page.locator('[data-marker="email-error"]');
  await expect(emailError).toHaveText('Email обязателен');

  // 5. проверить ошибку пароля
  const passError = page.locator('[data-marker="password-error"]');
  await expect(passError).toHaveText('Пароль обязателен');
});