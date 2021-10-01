import { useEffect } from 'react'
import classes from './Releases.module.scss'
import { useTranslation } from 'react-i18next'
import { pathnameState } from './States'
import { useRecoilState } from 'recoil'

function Releases() {
  const platforms = ['desktop', 'mobile']
  const [t, i18n] = useTranslation()
  /** @type {Object.<string, {title:string, body:string}} */
  const items = i18n.getResource('en', 'translation', 'releases')
  const [, setPathname] = useRecoilState(pathnameState)

  useEffect(() => {
    setPathname('/tishare-docs/releases')
  }, [setPathname])

  function getReleases(platform) {
    let ret = []
    const versions = Object.keys(items[platform])
    ret.push(<h2 key={platform}>{platform.toUpperCase()}</h2>)
    ret.push(...versions.map((version) => getRelease(platform, version)))
    return ret
  }

  /**
   * @param {string} platform
   * @param {string} ver
   */
  function getRelease(platform, ver) {
    const bullets = items[platform][ver]['bullets'].map((val, ind) => <li key={ind}>{val}</li>)
    return (
      <section className={classes.Release} key={platform + ver}>
        <div className={classes.Title}>
          <span className={classes.Version}>{ver}</span>
          <span className={classes.Date}>{new Date(items[platform][ver]['time']).toLocaleDateString(i18n.languages[0])}</span>
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