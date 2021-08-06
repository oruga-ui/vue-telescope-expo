import VueTelescopeClient from './VueTelescopeClient.js'


describe('VueTelescopeClient', () => {
  it('fetches multiple plugins count', () => {
    return cy.intercept('GET', 'https://api.vuetelescope.com/showcases/count/?framework.slug=nuxtjs&ui.slug=buefy&plugins.slug=vue-i18n&plugins.slug=vue-apollo&_sort=rank%3Aasc', { fixture: 'count_initial.json' })
      .then(() => {
        const client = new VueTelescopeClient()
        return client.getItemsCount({framework: 'nuxtjs', ui: 'buefy', plugins: ['vue-i18n', 'vue-apollo']})
          .then(response => {
            expect(response).to.equal(2)
          })
      })

  }),
  it('fetches multiple plugins', () => {
    return cy.intercept('GET', 'https://api.vuetelescope.com/showcases/?framework.slug=nuxtjs&ui.slug=buefy&plugins.slug=vue-i18n&plugins.slug=vue-apollo&_limit=12&_start=0&_sort=rank%3Aasc', { fixture: 'multiple_plugins.json' })
      .then(() => {
        const client = new VueTelescopeClient()
        return client.getItems({framework: 'nuxtjs', ui: 'buefy', plugins: ['vue-i18n', 'vue-apollo']})
          .then(items => {
            expect(items[0].domain).to.equal('education.fr')
          })
      })
  })
})
