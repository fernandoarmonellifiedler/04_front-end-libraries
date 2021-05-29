const Dashboard = ({ name, bio, blog, avatar_url }) => {
    return (
        <>
            <h1>{name}</h1>
            <p>{`Bio: ${bio}`}</p>
            <p>{`Blog: ${blog}`}</p>
            <img src={avatar_url} />
        </>
    );
};

Dashboard.getInitialProps = async () => {
    const res = await fetch(
        "https://api.github.com/users/fernandoarmonellifiedler"
    );
    const user = await res.json();
    console.log(user);

    return user;
};

export default Dashboard;
