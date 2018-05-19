export default theme => ({
  root: {
    position: 'fixed',
    zIndex: theme.zIndex.loadingBar,
    backgroundColor: theme.palette.common.red,
    height: 3,
  },
});
