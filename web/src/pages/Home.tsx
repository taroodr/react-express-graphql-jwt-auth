import React from 'react'
import { useUsersQuery } from '../generated/graphql';
import { userInfo } from 'os';

interface  Props {

}

export const Home: React.FC<Props> = () => {
  const {data, loading} = useUsersQuery({fetchPolicy: "network-only"});
  if (!data) {
    return <div>loading</div>
  }
  return <div>
    <div>users:</div>
    <ul>
      {data.users.map(user => {
        return (
          <li key={user.id}>
            {user.email}, {user.id}
          </li>
        )
      })}
    </ul>
    </div>;
}