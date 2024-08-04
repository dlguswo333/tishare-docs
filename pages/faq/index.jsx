import classes from './Faq.module.scss';
import {useTranslation} from 'react-i18next';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Faq () {
  const [t,] = useTranslation();

  function getItems () {
    const ret = [];
    for (let i = 1; i <= Object.keys(t('faq.items', {returnObjects: true})).length; i++) {
      ret.push(
        <Accordion key={i} className={classes.Item}>
          <AccordionSummary className={classes.ItemTitle}
            expandIcon={<ExpandMoreIcon />}>
            <span className={classes.ItemTitle}>
              {t('faq.items.' + i + '.title')}
            </span>
          </AccordionSummary>
          <AccordionDetails className={classes.ItemBody}>
            <span className={classes.ItemBody}>
              {t('faq.items.' + i + '.body')}
            </span>
          </AccordionDetails>
        </Accordion>
      );
    }
    return ret;
  }

  return (
    <div className={classes.Faq}>
      {getItems()}
    </div>
  );
}

export default Faq;
