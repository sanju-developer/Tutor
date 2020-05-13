import CircularDeterminate from './circularLoader'

function Loader({ type }) {
  const showLoader = type => {
    switch (type) {
      case 'circularLoader':
        return CircularDeterminate()
    }
  }
  return showLoader(type)
}

export default Loader
