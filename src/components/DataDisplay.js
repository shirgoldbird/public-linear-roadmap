import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_DATA = gql`
  query GetData {
    viewer {
      id
      name
      email
    }
  }
`;

function DataDisplay() {
  const { loading, error, data } = useQuery(GET_DATA);

  if (loading) return <p className="text-gray-600">Loading...</p>;
  if (error) return <p className="text-red-600">Error: {error.message}</p>;

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-xl font-semibold mb-2">Data from GraphQL API</h2>
      <pre className="bg-gray-100 p-4 rounded">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}

export default DataDisplay;