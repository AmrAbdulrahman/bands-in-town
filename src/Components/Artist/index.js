import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ArtistsActions from '../../Redux/Artists';
import Strings from 'Services/Strings';
import styles from './styles';

export class ArtistBase extends Component {
  componentDidMount() {
    this.props.getArtist(this.props.name);
  }

  componentWillReceiveProps(props) {
    if (props.name !== this.props.name) {
      this.props.getArtist(props.name);
    }
  }

  get artist() {
    const fallback = {
      name: '...',
      thumb_url: require('../../Img/person-placeholder.jpg'),
      url: null,
      facebook_page_url: null,
    };

    const artist = this.props.artists.byName[this.props.name.toLowerCase()];

    return artist && !artist.loading ? artist : fallback;
  }

  render() {
    const { classes, className } = this.props;

    return (
      <React.Fragment>
        <Card className={classnames(classes.card, className)}>
          <CardMedia
            className={classes.media}
            image={this.artist.thumb_url}
            title={this.artist.name}
          />
          <CardContent>
            <Typography id="artist-name" variant="headline" component="h2">
              {this.artist.name}
            </Typography>
          </CardContent>
          <CardActions>
            { this.artist.url && (
              <Button id="url" size="small" color="primary" href={this.artist.url} target="blank_">
                {Strings.bandsInTown}
              </Button>
            )}

            { this.artist.facebook_page_url && (
              <Button id="facebook" size="small" color="primary" href={this.artist.facebook_page_url} target="blank_">
                {Strings.facebook}
              </Button>
            )}
          </CardActions>
        </Card>
      </React.Fragment>
    );
  }
}

ArtistBase.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  artists: state.artists,
});

const mapDispatchToProps = dispatch => ({
  getArtist: name => dispatch(ArtistsActions.get(name)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
)(ArtistBase);
