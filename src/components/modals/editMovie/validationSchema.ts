import * as Yup from 'yup'

export const editMovieValidationSchema = Yup.object().shape({
  id: Yup.string().required('Required'),
  title: Yup.string().required('Required'),
  release_date: Yup.string().required('Required'),
  overview: Yup.string().required('Required'),
  poster_path: Yup.string().url().required('Required'),
})
