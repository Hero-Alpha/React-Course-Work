function Model({ id, header, nav, section, article, aside, footer, onClose }) {
    return (
        <div id={id || 'model'} className="model">
            <div className="model-content">
                <div className="header">
                    <span onClick={onClose} className="closeCrossIcon">&times;</span>
                    <h2>{header ? header : "Header"}</h2>
                </div>
                <div className="nav">
                    <h2>{nav ? nav : "Navbar"}</h2>
                </div>
                <div className="section">
                    <h2>{section ? section : "Section"}</h2>
                </div>
                <div className="article">
                    <h2>{article ? article : "Article"}</h2>
                </div>
                <div className="aside">
                    <h2>{aside ? aside : "Aside"}</h2>
                </div>
                <div className="footer">
                    <h2>{footer ? footer : "Footer"}</h2>
                </div>
            </div>
        </div>
    );
}

export default Model;