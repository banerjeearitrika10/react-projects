import React, { useState } from "react";
import { View,Text, Dimensions, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  runOnJS,
  interpolate,
  withSpring,
  withTiming,
  Extrapolate,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Card from "./Card";

const { width } = Dimensions.get("window");
const SWIPE_THRESHOLD = width * 0.25;

const data = [
  { id: 1, name: "Guide 1" },
  { id: 2, name: "Guide 2" },
  { id: 3, name: "Guide 3" },
];

export default function Swiper() {
  const [index, setIndex] = useState(0);

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);
  const swipeProgress = useSharedValue(0);

  const nextCard = () => {
    setIndex((prev) => prev + 1);
  };

  const gesture = Gesture.Pan()
    .onBegin(() => {
      scale.value = withSpring(0.96);
    })
    .onUpdate((e) => {
      translateX.value = e.translationX;
      translateY.value = e.translationY * 0.1;
      swipeProgress.value = Math.abs(e.translationX);
    })
    .onEnd((e) => {
      const shouldSwipe =
        Math.abs(e.translationX) > SWIPE_THRESHOLD ||
        Math.abs(e.velocityX) > 800;

      if (shouldSwipe) {
        const exitX = e.translationX > 0 ? width * 1.2 : -width * 1.2;

        translateX.value = withTiming(exitX, { duration: 260 }, () => {
          translateX.value = 0;
          translateY.value = 0;
          scale.value = 1;
          swipeProgress.value = 0;

          runOnJS(nextCard)();
        });
      } else {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
        scale.value = withSpring(1);
      }
    });

  const cardStyle = useAnimatedStyle(() => {
    const rotate = interpolate(
      translateX.value,
      [-width, 0, width],
      [-13, 0, 13]
    );

    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { rotate: `${rotate}deg` },
        { scale: scale.value },
      ],
      opacity: interpolate(
        Math.abs(translateX.value),
        [0, SWIPE_THRESHOLD],
        [1, 0.6],
        Extrapolate.CLAMP
      ),
    };
  });

  const nextCardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          swipeProgress.value,
          [0, SWIPE_THRESHOLD],
          [0.96, 1],
          Extrapolate.CLAMP
        ),
      },
      {
        translateY: interpolate(
          swipeProgress.value,
          [0, SWIPE_THRESHOLD],
          [-10, 0],
          Extrapolate.CLAMP
        ),
      },
    ],
  }));

  if (!data[index])   
return (
    <View style={styles.container}>
      <NoGuideFoundCard />
    </View>
  );

  const current = data[index];
  const next = data[index + 1];

  return (
    <View style={styles.container}>
      {/* NEXT CARD */}
      {next && (
        <Animated.View style={[styles.cardWrapper, nextCardStyle]}>
          <Card item={next} />
        </Animated.View>
      )}

      {/* FRONT CARD */}
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.cardWrapper, cardStyle]}>
          <Card item={current} />
        </Animated.View>
      </GestureDetector>
    </View>
  );
}
const NoGuideFoundCard = React.memo(() => {
    return (
      <LinearGradient
        colors={['rgba(0,0,0,0)', 'white', 'gray']}
        locations={[0, 0.7, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.noGuideCard}
      >
        <View >
       
          <Text style={styles.noGuideTitle}>All caught up</Text>
          <Text style={styles.noGuideSubtitle}>
            Explore your liked guides while {'\n'}new ones arrive.
          </Text>
        </View>
      </LinearGradient>
    );
  });
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cardWrapper: {
    position: "absolute",
    width: "100%",
    height: 520,
    justifyContent: "center",
    alignItems: "center",
  },


  noGuideTitle: {
    fontSize: 17,
    color: 'black',
    marginBottom: 8,
    textAlign: 'center',
  },

  noGuideSubtitle: {
    fontSize: 14,
    color: '#ADADAD',
    textAlign: 'center',
    lineHeight: 18,
  },
  noGuideCard: {
    width: 320,
    height: 420,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    //padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 6,
    overflow: 'hidden',
  },

  noGuideInner: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    //backgroundColor:'#f00'
  },
});