import React from 'react';

const LeaderBoardTable = () => {
    return (
        <div>
            <div className="overflow-x-auto rounded-lg bg-white/10 border border-white/25 backdrop-blur-2xl shadow-lg">
                <table className="min-w-full text-left text-sm ">
                    <thead className=" text-white font-normal" >
                        <tr>
                            <th className="px-4 py-2">Rank</th>
                            <th className="px-4 py-2">Username</th>
                            <th className="px-4 py-2">Confessions</th>
                            <th className="px-4 py-2">Upvotes</th>
                            <th className="px-4 py-2">Streak</th>
                        </tr>
                    </thead>
                    <tbody className="text-white font-light divide-y-1 divide-white/10 p-2">
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td className="px-4 py-2">{item.rank}</td>
                                <td className="px-4 py-2">{item.username}</td>
                                <td className="px-4 py-2">{item.confessions}</td>
                                <td className="px-4 py-2">{item.upvotes}</td>
                                <td className="px-4 py-2">{item.streak}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LeaderBoardTable;


const data = [
    { rank: 1, username: 'User1', confessions: 10, upvotes: 50, streak: 5 },
    { rank: 2, username: 'User2', confessions: 8, upvotes: 40, streak: 3 },
    { rank: 4, username: 'User3', confessions: 6, upvotes: 30, streak: 2 },
    { rank: 5, username: 'User4', confessions: 6, upvotes: 30, streak: 2 },
    { rank: 6, username: 'User5', confessions: 6, upvotes: 30, streak: 2 },
    { rank: 7, username: 'User6', confessions: 6, upvotes: 30, streak: 2 },
    { rank: 8, username: 'User7', confessions: 6, upvotes: 30, streak: 2 },
    { rank: 9, username: 'User8', confessions: 6, upvotes: 30, streak: 2 },
    { rank: 10, username: 'User9', confessions: 6, upvotes: 30, streak: 2 },
];
