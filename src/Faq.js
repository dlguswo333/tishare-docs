import classes from './Faq.module.scss'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

function Faq() {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation()
  /** @type {Object.<string, {title:string, body:string}} */
  const items = i18n.getResource('en', 'translation', 'faq.items')
  const [show, setShow] = useState(Array(Object.keys(items).length).fill(false))

  /**
   * @param {number} ind
   */
  function toggleShow(ind) {
    setShow((show) => {
      const ret = show.slice()
      ret[ind] = !ret[ind]
      return ret
    })
  }

  function getItems() {
    const ret = []
    for (let i = 1; i <= Object.keys(items).length; i++) {
      ret.push(
        <Accordion key={i} className={classes.Item}>
          <AccordionSummary className={classes.ItemTitle}
            expandIcon={<ExpandMoreIcon />}
          >
            <span className={classes.ItemTitle} onClick={() => { toggleShow(i) }}>
              {t('faq.items.' + i + '.title')}
            </span>
          </AccordionSummary>
          <AccordionDetails className={classes.ItemBody}>
            <span className={classes.ItemBody}>
              {t('faq.items.' + i + '.body')}
            </span>
          </AccordionDetails>
        </Accordion>
      )
    }
    return ret
  }

  return (
    <div className={classes.Faq}>
      {getItems()}
    </div>
  )
}

export default Faq