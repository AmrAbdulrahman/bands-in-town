import LocalizedStrings from 'react-localization';

const Strings = new LocalizedStrings({
  en: {
    bandsInTown: 'Bands In Town',
    dateFromMustBeBeforeDateTo: '(From) date must be before (To) date',
    facebook: 'Facebook',
    filterEventsByDate: 'Filter events by date',
    from: 'From',
    homePlaceholderMessage: `There's nothing to see here, keep moving...`,
    location: 'Location',
    navHeadline: 'Bands In Town',
    noResultsFound: 'No results found',
    search: 'Search',
    searchEvents: 'Search events',
    searchPlaceholderMessage: `Enter an artist name, filter by dates, and let's see what BandsInTown has for you...`,
    searchByArtistName: 'Search by artist name...',
    to: 'To',
    visitEventPage: 'Visit Event Page',
  },
});

// @TODO fetch lang key dynamically somehow
Strings.setLanguage('en');

export default Strings;
