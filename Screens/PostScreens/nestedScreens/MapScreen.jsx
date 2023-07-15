import { View, Image, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import newimg from '../../../assets/images/bg.png';

export const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView provider={PROVIDER_GOOGLE}>
        <Marker>
          <Image
            source={newimg}
            style={{ width: 50, height: 50, borderRadius: 8 }}
          />
        </Marker>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
