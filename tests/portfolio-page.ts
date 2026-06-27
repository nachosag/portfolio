import { Page, Locator } from '@playwright/test'

export class PortfolioPage {
  readonly page: Page
  readonly heroSection: Locator
  readonly heroReveal: Locator
  readonly typewriter: Locator
  readonly mobileMenuBtn: Locator
  readonly navMenu: Locator
  readonly filterBar: Locator
  readonly explorerGrid: Locator

  constructor(page: Page) {
    this.page = page
    this.heroSection = page.locator('#home')
    this.heroReveal = page.locator('#home .reveal').first()
    this.typewriter = page.locator('.typewriter')
    this.mobileMenuBtn = page.getByRole('button', { name: 'Toggle navigation' })
    this.navMenu = page.locator('#mobile-nav')
    this.filterBar = page.locator('#filter-bar')
    this.explorerGrid = page.locator('#explorer-grid')
  }

  async goto() {
    await this.page.goto('/')
    await this.page.waitForLoadState('domcontentloaded')
  }

  async scrollToHero() {
    await this.heroSection.scrollIntoViewIfNeeded()
    await this.page.waitForTimeout(500)
  }

  async clickFilter(category: string) {
    await this.filterBar
      .getByRole('button', { name: category, exact: true })
      .click()
    await this.page.waitForTimeout(200)
  }

  async getVisibleCards(): Promise<Locator> {
    return this.explorerGrid
      .locator('> div')
      .filter({ hasNot: this.page.locator('[style*="display: none"]') })
  }

  async getBackendCards(): Promise<Locator> {
    return this.explorerGrid.locator('> div[data-cat="backend"]')
  }

  async openMobileMenu() {
    await this.page.setViewportSize({ width: 375, height: 667 })
    await this.page.waitForTimeout(100)
    await this.mobileMenuBtn.click()
    await this.page.waitForTimeout(100)
  }

  async closeMobileMenu() {
    await this.mobileMenuBtn.click()
    await this.page.waitForTimeout(100)
  }
}
