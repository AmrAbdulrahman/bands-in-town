export default theme => ({
  root: {
    textDecoration: 'none',
    color: 'inherit',
    fontFamily: theme.typography.fontFamily,
    display: 'inline-flex',
    alignItems: 'center',
    padding: `${theme.spacing.unit / 2}px ${theme.spacing.unit}px`,
  },
  active: {
    borderBottom: '2px solid',
  },
})
