import classes from './styles/Releases.module.scss'
import { useTranslation } from 'react-i18next'

function Releases() {
  const platforms = ['desktop', 'mobile']
  const [t, i18n] = useTranslation()

  function getReleases(platform) {
    let ret = []
    const versions = Object.keys(t(`releases.${platform}`, { returnObjects: true }))
    ret.push(<h2 key={platform}>{platform.toUpperCase()}</h2>)
    ret.push(...versions.map((version) => getRelease(platform, version)))
    return ret
  }

  /**
   * @param {string} platform
   * @param {string} ver
   */
  function getRelease(platform, ver) {
    const bullets = t(`releases.${platform}.${ver}.bullets`, { returnObjects: true }).map((val, ind) => <li key={ind}>{val}</li>)
    return (
      <section className={classes.Release} key={platform + ver}>
        <div className={classes.Title}>
          <span className={classes.Version}>{ver}</span>
          <span className={classes.Date}>{new Date(t(`releases.${platform}.${ver}.time`)).toLocaleDateString(i18n.languages[0])}</span>
        </div>
        {t(`releases.${platform}.${ver}.head`)}
        <ul>
          {bullets}
        </ul>
      </section>
    )
  }

  return (
    <div className={classes.Releases}>
      {platforms.map((platform) => (
        <div key={platform}>{getReleases(platform)}</div>)
      )}
    </div>
  )
}

export default Releases
