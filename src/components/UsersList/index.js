import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsersRequestAction } from '../../actions/actionCreators';

const UsersList = props => {
  const { users, isFetching, error, getUsersRequestAction } = props;

  useEffect(() => {
    getUsersRequestAction({});
  }, []);

  const loadMore = () => {
    getUsersRequestAction({
        offset: users.length
      });
  };
  console.log(users);
  return (
    <div>
      <h1>Users list</h1>
      {isFetching && <p>Loading . . .</p>}
      {error && <p>error</p> }
      <button onClick={loadMore}>Load more</button>
      {users
        ? users.map(u => {
            return <li key={u.id}>{u.firstName}</li>;
          })
        : null}
    </div>
  );
};
const mapStateToProps = ({ user }) => user;
export default connect(mapStateToProps, { getUsersRequestAction })(UsersList);
