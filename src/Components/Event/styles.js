export default theme => ({
  card: {
    // marginTop: theme.spacing.unit * 2,
  },
  modalContent: {
    position: 'absolute',
    width: theme.spacing.unit * 70,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    top: 50,
    left: '50%',
    transform: 'translateX(-50%)',
    maxHeight: 'calc(100vh - 150px)',
    overflowY: 'scroll',
  },
});
