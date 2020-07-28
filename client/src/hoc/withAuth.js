import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getUser } from '../redux/actions/signUser';
import { getCookies } from '../helpers/getCookies';
import { mapStateToProps } from '../helpers/mapStateToProps';

const withAuth = (Component) => (props) => {
  const { getUser: getData, user } = props;
  const history = useHistory();
  useEffect(() => {
    if (!user.isAuth) {
      const { token } = getCookies();
      if (token) getData(token);
      if (!token && !user.loading) history.push('/');
    }
  }, [user.isAuth, user.loading, getData, history]);

  return <Component {...props} />;
};

const composed = compose(connect(mapStateToProps('user'), { getUser }), withAuth);
export default composed;
