import "../Subreddits/Subreddits.css"

export default function Subreddits() {
    return (
        <aside className="sidebar">
            <h2 className="title">
                Subreddits
            </h2>
            <ul className="subreddits-list">
                <li><button>Home</button></li>
                <li><button>Comics</button></li>
                <li><button>Football</button></li>
                <li><button>Funny</button></li>
            </ul>
        </aside>
    )
}