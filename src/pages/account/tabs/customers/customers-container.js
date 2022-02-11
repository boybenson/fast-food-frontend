import { useQuery } from "@apollo/client";
import React from "react";
import { GET_USERS } from "../../../../graphql/queries/users";
import CustomersComponent from "./customers-component";

const CustomersContainer = () => {
  let { error, loading, data } = useQuery(GET_USERS, {
    pollInterval: 500,
  });
  return (
    <CustomersComponent leading={loading} data={data?.getUsers} error={error} />
  );
};

export default CustomersContainer;
