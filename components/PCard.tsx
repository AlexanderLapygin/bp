import * as React from 'react'
import {Card} from "@material-ui/core";
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from "@material-ui/core/CardContent";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

type Props = {
  title: string
  content: string
};

export default (props: Props) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>Card content
      <CardHeader title="CardHeader title"/>
      <CardContent>
        CardContent content
        {props.content}
      </CardContent>
    </Card>
  );
}
