import AppComics from "./AppComics.jsx";

function AppMain() {
    return (
        <>
        <div className="main-black">
            <div className="container">
            </div>
        </div>
      <section>
        <AppComics />
      </section>
        <div className="main-blue">
            <div className="container flex">
                    <img src="/img/buy-comics-digital-comics.png" alt="buy-comics" />
                <p>DIGITAL COMICS</p>
                
                <img src="/img/buy-comics-merchandise.png" alt="buy-merchandise" />
                <p>DC MERCHANDISE</p>
                <img src="/img/buy-comics-subscriptions.png" alt="subscriptions" />
                <p>SUSCRIBTIONS</p>
                <img src="/img/buy-comics-shop-locator.png" alt="locator" />
                <p>COME SHOP LOCATOR</p>
                <img src="/img/buy-dc-power-visa.svg" alt="visa" />
                <p>DC POWER VISA</p>
            </div>
        </div>
        </>
    )
}

export default AppMain;