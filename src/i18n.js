import en from './assets/en.json'
import cs from './assets/cs.json'
import VueI18n from 'vue-i18n'
import Vue from 'vue'

Vue.use(VueI18n);

export default new VueI18n({
    locale: localStorage.getItem('lang') || 'en',
    messages: {
        en: en,
        cs: cs
    }
})