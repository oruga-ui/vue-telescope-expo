import { mount } from '@cypress/vue'
import VueTelescopeExpo from './VueTelescopeExpo.vue'


describe('VueTelescopeExpo', () => {
  it('renders the component', () => {
    cy.intercept('GET', 'https://api.vuetelescope.com/showcases/*', { fixture: 'only_one_page.json' })
    cy.intercept('GET', 'https://api.vuetelescope.com/showcases/count/*', { fixture: 'count_initial.json' })
    mount(VueTelescopeExpo, {
      propsData: {
        slugs: { ui : 'oruga' }
      }
    })
    cy.get('.grid-item', { timeout: 2000 }).should('be.visible')
    cy.get('.button').should('not.exist');
  })
  it('allows to load more items', () => {
    cy.intercept('GET', 'https://api.vuetelescope.com/showcases/?ui.slug=oruga&_limit=12&_start=0&_sort=rank%3Aasc', { fixture: 'page_1.json' })
    cy.intercept('GET', 'https://api.vuetelescope.com/showcases/?ui.slug=oruga&_limit=12&_start=12&_sort=rank%3Aasc', { fixture: 'page_2.json' })
    cy.intercept('GET', 'https://api.vuetelescope.com/showcases/count/*', { fixture: 'count_2_pages.json' })
    mount(VueTelescopeExpo, {
      propsData: {
        slugs: { ui : 'oruga' }
      }
    })
    cy.get('.grid-item', { timeout: 2000 }).should('be.visible')
    cy.get('.button').should('exist');
    cy.get('.button').click();
    cy.get('.grid-item', { timeout: 2000 }).should('have.length', 4)
  })
})
