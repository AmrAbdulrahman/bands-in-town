import LocalizedStrings from 'react-localization';

const Strings = new LocalizedStrings({
  en: {
    navHeadline: 'Bands In Town',
    search: 'Search',
    homePlaceholderMessage: `There's nothing to see here, keep moving...`,
    searchEvents: 'Search events',
    from: 'From',
    to: 'To',
    searchPlaceholderMessage: `Enter an artist name, filter by dates, and let's see what BrandsInTown has for you...`,
    noResultsFound: 'No results found',
    visitEventPage: 'Visit Event Page',
    location: 'Location',
    brandsInTown: 'Brands In Town',
    facebook: 'Facebook',
    searchByArtistName: 'Search by artist name...',
    dateFromMustBeBeforeDateTo: '(From) date must be before (To) date',
    filterEventsByDate: 'Filter events by date',
  },
});

// @TODO fetch lang key dynamically somehow
Strings.setLanguage('en');

export default Strings;
