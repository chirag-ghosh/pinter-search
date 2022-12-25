import Fuse from 'fuse.js';
import { useEffect, useState } from 'react';
import links from '../data/saved_links.json';

function Home() {
  const fuse = new Fuse(links.links);

  const [query, setQuery] = useState<string>('');
  const [linkList, setLinkList] = useState<any[]>([]);

  useEffect(() => {
    setLinkList(fuse.search(query));
  }, [query]);

  return (
    <div className="home">
      <h1>Search your history up!</h1>
      <input value={query} type="text" onChange={(e) => setQuery(e.target.value)} />
      <div className="results">
        {linkList.map((link) => {
          return <div key={link.refIndex}>{link.item}</div>;
        })}
      </div>
    </div>
  );
}

export default Home;
