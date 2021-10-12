import { FC } from 'react';
import AlbumItems from './AlbumItems';
import PagesNav from '../Pages/PagesNav';
import { makeStyles } from '@material-ui/core';
import { Albums } from '../../types/albumsTypes';
import useTypeSelector from '../../hooks/usetypeSelector';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& li': {
      listStyleType: 'none'
    },
    '& ul': {
      padding: '0',
    }
  },
  main: {
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  nav: {
    display: 'flex',
    flexDirection: 'row',
  },
})

interface AlbumListProps {
  albums: Albums[],
  addItemToCart: Function,
  setAlbumPage: Function,
  pages: number[],
}

const AlbumList: FC<AlbumListProps> = (props) => {

  const { albums, addItemToCart, pages, setAlbumPage } = props;

  const { productName } = useTypeSelector(state => state.findAndFilter)

  const classes = useStyles();

  return (
    <section className={classes.root}>
      <ul className={classes.main}>
        {
          albums.map(album =>
            <li
              key={album.id}>
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
          !productName.length && pages.map((page, idx) =>
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