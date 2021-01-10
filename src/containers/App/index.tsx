import * as React from 'react';
import { DefaultLabel } from '../../components/labels/DefaultLabel';

export const App = (): React.ReactElement => {
  const [appName, setAppName] = React.useState<string>('');

  return <div>
    <DefaultLabel label="App Name: " />
    <input
      value={appName}
      onChange={
        (e) => setAppName(e.target.value)
      }
    />
  </div>
}

