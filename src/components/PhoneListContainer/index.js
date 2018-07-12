// REACT
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// STYLES 
import { withTheme } from 'emotion-theming';
import * as Bs from 'styles/base/'

// ALL
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

class PhoneListContainer extends Component {

  render() {
    const { phoneList, theme, ...rProps } = this.props

    return <Bs.Box f="medium" px={["3%", "7%"]}>
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
            
            <Bs.LinkReactR 
              to={`/phone/${phone.id}`}
              w={1}
              height='100%'>
              <SimpleMediaCardStyled dat={phone} />
            </Bs.LinkReactR>

          </Bs.Flex>
        ))}

      </Bs.Flex>

    </Bs.Box>;
  }
}


const styles = {
  card: {
    maxWidth: 350,
    flex: '1 1 auto'
  },
  media: {
    height: 0,
    paddingTop: '80%', // 9:16
    backgroundSize: 'contain',
  },
};

const SimpleMediaCard = (props) => {
  const { classes, dat } = props;
  return (
    <Bs.Flex
      w={1} 
      justify='center'>
      <Card className={classes.card} >
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
      </Bs.Flex>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

const SimpleMediaCardStyled =  withStyles(styles)(SimpleMediaCard);

export default  withTheme( PhoneListContainer )
