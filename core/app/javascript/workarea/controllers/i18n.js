import I18n from "i18n-js"
// import "i18n/filtered.js.erb"

I18n.translations = I18n.translations || {};
I18n.fallbacks = true;

const locale = document.querySelector('meta[property="locale"]')
                       .getAttribute('content');

if (locale) {
  I18n.locale = locale;
}

export default I18n