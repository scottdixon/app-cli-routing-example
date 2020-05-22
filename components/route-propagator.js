import { withRouter } from 'next/router';
import { Context } from '@shopify/app-bridge-react';
import { History } from '@shopify/app-bridge/actions';

function RoutePropagator(props) {
  return (
    <Context.Consumer>
      {app => {
        const history = History.create(app);
        history.dispatch(History.Action.PUSH, props.router.asPath);
      }}
    </Context.Consumer>
  )
};

export default withRouter(RoutePropagator);
