import React from 'react'
import { useUsersQuery, useByeQuery } from '../generated/graphql';
import { userInfo } from 'os';

interface  Props {

}

export const Bye: React.FC<Props> = () => {
  const {data, loading, error} = useByeQuery({
    fetchPolicy: "network-only"
  });
  if (loading) {
    return <div>loading...</div>
  }
  if (error) {
    console.log(error)
    return <div>err</div>
  }
  if (!data) {
    return <div>no data</div>
  }
  return <div>
    <div>{data.bye}</div>
    </div>;
}