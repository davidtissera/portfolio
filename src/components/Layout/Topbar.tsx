import { ReactEventHandler } from 'react';
import { useTranslation } from 'react-i18next';
import { routes, IRoute } from '@/router/routes'
import { useMobile } from '@/hooks/useMobile';
import { HamburgerMenuIcon } from '@/components/HamburgerMenuIcon';
import './css/Topbar.css'
import { Link } from 'react-router-dom';

export interface IITopbar {
  onClickMenuIcon: ReactEventHandler;
  isHamburgerMenuActive: boolean;
  onChangeLanguage: () => void;
  countryFlag: "🇪🇸" | "🇬🇧";
}

function Topbar(props: IITopbar) {
  const { onClickMenuIcon, isHamburgerMenuActive } = props
  const isMobile = useMobile()

  const { i18n } = useTranslation()

  const languages = [
    { language: 'en', flag: "🇬🇧" },
    { language: 'es', flag: "🇪🇸" }
  ]

  const getCurrentLanguageCountryFlag = () => {
    const flag = languages.filter((l) => i18n.language.includes(l.language))[0].flag as "🇪🇸" | "🇬🇧"

    return flag
  }

  const handleChangeLanguage = () => {
    if (i18n.language === 'es') {
      i18n.changeLanguage('en')
    } else {
      i18n.changeLanguage('es')
    }
  }

  return (
    isMobile ? (
      <TopbarMobile
        isHamburgerMenuActive={isHamburgerMenuActive}
        countryFlag={getCurrentLanguageCountryFlag()}
        onChangeLanguage={handleChangeLanguage}
        onClickMenuIcon={onClickMenuIcon}
      />
    ) : (
      <TopbarDesktop
        countryFlag={getCurrentLanguageCountryFlag()}
        onChangeLanguage={handleChangeLanguage}
      />
    )
  )
}

interface ITopbarDesktop {
  onChangeLanguage: () => void;
  countryFlag: "🇪🇸" | "🇬🇧";
}

function TopbarDesktop(props: ITopbarDesktop) {
  const { t } = useTranslation()
  const { onChangeLanguage, countryFlag } = props
  return (
    <header className="topbar-desktop">
      <div className="topbar-column-one">
        <div className="topbar-circle-initials">D</div>
        <h3 className="topbar-myself-name"><b>David</b> Tissera</h3>
      </div>
      <div className="topbar-column-two">
        {routes.map((route: IRoute) => {
          return (
            <div key={route.path} className="topbar-menu-item">
              <Link to={route.path}>{t(route.label)}</Link>
            </div>
          );
        })}
        <button
          className='fs-2'
          style={{ all: 'unset', cursor: 'pointer', marginLeft: '10px' }}
          onClick={onChangeLanguage}
        >
          <span className='country-flag'>{countryFlag}</span>
        </button>
        <span></span>
      </div>
    </header>
  )
}


function TopbarMobile(props: IITopbar) {
  const { onClickMenuIcon, isHamburgerMenuActive, onChangeLanguage, countryFlag } = props

  return (
    <header className="topbar-mobile">
      <div className="topbar-menu-items-container-mobile">
        <div className="hamburger-menu-icon-container">
          <HamburgerMenuIcon isActive={isHamburgerMenuActive} onClick={onClickMenuIcon} />
        </div>
        <button
          className='fs-2'
          style={{ all: 'unset', cursor: 'pointer', marginLeft: '10px' }}
          onClick={onChangeLanguage}
        >
          <span className='country-flag'>{countryFlag}</span>
        </button>
      </div>
    </header>
  )
}


export default Topbar
