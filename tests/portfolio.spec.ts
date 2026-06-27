import { test, expect } from '@playwright/test'

import { PortfolioPage } from './portfolio-page'

test.describe('Portfolio', () => {
  let portfolio: PortfolioPage

  test.beforeEach(async ({ page }) => {
    portfolio = new PortfolioPage(page)
    await portfolio.goto()
  })

  test(
    'typewriter activates on hero scroll',
    { tag: ['@critical', '@interaction'] },
    async () => {
      await portfolio.scrollToHero()

      await expect(portfolio.heroReveal).toHaveClass(/active/)
      await expect(portfolio.typewriter).toHaveAttribute('data-typed', 'true')
      await expect(portfolio.typewriter).toContainText('NACHOSAG')
    },
  )

  test(
    'project filter toggles cards by category',
    { tag: ['@critical', '@interaction'] },
    async () => {
      const allBtn = portfolio.filterBar.getByRole('button', {
        name: 'ALL',
        exact: true,
      })
      const backendBtn = portfolio.filterBar.getByRole('button', {
        name: 'BACKEND',
        exact: true,
      })

      // Initial: ALL active, all cards visible
      await expect(allBtn).toHaveAttribute('aria-pressed', 'true')
      const initialCount = await portfolio.explorerGrid.locator('> div').count()

      // Filter BACKEND
      await portfolio.clickFilter('BACKEND')
      await expect(backendBtn).toHaveAttribute('aria-pressed', 'true')
      await expect(allBtn).toHaveAttribute('aria-pressed', 'false')

      // Some cards should be hidden now (not all 11 visible)
      const visibleAfterFilter = await portfolio.explorerGrid
        .locator('> div')
        .evaluateAll(
          (els) =>
            els.filter((el) => (el as HTMLElement).style.display !== 'none')
              .length,
        )
      expect(visibleAfterFilter).toBeLessThan(initialCount)
      expect(visibleAfterFilter).toBeGreaterThan(0)

      // Back to ALL
      await portfolio.clickFilter('ALL')
      const visibleAfterAll = await portfolio.explorerGrid
        .locator('> div')
        .evaluateAll(
          (els) =>
            els.filter((el) => (el as HTMLElement).style.display !== 'none')
              .length,
        )
      expect(visibleAfterAll).toBe(initialCount)
    },
  )

  test(
    'mobile menu opens and closes',
    { tag: ['@critical', '@interaction'] },
    async () => {
      await portfolio.openMobileMenu()

      await expect(portfolio.mobileMenuBtn).toHaveAttribute(
        'aria-expanded',
        'true',
      )
      await expect(portfolio.navMenu).toHaveAttribute('aria-hidden', 'false')
      await expect(portfolio.navMenu).toBeVisible()

      await portfolio.closeMobileMenu()

      await expect(portfolio.mobileMenuBtn).toHaveAttribute(
        'aria-expanded',
        'false',
      )
      await expect(portfolio.navMenu).toHaveAttribute('aria-hidden', 'true')
    },
  )
})
