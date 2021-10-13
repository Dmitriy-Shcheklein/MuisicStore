import { FC, useEffect, useRef, useState } from 'react';
import useTypeSelector from '../../hooks/usetypeSelector';
import ErrorIndicator from '../ErrorBoundary/ErrorIndicator';
import Spinner from '../Spinner';
import { useActions } from '../../hooks/useActions';
import AlbumList from './AlbumList';
import Snack from '../Snack';
import DontFindNotify from '../DontFindNotify';

const AlbumsListContainer: FC = () => {

  const { albums, error, loading, limit, page, total } = useTypeSelector(state => state.albums);

  const { productName } = useTypeSelector(state => state.findAndFilter)

  const { fetchAlbums, setAlbumPage, addItemToCart } = useActions();

  const [openSnack, setOpenSnack] = useState(false);

  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    fetchAlbums(page, limit, productName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, productName])

  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
    } else if (total) {
      setOpenSnack(true)
    }
  }, [total])

  if (loading) {
    return <Spinner />
  }
  if (error) {
    return <ErrorIndicator />
  }
  return (
    <>
      {albums.length ?
        (<>
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
        </>) :
        <DontFindNotify />
      }
    </>
  )
}

export default AlbumsListContainer;