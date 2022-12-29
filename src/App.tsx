import React, { lazy } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { ResetCSS } from 'dbx-swap-uikit'
import BigNumber from 'bignumber.js'
import useEagerConnect from 'hooks/useEagerConnect'
import { usePollBlockNumber } from 'state/block/hooks'
import { usePollCoreFarmData } from 'state/farms/hooks'
import { useFetchProfile } from 'state/profile/hooks'
import { DatePickerPortal } from 'components/DatePicker'
import Footer from 'components/Menu/Footer'
import Menu from './components/Menu'
import SuspenseWithChunkError from './components/SuspenseWithChunkError'
import { ToastListener } from './contexts/ToastsContext'
import PageLoader from './components/Loader/PageLoader'
import EasterEgg from './components/EasterEgg'
// Views included in the main bundle
import Pools from './views/Pools'
import Swap from './views/Swap'
import {
  RedirectDuplicateTokenIds,
  RedirectOldAddLiquidityPathStructure,
  RedirectToAddLiquidity,
} from './views/AddLiquidity/redirects'
import RedirectOldRemoveLiquidityPathStructure from './views/RemoveLiquidity/redirects'
import { RedirectPathToSwapOnly, RedirectToSwap } from './views/Swap/redirects'
import GlobalStyle from './style/Global'

// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page
const Earning = lazy(() => import('./views/EarningFarms'))
const EarningWalletConnected = lazy(() => import('./views/EarningFarms/EarningWalletConnected'))

const EarningPools = lazy(() => import('./views/EarningPools'))

const Bridge = lazy(() => import('./views/Bridge'))

const AddLiquidity = lazy(() => import('./views/AddLiquidity'))
const Liquidity = lazy(() => import('./views/Pool'))
const PoolFinder = lazy(() => import('./views/PoolFinder'))
const RemoveLiquidity = lazy(() => import('./views/RemoveLiquidity'))
const Info = lazy(() => import('./views/Info'))

// This config is required for number formatting
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
  usePollBlockNumber()
  useEagerConnect()
  useFetchProfile()
  usePollCoreFarmData()

  return (
    <Router>
      <ResetCSS />
      <GlobalStyle />
      <Menu>
        <SuspenseWithChunkError fallback={<PageLoader />}>
          <Switch>
            <Route path="/farms">
              <Earning />
              {/* <Farms /> */}
            </Route>
               <Route path="/pools">
              <EarningPools />
              {/* <Pools /> */}
            </Route>
        
        
            <Route path="/earning">
              <Earning />
            </Route>
            <Route path="/earningwalletconnected">
              <EarningWalletConnected />
            </Route>
    
            <Route path="/bridge">
              <Bridge />
            </Route>

            {/* Using this format because these components use routes injected props. We need to rework them with hooks */}
            <Route exact strict path="/swap" component={Swap} />
            <Route exact strict path="/swap/:outputCurrency" component={RedirectToSwap} />
            <Route exact strict path="/send" component={RedirectPathToSwapOnly} />
            <Route exact strict path="/find" component={PoolFinder} />
            <Route exact strict path="/pool" component={Liquidity} />
            <Route exact strict path="/liquidity" component={Liquidity} />
            <Route exact strict path="/create" component={RedirectToAddLiquidity} />
            <Route exact path="/add" component={AddLiquidity} />
            <Route exact path="/add/:currencyIdA" component={RedirectOldAddLiquidityPathStructure} />
            <Route exact path="/add/:currencyIdA/:currencyIdB" component={RedirectDuplicateTokenIds} />
            <Route exact path="/create" component={AddLiquidity} />
            <Route exact path="/create/:currencyIdA" component={RedirectOldAddLiquidityPathStructure} />
            <Route exact path="/create/:currencyIdA/:currencyIdB" component={RedirectDuplicateTokenIds} />
            <Route exact strict path="/remove/:tokens" component={RedirectOldRemoveLiquidityPathStructure} />
            <Route exact strict path="/remove/:currencyIdA/:currencyIdB" component={RemoveLiquidity} />

            {/* Redirect */}
            {/* <Route path="/pool">
              <Redirect to="/liquidity" />
            </Route> */}
            <Route path="/staking">
              <Redirect to="/pools" />
            </Route>
            <Route path="/syrup">
              <Redirect to="/pools" />
            </Route>
            <Route path="/nft">
              <Redirect to="/collectibles" />
            </Route>
            <Route path="/" exact>
              <Redirect to="/swap" />
            </Route>

          </Switch>
        </SuspenseWithChunkError>
        {/* <Footer /> */}
      </Menu>
      <EasterEgg iterations={2} />
      <ToastListener />
      <DatePickerPortal />
    </Router>
  )
}

export default React.memo(App)
