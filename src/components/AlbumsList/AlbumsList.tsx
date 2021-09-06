import { FC, useEffect } from 'react';
import useTypeSelector from '../../hooks/usetypeSelector';
import ErrorIndicator from '../ErrorBoundary/ErrorIndicator';
import Spinner from '../Spinner';
import { useActions } from '../../hooks/useActions';

const AlbumsList: FC = () => {

  const { albums, error, loading, limit, page } = useTypeSelector(state => state.albums);

  const { fetchAlbums, setAlbumPage } = useActions();

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
    <>
      <ul>
        {
          albums.map(album =>
            <li key={album.id}>
              {album.title} - {album.userId} -{album.price}
            </li>)
        }
      </ul>
      <ul>
        {
          pages.map((page, idx) =>
            <li
              key={idx}>
              <button
                onClick={() => setAlbumPage(page)}
              >{page}</button>
            </li>)
        }
      </ul>
    </>
  )
}

export default AlbumsList;