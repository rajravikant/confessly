import React from "react";

interface LeaderBoardTableProps {
    isLoading: boolean;
    error: Error | null;
    users: Array<{
        avatar_url: string | null;
        confession_count: number | null;
        id: string;
        username: string | null;
    }>;
}

const LeaderBoardTable: React.FC<LeaderBoardTableProps> = ({ isLoading, error, users }) => {
  return (
    <div>
      <div className="overflow-x-auto rounded-lg bg-white/10 border border-white/25 backdrop-blur-2xl shadow-lg">
        <table className="min-w-full text-left text-sm ">
          <thead className=" text-white font-normal">
            <tr>
              <th className="px-4 py-2">Rank</th>
              <th className="px-4 py-2">Username</th>
              <th className="px-4 py-2">Confessions</th>
              <th className="px-4 py-2">Upvotes</th>
              <th className="px-4 py-2">Streak</th>
            </tr>
          </thead>
          {isLoading ? (
            <TableSkeleton />
          ) : error ? (
            <tbody>
              <tr>
                <td colSpan={5} className="text-center text-red-500">
                  Error loading leaderboard: {error.message}
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody className="text-white font-light divide-y-1 divide-white/10 p-2">
              {users?.map((user, index) => (
                <tr key={index}>
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{user.username}</td>
                  <td className="px-4 py-2">{user.confession_count}</td>
                  <td className="px-4 py-2">{24}</td>
                  <td className="px-4 py-2">{5}</td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default LeaderBoardTable;

const TableSkeleton = () => {
  return (
    <tbody className="text-white font-light divide-y-1 divide-white/10 p-2">
      {Array.from({ length: 10 }).map((_, index) => (
        <tr key={index} className="space-y-2">
          <td className=" px-4 py-2"><div className="h-2.5 animate-pulse rounded-full bg-gray-600 w-24 mb-2.5"></div></td>
          <td className=" px-4 py-2"><div className="h-2.5 animate-pulse rounded-full bg-gray-600 w-24 mb-2.5"></div></td>
          <td className=" px-4 py-2"><div className="h-2.5 animate-pulse rounded-full bg-gray-600 w-24 mb-2.5"></div></td>
          <td className=" px-4 py-2"><div className="h-2.5 animate-pulse rounded-full bg-gray-600 w-24 mb-2.5"></div></td>
          <td className=" px-4 py-2"><div className="h-2.5 animate-pulse rounded-full bg-gray-600 w-24 mb-2.5"></div></td>
        
        </tr>
      ))}
    </tbody>
  );
};
