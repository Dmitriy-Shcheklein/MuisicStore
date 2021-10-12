import { FC, useEffect, useState } from 'react';
import useTypeSelector from '../../hooks/usetypeSelector';
import ErrorIndicator from '../ErrorBoundary/ErrorIndicator';
import Spinner from '../Spinner';
import { useActions } from '../../hooks/useActions';
import AlbumList from './AlbumList';
import Snack from '../Snack';

const AlbumsListContainer: FC = () => {

  const { albums, error, loading, limit, page, total } = useTypeSelector(state => state.albums);



  const { fetchAlbums, setAlbumPage, addItemToCart } = useActions();

  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  useEffect(() => {
    fetchAlbums(page, limit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  useEffect(() => {
    if (total) {
      setOpenSnack(true)
    }
  }, [total])

  const [openSnack, setOpenSnack] = useState(false);


  if (loading) {
    return <Spinner />
  }
  if (error) {
    return <ErrorIndicator />
  }
  return (
    <>
      <AlbumList
        albums={albums}
        addItemToCart={addItemToCart}
        pages={pages}
        setAlbumPage={setAlbumPage}
      />
      <Snack
        open={openSnack}
        onClose={() => setOpenSnack(false)}
      />
    </>
  )
}

export default AlbumsListContainer;