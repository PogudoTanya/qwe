import * as api from './favourites.api';

export const getApps = () => async (dispatch) => {
  const applications = await api.getApps();
  dispatch({ type: 'applications:set', payload: { applications: applications.results } });
};

