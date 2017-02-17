/**
 * Add your custom option overrides in here
 * See default.config.js for available options
 */
module.exports = () => {
  return {
    excludeReact: true,
api:     {
      open: 'https://g2pzdmvcge.execute-api.us-east-1.amazonaws.com/prod/open',
      completed: 'https://g2pzdmvcge.execute-api.us-east-1.amazonaws.com/prod/closed'
    },
    /* add your overides here */
  }
}
