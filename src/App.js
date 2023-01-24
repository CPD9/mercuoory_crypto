
import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper 
        title="Business Cards on Setriods!"
        description="Manage ALL your digitial assets and products in one place. Join the exponentialy growing community using the Infinity Card and Magic Share™️. Save, store, collect Business contacts, NFTS, exchange & earn in fiat & crypto currencies."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper 
        title="The Infinity Card."
        description="All your cards and contacts in one place. The first Contactless Ecosystem allowing you to store and share all your card details using one card and an app"
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper 
        title="Your Network, Your Networth."
        description="Magic Share is built using Expo which runs natively on all users' devices. You can easily get the beta running on your device."
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper 
        title="Save The Planet One Tap At A Time."
        description="Did you know that 88% of business cards and flyers handed out are thrown away within the first week of handing them out? Save the trees and access a new world of smart technology with all your cards in one on the go."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made with love by {" "}
        <span className="bold">Peter Dike CEO Mercuoory ∞ Infinity™️</span>
        </p>
      </div>
    </>
  );
}

export default App;