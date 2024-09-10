import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_ISSUES = gql`
  query CustomerIssues {
    issues(
      filter: {
        and: [
          { labels: { name: { eq: "Customer Success" } } }
          { labels: { name: { eq: "Pod - Coverage" } } }
        ]
      }
    ) {
      nodes {
        identifier
        title
        priorityLabel
        state {
          name
        }
      }
    }
  }
`;

function IssueList() {
  const { loading, error, data } = useQuery(GET_ISSUES);

  if (loading) return <p className="text-gray-600">Loading issues...</p>;
  if (error) return <p className="text-red-600">Error: {error.message}</p>;

  const issues = data.issues.nodes;

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-xl font-semibold mb-4">Linear Issues</h2>
      <ul className="space-y-2">
        {issues.map((issue) => (
          <li key={issue.id} className="border-b pb-2">
            <h3 className="font-medium">{issue.title}</h3>
            <p className="text-sm text-gray-600">Status: {issue.state.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IssueList;
