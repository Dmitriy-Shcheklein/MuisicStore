import { FC } from 'react';
import AlbumItems from './AlbumItems';
import PagesNav from '../Pages/PagesNav';
import { makeStyles } from '@material-ui/core';
import { Albums } from '../../types/albumsTypes';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& li': {
      listStyleType: 'none'
    },
    '& ul': {
      width: '30%',
      padding: '0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start'

    }
  },
  nav: {
    display: 'flex',
  }
})

interface AlbumListProps {
  albums: Albums[],
  addItemToCart: Function,
  setAlbumPage: Function,
  pages: number[],
}


const AlbumList: FC<AlbumListProps> = (props) => {

  const { albums, addItemToCart, pages, setAlbumPage } = props;

  const classes = useStyles();

  return (
    <section className={classes.root}>
      <ul>
        {
          albums.map(album =>
            <li key={album.id}>
              <AlbumItems
                id={album.id}
                userId={album.userId}
                title={album.title}
                price={album.price = 10}
                addItemToCart={() => addItemToCart(album.id)}
              />
            </li>)
        }
      </ul>
      <ul className={classes.nav}>
        {
          pages.map((page, idx) =>
            <li
              key={idx}>
              <PagesNav
                setAlbumPage={setAlbumPage}
                page={page}
              />
            </li>)
        }
      </ul>
    </section>
  )
}

export default AlbumList;