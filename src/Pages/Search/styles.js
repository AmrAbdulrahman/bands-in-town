export default theme => ({
  form: {
    backgroundColor: '#fff',
    padding: theme.spacing.unit * 2,
    border: '1px solid #e9e9e9',
  },
  searchButtonWrapper: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'center',
    },
  },
  placeholderMessage: {
    marginTop: theme.spacing.unit * 2,
    padding: theme.spacing.unit,
    backgroundColor: theme.palette.grey[200],
  },
  noResultsMessage: {
    color: theme.palette.common.orange,
  },
  events: {
    marginTop: theme.spacing.unit,
    height: 'calc(100vh - 170px)',
    minHeight: 465,
    overflowY: 'auto',
  },
});
