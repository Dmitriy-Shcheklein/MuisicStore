import React, { FC } from 'react';
import { Button } from '@mui/material/';


interface PageNavProps {
  setAlbumPage: Function,
  page: number,
}

// const useStyles = makeStyles({
//   root: {
//     '& Button': {
//       margin: '0 1px',
//     }
//   }
// })

const PagesNav: FC<PageNavProps> = (props) => {

  const { page, setAlbumPage } = props;

  return (
    <div
    // className={classes.root}
    >
      <Button variant="contained" color="primary"
        onClick={() => setAlbumPage(page)}
      >{page}</Button>
    </div>
  )
}

export default PagesNav;