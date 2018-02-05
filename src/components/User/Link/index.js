import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserLink = ({ user, children }) => {
  const link = user ? `/edit/${user.id}` : '/create';
  return (
    <Link to={link}>
      {children}
    </Link>
  );
};

UserLink.defaultProps = {
  user: null,
};

UserLink.propTypes = {
  children: PropTypes.element.isRequired,
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
  }),
};

export default UserLink;
