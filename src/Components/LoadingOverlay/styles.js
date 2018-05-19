export default theme => ({
  root: {
    position: 'absolute',
    zIndex: theme.zIndex.loadingOverlay,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: '5%',
  },
});
