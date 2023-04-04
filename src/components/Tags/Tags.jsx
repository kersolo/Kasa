import './tags.css';

export default function Tags({ infos }) {
  const Tags = infos.tags.map((text, index) => (
    <li key={index} className="tag">
      {text}
    </li>
  ));

  return <ul className="tags-container">{Tags}</ul>;
}
