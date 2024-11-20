const Post = () => {
    const title = "Temporary Card Title";
    const text = "This is some temporary text for the card.";
    const link = "#";

    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href={link} className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
};

export default Post;
