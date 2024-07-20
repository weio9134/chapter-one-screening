import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Checkbox } from 'react-native-paper';

type CardProps = {
  title: string;
  details: string;
  checked: boolean;
  toggle: () => void;
}

const Card = ({ title, details, checked, toggle }: CardProps) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <View style={[styles.card, checked && styles.cardChecked]}>
      {/* top bar for quick access of each todo */}
      <View style={styles.topBar}>
        {/* check box to maintain status */}
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={toggle}
        />

        {/* click title to toggle details */}
        <TouchableOpacity onPress={() => setShowMore(!showMore)} style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
      </View>

      {/* popup card of the todo details */}
      {showMore && (
        <View style={styles.detailsContainer}>
          <Text style={styles.details}>{details}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  // each card container should center the top bar with its info details
  card: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginVertical: 5,
  },

  // strike through the card if its done 
  cardChecked: {
    backgroundColor: '#f0f0f0',
    opacity: 0.6, 
  },

  // flex row across to keep elements horizontal
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },

  // the title should be bolder and bigger and take up all space to the right
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },


  // the details should have a slight line separation and smaller fonts
  detailsContainer: {
    marginTop: 5,
    paddingTop: 5,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    width: '100%',
    alignItems: 'center'
  },
  details: {
    fontSize: 16,
  },
});

export default Card;