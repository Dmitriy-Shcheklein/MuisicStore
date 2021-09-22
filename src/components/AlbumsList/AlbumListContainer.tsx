import { FC, useEffect } from 'react';
import useTypeSelector from '../../hooks/usetypeSelector';
import ErrorIndicator from '../ErrorBoundary/ErrorIndicator';
import Spinner from '../Spinner';
import { useActions } from '../../hooks/useActions';
import AlbumList from './AlbumList';

const AlbumsListContainer: FC = () => {

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
    <AlbumList
      albums={albums}
      addItemToCart={addItemToCart}
      pages={pages}
      setAlbumPage={setAlbumPage}
    />
  )
}

export default AlbumsListContainer;