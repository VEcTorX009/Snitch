import React, { useRef, useState, useEffect } from 'react';
import { View, ScrollView, Dimensions, StyleSheet } from 'react-native';

const Carousel = ({ children, autoSlideInterval = 3000 }) => {
  const carouselRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const { width: screenWidth } = Dimensions.get('window');

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const page = Math.floor(contentOffsetX / screenWidth);
    setCurrentPage(page);
  };

  const scrollToPage = (page) => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        x: page * screenWidth,
        animated: true,
      });
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    let interval = setInterval(() => {
      const nextPage = (currentPage + 1) % React.Children.count(children);
      scrollToPage(nextPage);
    }, autoSlideInterval);

    return () => {
      clearInterval(interval);
    };
  }, [currentPage, children, autoSlideInterval]);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        ref={carouselRef}
        onTouchStart={() => clearInterval(interval)}
        onTouchEnd={() => {
          interval = setInterval(() => {
            const nextPage = (currentPage + 1) % React.Children.count(children);
            scrollToPage(nextPage);
          }, autoSlideInterval);
        }}
      >
        {React.Children.map(children, (child, index) => (
          <View style={styles.page} key={index}>
            {child}
          </View>
        ))}
      </ScrollView>

      <View style={styles.dotsContainer}>
        {React.Children.map(children, (_, index) => (
          <View
            style={[
              styles.dot,
              index === currentPage ? styles.activeDot : null,
            ]}
            onTouchEnd={() => scrollToPage(index)}
            key={index}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      borderRadius: 100,
    flex: 1,
  },
  page: {
    width: Dimensions.get('window').width,
    borderRadius: 100,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: 'blue',
  },
});

export default Carousel;
