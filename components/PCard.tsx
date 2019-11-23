import * as React from 'react'
import {Card} from "@material-ui/core";
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from "@material-ui/core/CardContent";

type Props = {
  title: string,
  content: string,
  styles: any
};

export default (props: Props) => {
  //const classes = useStyles();
  return (
    <Card style={props.styles.Paper}>
      <CardHeader title={props.title}/>
      <CardContent>
        {props.content}
      </CardContent>
    </Card>
  );
}
