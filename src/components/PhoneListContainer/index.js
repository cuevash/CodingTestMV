// REACT
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// STYLES 
import { withTheme } from 'emotion-theming';
import styled, { css } from 'react-emotion'
import * as Ps from 'ProjStyles/'
import * as Bs from 'styles/base/'
import * as CssUtils from 'ProjStyles/cssUtils';

// ALL
import { withStyles } from '@material-ui/core/styles'

import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';


class PhoneListContainer extends Component {

  componentDidUpdate(prevProps) {
  }

  render() {
    const { phoneList, theme, ...rProps } = this.props

    return <Bs.Box f="medium" px={["5%", "5%", "5%", "5%"]}>
      {/* Phones */}
      <Bs.Flex 
        flexWrap='wrap'
        justify="center" >

        {phoneList.map(phone => (
          <Bs.Flex
            justify="center" 
            f='medium'
            py='0.5em'
            px='0.5em'
            w={[1, 1/2, 1/3, 1/4]}
            position>
            <Bs.LinkReactR to={`/phone/${phone.id}`}
              w={1}
              height='100%'>
              <SimpleMediaCardStyled dat={phone} />
            </Bs.LinkReactR>

            {/* Hover color */}
            {/* <Bs.BoxAbs
              css={{
                '&:hover': {
                  backgroundColor: theme.colors.purpleLight
                }
              }}
            /> */}
          </Bs.Flex>
        ))}

      </Bs.Flex>

    </Bs.Box>;
  }
}


const styles = {
  card: {
    // maxWidth: 250,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

const SimpleMediaCard = (props) => {
  const { classes, dat } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography gutterBottom variant="title" noWrap>
            {dat.title}
          </Typography>
        </CardContent>

        <CardMedia
          className={classes.media}
          image={dat.imageUrl}
          title={dat.title}
        />

        <CardActions>
          <Button size="small" color="primary" >
            Details
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

const Title = (props) => (
  <Bs.Box
    f={['small', 'medium']}>
    {props.children}
  </Bs.Box>
)

const Desc = (props) => (
  <Bs.Box
    f={['small', 'medium']}>
    {props.children}
  </Bs.Box>
)

const Details = (props) => (
  <Bs.Box
    f={['small', 'medium']}>
    {props.children}
  </Bs.Box>
)


const SimpleMediaCardStyled =  withStyles(styles)(SimpleMediaCard);


export default  withTheme( PhoneListContainer )
