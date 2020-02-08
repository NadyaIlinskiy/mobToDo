import React, { useState } from 'react';
import { dateFix } from './util';
import { View, Text, Switch, TextInput, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

function TaskEdit(props) {
    let [name, setName] = useState(props.task.name);
    let [description, setDescription] = useState(props.task.description);
    let [priority, setPriority] = props.task.priority
        ? useState(props.task.priority)
        : useState(5);
    let [date, setDate] = useState(dateFix(props.task.date));
    let [isComplete, setIsComplete] = useState(props.task.isComplete);
    let [showDTP, setShowDTP] = useState(false);

    let h1 = {
        fontSize: 60,
        textAlign: 'center',
    };

    let label = {
        fontSize: 30,
        color: '#555',
    };

    return (
        <View>
            <Text style={h1}>Edit Tasks</Text>
            <Text style={label}>Name:</Text>
            <TextInput value={name} onChangeText={setName} />

            <Text style={label}>Description:</Text>
            <TextInput value={description} onChangeText={setDescription} />

            <Text style={label}>Priority:</Text>
            <TextInput
                value={priority.toString()}
                keyboardType='numeric'
                onChangeText={setPriority}
            />

            <Text style={label}>Date:</Text>
            <Button
                title={date.toString()}
                onPress={() => {
                    setShowDTP(true);
                }}
            />

            {showDTP ? (
                <View>
                    <DateTimePicker
                        value={new Date(date)}
                        mode='date'
                        is24Hour={true}
                        display='default'
                        onChange={(e, date) => {
                            setDate(dateFix(date));
                        }}
                    />
                    <Button
                        title='confirm'
                        onPress={() => {
                            setShowDTP(false);
                        }}
                    />
                </View>
            ) : (
                <View></View>
            )}

            <Text style={label}>Is Complete:</Text>
            <Switch value={isComplete} onChange={setIsComplete} />

            <Button
                title='Save Changes'
                onPress={e => {
                    props.edit({
                        id: props.task.id,
                        name,
                        description,
                        priority,
                        date,
                        isComplete,
                    });
                    props.close();
                }}
            />

            <Button
                title='Cancel'
                onPress={e => {
                    props.close();
                }}
            />
        </View>
    );
}

export default TaskEdit;
