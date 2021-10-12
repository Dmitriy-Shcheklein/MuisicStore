import { makeStyles } from '@material-ui/styles'
import { FC } from 'react'
import { useFindAndFilterActions } from '../../hooks/useActions'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    '& span': {
      marginRight: '0.5rem'
    },
    '& input': {
      height: '2rem',
      borderRadius: '0.5rem',
      paddingLeft: '0.5rem',
    }
  }
})

const Searchfield: FC = () => {

  const classes = useStyles()

  const { findProduct } = useFindAndFilterActions();

  return (
    <div className={classes.root}>
      <label><span>Search</span>
        <input
          onChange={(e) => findProduct(e)}
          placeholder="Enter a search data"
        />
      </label>
    </div>
  )
}

export default Searchfield
