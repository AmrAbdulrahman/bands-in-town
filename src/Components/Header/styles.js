const drawerWidth = 240;

export default theme => ({
  root: {},
  flex: {
    flex: 1,
  },
  appBar: {
    backgroundColor: '#00ACC1',
  },
  homeLink: {
    padding: theme.spacing.unit,
    borderRadius: 2,
    display: 'inline-flex',
  },
  homeLinkActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  navLink: {
    marginLeft: theme.spacing.unit,
  }
});
