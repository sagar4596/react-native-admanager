import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Image, Text, Linking } from 'react-native';
import { WebView } from 'react-native-webview';

const AD_URL = 'https://qa-ad-test.doceree.com/drs/quest';

const CustomAdComponent = (props: any) => {
  const [adData, setAdData] = useState<any>({});

  useEffect(() => {
    async function fetchAdData() {
      const obj = {
        adunit: props.docereeId,
        hcpid: '1674332725209',
        specialization: 'Surgery',
        userid: 'ffffffff-d6b2-b41d-ffff-ffffef05ac4a',
        zipcode: '65201',
      };
      const response = await fetch(AD_URL, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
      });
      const adData = await response.json();
      console.log(adData);
      setAdData(adData.response[0]);
    }
    fetchAdData();
  }, []);

  if (!adData) {
    return null;
  }

  if (typeof adData.adFormat === 'undefined') {
    return (
      <WebView
        source={{
          html: `<h1>This is my HTML content</h1>
          <p>This is a paragraph of text.</p>`,
        }}
      />
    );
  }

  return (
    <TouchableOpacity onPress={() => Linking.openURL(adData?.adViewedURL)}>
      <Image
        source={{ uri: adData?.imagePath }}
        style={{
          height: parseInt(
            typeof adData?.adSize !== 'undefined'
              ? adData.adSize.split('x')[1]
              : 0
          ),
          width: parseInt(
            typeof adData?.adSize !== 'undefined'
              ? adData.adSize.split('x')[0]
              : 0
          ),
        }}
      />
      <Text>{adData?.data?.response[0]?.adText}</Text>
    </TouchableOpacity>
  );
};

export default CustomAdComponent;
