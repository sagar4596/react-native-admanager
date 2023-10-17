import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import CustomAdComponent from 'react-native-admanager-example';

export default function App() {
  return (
    <View style={styles.container}>
      <CustomAdComponent docereeId={'DOC-412-1'} />
      <Text>Result:</Text>
      <CustomAdComponent docereeId={'DOC-397-1'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

// const response = {
//   response: [
//     {
//       status: 1,
//       adUnit: 'DOC-16-1',
//       adText: 'Sample Ad',
//       adImg:
//         'https://www.wordstream.com/wp-content/uploads/2021/07/banner-ads-examples-aws.jpg',
//       position: 1,
//       adFormat: 1,
//       adSize: '468 x 60',
//       script:
//         "<div><a href='https://doceree.com/' target='_blank'><img onload=\"(function registerImpression(){var img = document.createElement('img'); img.src='https://doceree.com/'; document.body.append(img);}).call(this)\" src='https://dev-servedbydoceree.doceree.com/generic/468x60_DocereeGeneralAd.jpg' /></a></div>",
//       userId: 'DE.V1.12048346472e.1696486835530',
//       bidRequestId: 'e46c953c-983c-4349-ac13-f9e5b93b7fa7-carvk',
//       impressionId: '63c37a0a-e3e0-435c-8f97-8bc2f19da0d7-carvk',
//       adRenderURL:
//         'https://dai.doceree.com/drs/nEvent?bidPrice=0.0&bidRequestId=e46c953c-983c-4349-ac13-f9e5b93b7fa7-carvk&bidStrategy=1&userId=DE.V1.12048346472e.1696486835530&eType=1&eventClientTime={{EVENT_CLIENT_TIME}}',
//       adViewedURL:
//         'https://dai.doceree.com/drs/nEvent?bidPrice=0.0&bidRequestId=e46c953c-983c-4349-ac13-f9e5b93b7fa7-carvk&impressionId=63c37a0a-e3e0-435c-8f97-8bc2f19da0d7-carvk&userId=DE.V1.12048346472e.1696486835530&bidStrategy=1&eType=2&viewedPercentage={{VIEWED_PERCENTAGE}}&viewedTime={{VIEWED_TIME}}&eventClientTime={{EVENT_CLIENT_TIME}}',
//     },
//   ],
// };
