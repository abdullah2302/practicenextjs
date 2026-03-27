const adminUserPage = async ({params}: 
{
    params: Promise<{ username: string }>;
}) => {
    const { username } = await params;
    return (
        <div className="text-center mt-10 text-100">
            <h1>Admin User Page using dynamic routes</h1>
            <p>User ID: {username}</p>
        </div>
    );
};

export default adminUserPage;