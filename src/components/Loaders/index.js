import CircularDeterminate from './circularLoader'

function Loader({ type }) {
  const showLoader = type => {
    switch (type) {
      case 'circularLoader':
        return CircularDeterminate()

      default:
        return null
    }
  }
  return showLoader(type)
}

export default Loader
