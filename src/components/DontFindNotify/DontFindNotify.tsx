import { makeStyles } from "@material-ui/core";
import { FC } from "react";

const useStyles = makeStyles({
  root: {
    fontSize: '3rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh '
  }
})

const DontFindNotify: FC = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2 >
        We didn't find anything
      </h2>
    </div>
  )
}

export default DontFindNotify;
