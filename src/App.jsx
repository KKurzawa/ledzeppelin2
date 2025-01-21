import './App.css'
const App = () => {
  return (
    <>
      <main className="main rounded-lg">
        <img src="/AlbumArt.jpg" alt="" className="album-art" />
        <img src="cadieux-cafe-logo.png" alt="" className='cadieux-logo' />
        <h1 className="led-text px-5 mt-5 rounded-lg text-[6rem]">LED-DETROIT</h1>
        <h2 className="plays-text text-[2rem] mt-2">PLAYS</h2>
        <h3 className="houses-text -mt-3 text-[4rem]">LED ZEPPELIN II</h3>
        <h2 className="other-text -mt-3 text-[2rem]">AND OTHER LED-ZEPPELIN CLASSICS</h2>
        <h3 className="date-text -mt-3 text-[3rem]">FEBRUARY 7 2025 AT THE CADIEUX CAFE</h3>
        <div className="time-cover text-[3rem]">
          <h2>8pm</h2>
          <h2>$20</h2>
        </div>
      </main>
    </>
  )
}

export default App