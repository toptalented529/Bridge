import { MenuEntry } from 'inve-swap-uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [

  {
    label: t('Swap'),
    icon: 'TradeIcon',
    href: '/swap'
  },

  {
    label: t('Bridge'),
    icon: 'EarningIcon',
    href: '/bridge'
  },

  {
    label: t('Stable'),
    icon: 'InfoIcon', 
    href: '/stable'
  },
  
  {
    label: t('Liquidity'),
    icon: 'InfoIcon', 
    href: '/pool'
  },
]

export default config
