import * as API_UTIL from '../Utils/APIUtils';

export const RECEIVE_ALL_WORKS = 'RECEIVE_ALL_WORKS';
export const RECEIVE_ALL_JOURNALS = 'RECEIVE_ALL_JOURNALS';
export const RECEIVE_WORK_ERRORS = 'RECEIVE_WORK_ERRORS';
export const RECEIVE_JOURNAL_ERRORS = 'RECEIVE_JOURNAL_ERRORS';

export const receiveAllWorks = (works) => ({
  type: RECEIVE_ALL_WORKS,
  works
});

export const receiveAllJournals = (journals) => ({
  type: RECEIVE_ALL_JOURNALS,
  journals
});

export const receiveWorkErrors = errors => ({
  type: RECEIVE_WORK_ERRORS,
  errors
});

export const receiveJournalErrors = errors => ({
  type: RECEIVE_JOURNAL_ERRORS,
  errors
});


export const requestAllWorks = () => dispatch => {
  API_UTIL.fetchAllWorks().then(works => {
    return dispatch(receiveAllWorks(works))
  }, err => (
    dispatch(receiveWorkErrors(err.responseJSON))
  ))
}
export const requestAllJournals = () => dispatch => (
  API_UTIL.fetchAllJournals().then(journals => (
    dispatch(receiveAllJournals(journals))
  ), err => (
    dispatch(receiveJournalErrors(err.responseJSON))
  ))
);
