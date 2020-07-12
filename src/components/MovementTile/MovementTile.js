import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {FlatList, TouchableHighlight} from 'react-native';
import {
  Surface,
  Subheading,
  Paragraph,
  Caption,
  IconButton,
  TextInput,
} from 'react-native-paper';
import TextInputMask from 'react-native-text-input-mask';
import styles from './styles.js';
import {map} from 'lodash';

const MovementTile = ({data}) => {
  const [movementData, setMovementData] = useState(data);

  const handleAddSet = id => {
    const newData = {...movementData};
    newData.sets.push({
      id: movementData.sets.length + 1,
      reps: null,
      weight: null,
      editing: true,
    });
    setMovementData(newData);
  };

  const handleChangeSetData = (text, id, value) => {
    const newData = map(movementData.sets, set => {
      if (set.id === id) {
        return {...set, [value]: text};
      }
      return {...set};
    });
    setMovementData({
      ...movementData,
      sets: [...newData],
    });
  };

  return (
    <>
      <Surface style={styles.listItem}>
        <Subheading>{movementData.movement}</Subheading>
        <Caption>{movementData.variable}</Caption>
      </Surface>
      <FlatList
        data={movementData.sets}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <Surface style={styles.secondaryItem}>
            <>
              <Paragraph style={styles.setId}>{item.id}</Paragraph>
              <IconButton icon="weight-kilogram" />
              {!item.editing && (
                <Paragraph style={styles.setDetails}>{item.weight}</Paragraph>
              )}
              {item.editing && (
                <TextInput
                  mode="outlined"
                  dense={true}
                  value={movementData.sets[item.id - 1].weight}
                  keyboardType="number-pad"
                  onChangeText={text =>
                    handleChangeSetData(text, item.id, 'weight')
                  }
                  render={props => <TextInputMask {...props} mask="[0000]" />}
                />
              )}
              <IconButton icon="counter" />
              {!item.editing && <Paragraph>{item.reps}</Paragraph>}
              {item.editing && (
                <TextInput
                  mode="outlined"
                  dense={true}
                  value={movementData.sets[item.id - 1].reps}
                  keyboardType="number-pad"
                  onChangeText={text =>
                    handleChangeSetData(text, item.id, 'reps')
                  }
                  render={props => <TextInputMask {...props} mask="[000]" />}
                />
              )}
            </>
          </Surface>
        )}
      />
      <TouchableHighlight
        onPress={() => handleAddSet(movementData.id)}
        activeOpacity={0.75}
        underlayColor="#fefefe">
        <Surface style={styles.secondaryItem}>
          <IconButton icon="plus" style={styles.addIcon} />
          <Paragraph>{'Add set'}</Paragraph>
        </Surface>
      </TouchableHighlight>
    </>
  );
};

MovementTile.propTypes = {
  data: PropTypes.object,
};

export default MovementTile;
