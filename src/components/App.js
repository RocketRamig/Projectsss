function App({ Title }) {
  return (
    <>
      <a target="_blank" rel="noopener noreferrer" href={`${Title.src}`}>
        <section className="Project">
          <img alt="cool" src={`${Title.img}`} />
          <p>{`${Title.text}`}</p>
        </section>
      </a>
    </>
  );
}

export default App;
