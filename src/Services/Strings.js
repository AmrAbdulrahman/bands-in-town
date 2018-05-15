import LocalizedStrings from 'react-localization';

const Strings = new LocalizedStrings({
  en: {
    navHeadline: 'Bands In Town',
    search: 'Search',
    comingSoon: 'Coming Soon',
  },
});

// @TODO fetch lang key as deployment argument
Strings.setLanguage('en');

export default Strings;
