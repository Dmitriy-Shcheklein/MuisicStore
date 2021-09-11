import { FC, useEffect } from 'react';
import useTypeSelector from '../../hooks/usetypeSelector';
import ErrorIndicator from '../ErrorBoundary/ErrorIndicator';
import Spinner from '../Spinner';
import { useActions } from '../../hooks/useActions';
import AlbumItems from './AlbumItems';
import PagesNav from '../Pages/PagesNav';
import { makeStyles } from '@material-ui/core';
import { useCartActions } from '../../hooks/useActions';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& li': {
      listStyleType: 'none'
    }
  },
  nav: {
    display: 'flex',
  }
})

const AlbumsList: FC = () => {

  const classes = useStyles();

  const { albums, error, loading, limit, page } = useTypeSelector(state => state.albums);

  const { fetchAlbums, setAlbumPage, addItemToCart } = useActions();

  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  useEffect(() => {
    fetchAlbums(page, limit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])


  if (loading) {
    return <Spinner />
  }
  if (error) {
    return <ErrorIndicator />
  }
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

export default AlbumsList;