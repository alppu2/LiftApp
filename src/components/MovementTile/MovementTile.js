import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {FlatList, TouchableHighlight, View} from 'react-native';
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
import {map, without, pullAt, remove, forEach, set} from 'lodash';

const MovementTile = ({data, deleteMovement}) => {
  const [movementData, setMovementData] = useState(data);

  useEffect(() => {
    setMovementData(data);
  }, [data]);

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

  const handleRemoveSet = id => {
    let newId = 0;
    const newData = [...movementData.sets];
    remove(newData, set => set.id === id);
    setMovementData({
      ...movementData,
      sets: [...map(newData, set => {
        newId += 1;
        return {...set, id: newId};
      })],
    });
  };

  const handleChangeSetData = (text, id, value) => {
    setMovementData({
      ...movementData,
      sets: [...map(movementData.sets, set => {
        if (set.id === id) {
          return {...set, [value]: text};
        }
        return {...set};
      })],
    });
  };

  const handleEditToggle = id => {
    const newData = map(movementData.sets, set => {
      if (set.id === id) {
        return {...set, editing: !set.editing};
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
      <Surface style={styles.listItemContainer}>
        <View style={styles.listItemHeader}>
          <Subheading>{movementData.movement}</Subheading>
          <Caption>{movementData.variable}</Caption>
        </View>
        <IconButton icon="close" onPress={() => deleteMovement(movementData.id)} />
      </Surface>
      <FlatList
        data={movementData.sets}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <Surface style={styles.secondaryItem}>
            <>
              <Paragraph style={styles.setId}>{item.id}</Paragraph>
              <IconButton style={styles.setDetailIcon} icon="weight-kilogram" />
              {!item.editing && (
                <Paragraph style={styles.setDetails}>{item.weight}</Paragraph>
              )}
              {item.editing && (
                <TextInput
                  style={styles.setDetails}
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
              <IconButton style={styles.setDetailIcon} icon="counter" />
              {!item.editing && (
                <>
                  <Paragraph style={styles.setDetails}>{item.reps}</Paragraph>
                  <IconButton
                    style={styles.editIcon}
                    icon="pencil-outline"
                    onPress={() => handleEditToggle(item.id)}
                  />
                </>
              )}
              {item.editing && (
                <>
                  <TextInput
                    style={styles.setDetails}
                    mode="outlined"
                    dense={true}
                    value={movementData.sets[item.id - 1].reps}
                    keyboardType="number-pad"
                    onChangeText={text =>
                      handleChangeSetData(text, item.id, 'reps')
                    }
                    render={props => <TextInputMask {...props} mask="[000]" />}
                  />
                  <IconButton
                    style={styles.editIcon}
                    icon="check"
                    onPress={() => handleEditToggle(item.id)}
                  />
                </>
              )}
              <IconButton
                style={styles.deleteIcon}
                icon="close"
                onPress={() => handleRemoveSet(item.id)}
              />
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
  deleteMovement: PropTypes.func,
};

export default MovementTile;
