// @flow
import { matchPath } from 'react-router';

export function getParam(param: string, location: Object, path: string) {
  const match = matchPath(location.payload.pathname, {
    path,
    exact: true,
    strict: false
  });
  if (!match) return null;
  return match.params[param];
}

export function getChangesetIdFromLocation(location: Object) {
  const changesetId = parseInt(getParam('id', location, '/changesets/:id'), 10);
  if (!changesetId || Number.isNaN(changesetId)) {
    return null;
  }
  return changesetId;
}
