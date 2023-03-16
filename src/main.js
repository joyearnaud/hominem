// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import DefaultLayout from '~/layouts/Default.vue'
import 'prismjs/themes/prism.css'

import Vssue from 'vssue';
import GithubV3 from '@vssue/api-github-v3';
import 'vssue/dist/vssue.css'

export default function (Vue, { router, head, isClient, appOptions }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Stylish&display=swap'
  }),
  appOptions.i18n.setLocaleMessage('en', require('./locales/en.json')),
  appOptions.i18n.setLocaleMessage('fr', require('./locales/fr.json'))
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(BootstrapVue)
  Vue.use(BootstrapVueIcons)
  Vue.use(Vssue, {
    api: GithubV3,
    owner: process.env.GITHUB_OWNER,
    repo: process.env.GITHUB_REPO,
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
  })
}
