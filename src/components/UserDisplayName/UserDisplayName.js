import React from 'react';
import classNames from 'classnames';
import { oneOfType, string } from 'prop-types';
import { propTypes } from '../../util/types';

const UserDisplayName = props => {
  const {
    rootClassName,
    className,
    user,
    intl,
    deletedUserDisplayName,
    bannedUserDisplayName,
  } = props;
  const hasAttributes = user && user.attributes;
  const userIsDeleted = hasAttributes && user.attributes.deleted;
  const userIsBanned = hasAttributes && user.attributes.banned;
  const userHasProfile = hasAttributes && user.attributes.profile;

  const deletedUserDisplayNameInUse = deletedUserDisplayName
    ? deletedUserDisplayName
    : intl.formatMessage({
        id: 'UserDisplayName.deleted',
      });

  const bannedUserDisplayNameInUse = bannedUserDisplayName
    ? bannedUserDisplayName
    : intl.formatMessage({
        id: 'UserDisplayName.banned',
      });

  const classes = classNames(rootClassName, className);
  return (
    <span className={classes}>
      {userHasProfile
        ? user.attributes.profile.displayName
        : userIsDeleted
        ? deletedUserDisplayNameInUse
        : userIsBanned
        ? bannedUserDisplayNameInUse
        : null}
    </span>
  );
};

UserDisplayName.defaultProps = {
  rootClassName: null,
  className: null,

  user: null,
  deletedUserDisplayName: null,
  bannedUserDisplayName: null,
};

UserDisplayName.propTypes = {
  rootClassName: string,
  className: string,

  user: oneOfType([propTypes.user, propTypes.currentUser]),
  deletedUserDisplayName: string,
  bannedUserDisplayName: string,
};

export default UserDisplayName;
