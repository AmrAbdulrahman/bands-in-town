import LocalizedStrings from 'react-localization';

const Strings = new LocalizedStrings({
  en: {
    navHeadline: 'Bands In Town',
    search: 'Search',
    comingSoon: 'Coming Soon',
    homePlaceholderMessage: `There's nothing to see here, keep moving...`,
    seeComingSoonEvents: 'See coming soon events',
  },
});

// @TODO fetch lang key as deployment argument
Strings.setLanguage('en');

export default Strings;
