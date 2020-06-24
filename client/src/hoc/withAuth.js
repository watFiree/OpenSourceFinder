import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getUser } from '../redux/actions/signUser';
import { getCookies } from '../helpers/getCookies';
import { mapStateToProps } from '../helpers/mapStateToProps';

const withAuth = (Component) => (props) => {
  const { getUser: getData, user } = props;
  useEffect(() => {
    if (!user.isAuth) {
      const { token } = getCookies();
      if (token) getData(token);
    }
  }, [user.isAuth, getData]);

  return <Component {...props} />;
};

const composed = compose(connect(mapStateToProps('user'), { getUser }), withAuth);
export default composed;
