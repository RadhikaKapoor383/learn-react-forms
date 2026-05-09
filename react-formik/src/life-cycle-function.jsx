import React, { useState, useEffect } from 'react';

function UserCard() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Component mounted');
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(res => res.json())
            .then(data => {
                setUser(data);
                setLoading(false);
            })
            .catch(err => {               // ✅ Bug 3 Fixed
                setError(err.message);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        console.log('User state updated:', user);
    }, [user]);

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Time running...");
        }, 1000);
        return () => {
            clearInterval(timer);
            console.log('Component unmounted, timer cleared');
        };
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!user) return <div>User not found</div>;

    return (
        <div>
            <h1>👤 {user.name}</h1>
            <p>📧 {user.email}</p>
            <p>🌐 {user.website}</p>
            <hr />
            <p>Button clicked: {count} times</p>
            <button onClick={() => setCount(prev => prev + 1)}>
                Click Me
            </button>
        </div>
    );
}

export default UserCard;
// function App() {
//     return (
//         <div>
//             <h1>React Lifecycle Demo</h1>
//             <UserCard />
//         </div>
//     )
// }