import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const PlanPastGraph = () => {
  return (
    <View style={styles.container} >
      <View style={styles.balance}>
        <View style={styles.frame1514}>
          <View style={styles.frame1512}>
            <Text style={styles.balance2}>Plan Balance</Text>

            <Text style={styles._680086}>$0.00</Text>

            <View style={styles.frame414}>
              <Text style={styles._6800862}>~ ₦0.00</Text>

              <Svg
                width="9"
                height="10"
                viewBox="0 0 9 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path>
                  d="M4.50232 9.5C6.96235 9.5 9 7.46235 9 4.99768C9 2.53765 6.95771 0.5 4.49768 0.5C2.03765 0.5 0 2.53765 0 4.99768C0 7.46235 2.04229 9.5 4.50232 9.5ZM4.41413 5.93528C4.15884 5.93528 4.0196 5.80995 4.0196 5.56395V5.50825C4.0196 5.07194 4.2656 4.82594 4.59515 4.5985C4.99897 4.32001 5.18927 …[omitted]
                  </Path>
              </Svg>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // your styl
  },
  balance: {
    // your styles here
  },
  frame1514: {
    // your styles here
  },
  frame1512: {
    // your styles here
  },
  balance2: {
    // your styles here
  },
  _680086: {
    // your styles here
  },
  frame414: {
    // your styles here
  },
  _6800862: {
    // your styles here
  },
});

export default PlanPastGraph;